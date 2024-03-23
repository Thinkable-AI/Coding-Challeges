import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@ObjectType()
@Schema({
  timestamps: true,
  // typePojoToMixed: true,
  toJSON: { virtuals: true, getters: true },
})
export abstract class BaseModel {
  @Field(() => ID)
  _id: Types.ObjectId;

  @Field(() => Date, { nullable: true })
  @Prop({
    type: Date,
    default: () => Date.now(),
  })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  @Prop({
    type: Date,
    default: () => Date.now(),
  })
  updatedAt?: Date;

  @Prop()
  deletedAt?: Date;
}
