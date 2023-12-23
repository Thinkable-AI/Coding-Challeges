"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginated = exports.PageInfoObject = exports.PaginationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let PaginationInput = class PaginationInput {
};
exports.PaginationInput = PaginationInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { defaultValue: 1 }),
    __metadata("design:type", Number)
], PaginationInput.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PaginationInput.prototype, "sortType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PaginationInput.prototype, "sortDirection", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { defaultValue: 20 }),
    __metadata("design:type", Number)
], PaginationInput.prototype, "itemsPerPage", void 0);
exports.PaginationInput = PaginationInput = __decorate([
    (0, graphql_1.InputType)()
], PaginationInput);
let PageInfoObject = class PageInfoObject {
};
exports.PageInfoObject = PageInfoObject;
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], PageInfoObject.prototype, "count", void 0);
exports.PageInfoObject = PageInfoObject = __decorate([
    (0, graphql_1.ObjectType)()
], PageInfoObject);
function Paginated(classRef) {
    let PaginatedType = class PaginatedType {
    };
    __decorate([
        (0, graphql_1.Field)(() => [classRef], { nullable: true }),
        __metadata("design:type", Array)
    ], PaginatedType.prototype, "nodes", void 0);
    __decorate([
        (0, graphql_1.Field)(() => graphql_1.Int),
        __metadata("design:type", Number)
    ], PaginatedType.prototype, "totalCount", void 0);
    __decorate([
        (0, graphql_1.Field)(() => graphql_1.Int),
        __metadata("design:type", Number)
    ], PaginatedType.prototype, "totalPages", void 0);
    PaginatedType = __decorate([
        (0, graphql_1.ObjectType)({ isAbstract: true })
    ], PaginatedType);
    return PaginatedType;
}
exports.Paginated = Paginated;
//# sourceMappingURL=pagination.dto.js.map