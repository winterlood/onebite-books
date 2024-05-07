import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from 'src/types';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async createBook(createBookDto: CreateBookDto) {
    return await this.prisma.book.create({
      data: createBookDto,
    });
  }

  async findAllBooks(category?: Category) {
    return await this.prisma.book.findMany({
      where: {
        category: category,
      },
    });
  }

  async findRandomBooks() {
    return await this.prisma.$queryRawUnsafe(
      `SELECT * FROM "Book" ORDER BY RANDOM() LIMIT 3;`,
    );
  }

  async findOneBook(id: string) {
    const book = await this.prisma.book.findUnique({
      where: {
        id: +id,
      },
    });
    if (!book) {
      throw new NotFoundException(`${id}번 도서는 존재하지 않습니다`);
    }
    return book;
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto) {
    return await this.prisma.book.update({
      where: {
        id: +id,
      },
      data: updateBookDto,
    });
  }

  async removeBook(id: string) {
    await this.prisma.book.delete({
      where: {
        id: +id,
      },
    });
  }
}
