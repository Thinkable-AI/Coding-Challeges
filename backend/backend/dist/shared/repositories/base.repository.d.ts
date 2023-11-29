/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, FilterQuery, Model, Query, HydratedDocument, InferId, Error, Types } from 'mongoose';
import { BaseModel } from '../models';
import { IPaginatedType, PaginationInput } from '../dto';
interface QueryOptions {
    lean?: boolean;
    autopopulate?: boolean;
}
export declare abstract class BaseRepository<TModel extends BaseModel> {
    protected model: Model<TModel>;
    protected constructor(model: Model<TModel>);
    private static get defaultOptions();
    private static getQueryOptions;
    protected static throwMongoError(err: Error): void;
    createModel(doc?: Partial<TModel>): TModel;
    findAll(options?: QueryOptions): Promise<TModel[]>;
    findOne(options?: QueryOptions): Promise<TModel>;
    findById(_id: Types.ObjectId, options?: QueryOptions): Promise<TModel>;
    findOneByFilter(filter?: FilterQuery<Document<TModel>>, options?: QueryOptions): Promise<TModel>;
    findByFilter(filter?: FilterQuery<Document<TModel>>, options?: QueryOptions): Promise<TModel[]>;
    findByFilterAndPager(pagination: PaginationInput, filter?: FilterQuery<Document<TModel>>): Promise<IPaginatedType<TModel>>;
    create(doc: Partial<TModel>): Promise<TModel>;
    deleteOne(options?: QueryOptions): Promise<any>;
    deleteById(_id: Types.ObjectId, options?: QueryOptions): Promise<any>;
    deleteByFilter(filter?: FilterQuery<Document<TModel>>, options?: QueryOptions): Promise<any>;
    deleteAll(): Promise<boolean>;
    update(item: TModel, options?: QueryOptions): Promise<TModel>;
    count(filter?: FilterQuery<Document<TModel>>): Query<number, any, HydratedDocument<any, any, Document<TModel>>, Document<TModel>>;
    countAsync(filter?: FilterQuery<Document<TModel>>): Promise<number>;
    exists(filter?: FilterQuery<Document<TModel>>): Promise<{
        _id: InferId<TModel>;
    }>;
}
export {};
