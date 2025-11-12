import { Field, ID, InputType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { CreateBookDto } from "./create.book.input.dto";

@InputType()
export class UpdateBookDto extends PartialType(CreateBookDto) {
    @Field(() => ID)
    @IsNotEmpty()
    _id: string
};