import { Type } from '@nestjs/common';
export declare class PaginationInput {
    page: number;
    sortType?: string;
    sortDirection?: boolean;
    itemsPerPage: number;
}
export declare class PageInfoObject {
    count: number;
}
export interface IPaginatedType<T> {
    nodes: T[];
    totalCount: number;
    totalPages: number;
}
export declare function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>>;
