import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './model/book.model';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create.book.input.dto';
import { UpdateBookDto } from './dto/update.book.input.dto';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

    async createBook(input: CreateBookDto): Promise<Book> {
        const book = new this.bookModel(input);
        return book.save();
    };

    async findAllBook(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    async findBookById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id).exec();
        if (!book) {
            throw new NotFoundException('Book not found');
        }
        return book;
    }

    async updateBook(updateBook: UpdateBookDto): Promise<Book> {
        const bookUpdate = await this.bookModel.findByIdAndUpdate(updateBook._id, updateBook, { new: true, runValidators: true });
        if (!bookUpdate) {
            throw new NotFoundException('Book not found');
        }
        return bookUpdate;
    };

    async deleteBook(id: string): Promise<boolean> {
        const deleteBook = await this.bookModel.findByIdAndDelete(id);
        if (!deleteBook) {
            throw new NotFoundException('Book not found');
        }
        return true;
    }
};
