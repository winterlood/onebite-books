import { ApiProperty } from '@nestjs/swagger';

export class CommentEntity {
  @ApiProperty({
    description: '아이디',
  })
  id: string;

  @ApiProperty({
    description: '댓글 내용',
  })
  content: string;

  @ApiProperty({
    description: '작성자',
  })
  author: string;

  @ApiProperty({
    description: '작성 시기',
  })
  createdAt: Date;

  @ApiProperty({
    description: '도서 id',
  })
  bookId: string;
}
