import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { CommentService } from 'src/comment/comment.service';

@Module({
  controllers: [BookController],
  providers: [BookService, CommentService],
})
export class BookModule {}
