"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    static get defaultOptions() {
        return { lean: true, autopopulate: true };
    }
    static getQueryOptions(options) {
        const mergedOptions = Object.assign(Object.assign({}, BaseRepository.defaultOptions), (options || {}));
        const option = mergedOptions.lean ? { virtuals: true } : null;
        if (option && mergedOptions.autopopulate) {
            option['autopopulate'] = true;
        }
        return { lean: option, autopopulate: mergedOptions.autopopulate };
    }
    static throwMongoError(err) {
        throw new common_1.InternalServerErrorException(err, err.message);
    }
    createModel(doc) {
        return new this.model(doc);
    }
    async findAll(options) {
        return this.model
            .find()
            .setOptions(BaseRepository.getQueryOptions(options));
    }
    async findOne(options) {
        return this.model
            .findOne()
            .setOptions(BaseRepository.getQueryOptions(options));
    }
    async findById(_id, options) {
        try {
            const item = await this.model
                .findById(_id)
                .setOptions(BaseRepository.getQueryOptions(options));
            if (!item) {
                new mongoose_1.Error('Not found!');
            }
            return item;
        }
        catch (e) {
            console.error(`Exception find ${this.model.modelName} by ID ${_id}. ${e}`);
            throw new mongoose_1.Error(e);
        }
    }
    async findOneByFilter(filter = {}, options) {
        try {
            const item = await this.model
                .findOne(filter)
                .setOptions(BaseRepository.getQueryOptions(options));
            if (!item) {
                new mongoose_1.Error('Not found!');
            }
            return item;
        }
        catch (e) {
            console.error(`Exception find ${this.model.modelName}. ${e}`);
            throw new mongoose_1.Error(e);
        }
    }
    async findByFilter(filter = {}, options) {
        try {
            const items = await this.model
                .find(filter)
                .setOptions(BaseRepository.getQueryOptions(options));
            if (!items) {
                throw new mongoose_1.Error('Not found!');
            }
            return items;
        }
        catch (e) {
            console.error(`Exception find ${this.model.modelName}. ${e}`);
            throw e;
        }
    }
    async findByFilterAndPager(pagination, filter = {}) {
        try {
            const nodes = await this.model
                .find(filter)
                .skip(pagination.itemsPerPage * pagination.page - pagination.itemsPerPage)
                .limit(pagination.itemsPerPage);
            const count = await this.model.countDocuments(filter).exec();
            return {
                nodes,
                totalCount: count,
                totalPages: Math.ceil(count / pagination.itemsPerPage),
            };
        }
        catch (e) {
            console.error(`Exception searching ${this.model.modelName} page ${pagination.page}. ${e}`);
            throw e;
        }
    }
    create(doc) {
        try {
            const item = this.createModel(doc);
            return this.model.create(item);
        }
        catch (e) {
            BaseRepository.throwMongoError(e);
        }
    }
    async deleteOne(options) {
        return this.model
            .findOneAndDelete()
            .setOptions(BaseRepository.getQueryOptions(options));
    }
    async deleteById(_id, options) {
        return this.model
            .findByIdAndDelete(_id)
            .setOptions(BaseRepository.getQueryOptions(options));
    }
    async deleteByFilter(filter = {}, options) {
        return this.model
            .deleteMany(filter)
            .setOptions(BaseRepository.getQueryOptions(options));
    }
    async deleteAll() {
        try {
            await this.model.deleteMany({}).exec();
            return true;
        }
        catch (e) {
            console.error(`Exception deleting all ${this.model.modelName}. ${e}`);
            throw e;
        }
    }
    async update(item, options) {
        return this.model
            .findByIdAndUpdate(item._id, { $set: item }, {
            omitUndefined: true,
            new: true,
        })
            .setOptions(BaseRepository.getQueryOptions(options));
    }
    count(filter = {}) {
        return this.model.countDocuments(filter);
    }
    async countAsync(filter = {}) {
        try {
            return this.count(filter);
        }
        catch (e) {
            BaseRepository.throwMongoError(e);
        }
    }
    async exists(filter = {}) {
        try {
            return this.model.exists(filter);
        }
        catch (e) {
            BaseRepository.throwMongoError(e);
        }
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map