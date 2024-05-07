import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BookModule, CommentModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
