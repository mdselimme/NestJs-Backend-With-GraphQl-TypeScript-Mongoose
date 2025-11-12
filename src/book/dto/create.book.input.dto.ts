import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

@InputType()
export class CreateBookDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    title: string

    @Field({ nullable: true })
    @IsString()
    description: string

    @Field()
    @IsString()
    @IsNotEmpty()
    author: string

    @Field()
    @IsNumber()
    @Min(1)
    pages: number
};