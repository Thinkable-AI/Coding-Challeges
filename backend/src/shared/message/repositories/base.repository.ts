import { InternalServerErrorException } from '@nestjs/common';
import {
  Document,
  FilterQuery,
  Model,
  // ModelUpdateOptions,
  Query,
  // QueryFindOneAndUpdateOptions,
  HydratedDocument,
  InferId,
  // DocumentQuery,
  Error,
  Types,
} from 'mongoose';
import { BaseModel } from '../models';
import { IPaginatedType, PaginationInput } from '../dto';

// type QueryList<T extends BaseModel> = Document<Array<T>, Document<T>>;
// type QueryItem<T extends BaseModel> = Document<T, Document<T>>;

interface QueryOptions {
  lean?: boolean;
  autopopulate?: boolean;
}
export abstract class BaseRepository<TModel extends BaseModel> {
  protected model: Model<TModel>;

  protected constructor(model: Model<TModel>) {
    this.model = model;
  }

  private static get defaultOptions(): QueryOptions {
    return { lean: true, autopopulate: true };
  }

  private static getQueryOptions(options?: QueryOptions) {
    const mergedOptions = {
      ...BaseRepository.defaultOptions,
      ...(options || {}),
    };
    const option = mergedOptions.lean ? { virtuals: true } : null;

    if (option && mergedOptions.autopopulate) {
      option['autopopulate'] = true;
    }

    return { lean: option, autopopulate: mergedOptions.autopopulate };
  }

  protected static throwMongoError(err: Error): void {
    throw new InternalServerErrorException(err, err.message);
  }

  // * Create Model.
  createModel(doc?: Partial<TModel>): TModel {
    return new this.model(doc);
  }

  // * Find all.
  async findAll(options?: QueryOptions): Promise<TModel[]> {
    return this.model
      .find()
      .setOptions(BaseRepository.getQueryOptions(options));
  }

  async findOne(options?: QueryOptions): Promise<TModel> {
    return this.model
      .findOne()
      .setOptions(BaseRepository.getQueryOptions(options));
  }

  // * Find by ID.
  async findById(_id: Types.ObjectId, options?: QueryOptions): Promise<TModel> {
    try {
      const item = await this.model
        .findById(_id)
        .setOptions(BaseRepository.getQueryOptions(options));

      if (!item) {
        new Error('Not found!');
      }

      return item;
    } catch (e) {
      console.error(
        `Exception find ${this.model.modelName} by ID ${_id}. ${e}`,
      );
      throw new Error(e);
    }
  }

  // * Find one by filter.
  async findOneByFilter(
    filter: FilterQuery<Document<TModel>> = {},
    options?: QueryOptions,
  ): Promise<TModel> {
    try {
      const item = await this.model
        .findOne(filter)
        .setOptions(BaseRepository.getQueryOptions(options));

      if (!item) {
        new Error('Not found!');
      }

      return item;
    } catch (e) {
      console.error(`Exception find ${this.model.modelName}. ${e}`);
      throw new Error(e);
    }
  }

  // * Find by filter.
  async findByFilter(
    filter: FilterQuery<Document<TModel>> = {},
    options?: QueryOptions,
  ): Promise<TModel[]> {
    try {
      const items = await this.model
        .find(filter)
        .setOptions(BaseRepository.getQueryOptions(options));

      if (!items) {
        throw new Error('Not found!');
      }

      return items;
    } catch (e) {
      console.error(`Exception find ${this.model.modelName}. ${e}`);
      throw e;
    }
  }

  // * Find by filter with pager.
  async findByFilterAndPager(
    pagination: PaginationInput,
    filter: FilterQuery<Document<TModel>> = {},
  ): Promise<IPaginatedType<TModel>> {
    try {
      const nodes = await this.model
        .find(filter)
        // .sort({ [pagination.sortType]: pagination.sortDirection })
        .skip(
          pagination.itemsPerPage * pagination.page - pagination.itemsPerPage,
        )
        .limit(pagination.itemsPerPage);

      const count = await this.model.countDocuments(filter).exec();

      return {
        nodes,
        totalCount: count,
        totalPages: Math.ceil(count / pagination.itemsPerPage),
      };
    } catch (e) {
      console.error(
        `Exception searching ${this.model.modelName} page ${pagination.page}. ${e}`,
      );
      throw e;
    }
  }

