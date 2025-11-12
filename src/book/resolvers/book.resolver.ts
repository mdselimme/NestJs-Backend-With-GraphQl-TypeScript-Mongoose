import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';
import { CreateBookDto } from '../dto/create.book.input.dto';
import { UpdateBookDto } from '../dto/update.book.input.dto';

@Resolver(() => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService) { }

    @Query(() => [Book], {
        name: "getAllBooks"
    })
    async findAll() {
        return this.bookService.findAllBook()
    }

    @Query(() => Book, {
        name: "getBook"
    })
    async findOne(@Args('id', { type: () => String }) id: string) {
        return this.bookService.findBookById(id)
    }

    @Mutation(() => Book)
    async createBook(@Args('input') input: CreateBookDto) {
        return this.bookService.createBook(input)
    }

    @Mutation(() => Book)
    async updateBook(@Args('input') input: UpdateBookDto) {
        return this.bookService.updateBook(input);
    }

    @Mutation(() => Boolean)
    async deleteBook(@Args('id', { type: () => String }) id: string) {
        return this.bookService.deleteBook(id)
    }
}
