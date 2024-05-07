import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async createComment(createCommentDto: CreateCommentDto) {
    return await this.prisma.comment.create({
      data: { ...createCommentDto, bookId: +createCommentDto.bookId },
    });
  }

  async findAllComments() {
    return await this.prisma.comment.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findBookComments(bookId: string) {
    return await this.prisma.comment.findMany({
      where: {
        bookId: +bookId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateComment(commentId: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id: +commentId,
      },
    });
    if (!comment) {
      throw new NotFoundException(`${commentId}번 댓글은 존재하지 않습니다`);
    }

    return await this.prisma.comment.update({
      where: {
        id: +commentId,
      },
      data: updateCommentDto,
    });
  }

  async removeComment(commentId: string) {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id: +commentId,
      },
    });
    if (!comment) {
      throw new NotFoundException(`${commentId}번 댓글은 존재하지 않습니다`);
    }
    await this.prisma.comment.delete({
      where: {
        id: +commentId,
      },
    });
  }
}