  // * Create new item.
  // create(item: CreateQuery<TModel>): Promise<DocumentType<TModel>> {
  create(doc: Partial<TModel>): Promise<TModel> {
    try {
      const item = this.createModel(doc);
      return this.model.create(item);
    } catch (e) {
      BaseRepository.throwMongoError(e);
    }
  }

  // * Delete by options.
  async deleteOne(options?: QueryOptions): Promise<any> {
    return this.model
      .findOneAndDelete()
      .setOptions(BaseRepository.getQueryOptions(options));
  }

  // * Delete by id.
  async deleteById(_id: Types.ObjectId, options?: QueryOptions): Promise<any> {
    return this.model
      .findByIdAndDelete(_id)
      .setOptions(BaseRepository.getQueryOptions(options));
  }

  // * Delete by id.
  async deleteByFilter(
    filter: FilterQuery<Document<TModel>> = {},
    options?: QueryOptions,
  ): Promise<any> {
    return this.model
      .deleteMany(filter)
      .setOptions(BaseRepository.getQueryOptions(options));
  }

  // * Delete all.
  async deleteAll(): Promise<boolean> {
    try {
      await this.model.deleteMany({}).exec();
      return true;
    } catch (e) {
      console.error(`Exception deleting all ${this.model.modelName}. ${e}`);
      throw e;
    }
  }

  // * Update by id and options.
  async update(item: TModel, options?: QueryOptions): Promise<TModel> {
    return this.model
      .findByIdAndUpdate(item._id, { $set: item } as any, {
        omitUndefined: true,
        new: true,
      })
      .setOptions(BaseRepository.getQueryOptions(options));
  }

  // * Update by id.
  // async updateById(
  //   id: Types.ObjectId,
  //   updateQuery: UpdateQuery<Document<TModel>>,
  //   // updateOptions: QueryFindOneAndUpdateOptions & { multi?: boolean } = {},
  //   updateOptions: any & { multi?: boolean } = {},
  //   options?: QueryOptions,
  // ): Promise<ModifyResult<HydratedDocument<TModel, unknown, unknown>>> {
  //   return this.updateByFilter(
  //     { _id: id },
  //     updateQuery,
  //     updateOptions,
  //     options,
  //   );
  // }

  // * Update by filter.
  // async updateByFilter(
  //   filter: FilterQuery<Document<TModel>> = {},
  //   updateQuery: UpdateQuery<Document<TModel>>,
  //   // updateOptions: QueryFindOneAndUpdateOptions = {},
  //   updateOptions: any = {},
  //   options?: QueryOptions,
  // ): Promise<ModifyResult<HydratedDocument<TModel, unknown, unknown>>> {
  //   return this.model
  //     .findOneAndUpdate(filter, updateQuery, {
  //       ...Object.assign({ omitUndefined: true }, updateOptions),
  //       new: true,
  //     })
  //     .setOptions(BaseRepository.getQueryOptions(options));
  // }

  count(
    filter: FilterQuery<Document<TModel>> = {},
  ): Query<
    number,
    any,
    HydratedDocument<any, any, Document<TModel>>,
    Document<TModel>
  > {
    return this.model.countDocuments(filter);
  }
  // * Async count items.
  async countAsync(
    filter: FilterQuery<Document<TModel>> = {},
  ): Promise<number> {
    try {
      return this.count(filter);
    } catch (e) {
      BaseRepository.throwMongoError(e);
    }
  }

  // * Check if item exists.
  async exists(
    filter: FilterQuery<Document<TModel>> = {},
  ): Promise<{ _id: InferId<TModel> }> {
    try {
      return this.model.exists(filter);
    } catch (e) {
      BaseRepository.throwMongoError(e);
    }
  }
}
