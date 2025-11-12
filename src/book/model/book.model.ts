import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({ versionKey: false, timestamps: true })
@ObjectType()
export class Book extends Document {
    @Field(() => ID)
    declare readonly _id: string

    @Prop({ required: true })
    @Field()
    title: string;

    @Prop()
    @Field({ nullable: true })
    description?: string;

    @Prop({ required: true })
    @Field()
    author: string;

    @Prop({ required: true })
    @Field()
    pages: number;
};

export const BookSchema = SchemaFactory.createForClass(Book);