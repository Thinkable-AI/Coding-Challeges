import { Type } from '@nestjs/common';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  @Field(() => Int, { defaultValue: 1 })
  page: number;

  @Field(() => String, { nullable: true })
  sortType?: string;

  @Field(() => Boolean, { nullable: true })
  sortDirection?: boolean;

  @Field(() => Int, { defaultValue: 20 })
  itemsPerPage: number;
}

@ObjectType()
export class PageInfoObject {
  @Field(() => Number)
  count: number;
}

export interface IPaginatedType<T> {
  nodes: T[];
  totalCount: number;
  totalPages: number;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    @Field(() => [classRef], { nullable: true })
    nodes: T[];

    @Field(() => Int)
    totalCount: number;

    @Field(() => Int)
    totalPages: number;
  }
  return PaginatedType as Type<IPaginatedType<T>>;
}
