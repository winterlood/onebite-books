import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CommentEntity } from './entity/comment.entity';

@ApiTags('Comment (댓글 관련 API)')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  /*
   * GET
   */
  @Get('')
  @ApiExcludeEndpoint()
  findAllComments() {
    return this.commentService.findAllComments();
  }

  @Get('/book/:bookId')
  @ApiOperation({
    summary: '도서의 댓글 불러오기',
    description: '특정 도서의 댓글을 모두 불러옵니다.',
  })
  @ApiParam({
    name: 'bookId',
    description: '댓글을 불러오고 싶은 도서의 아이디',
    type: String,
  })
  @ApiOkResponse({
    type: CommentEntity,
    isArray: true,
  })
  findComments(@Param('bookId') bookId: string) {
    return this.commentService.findBookComments(bookId);
  }

  /*
   * POST
   */
  @Post()
  @ApiOperation({
    summary: '새로운 댓글 생성하기',
    description: '새로운 댓글을 작성합니다',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        bookId: {
          type: 'string',
          description: '도서 ID',
        },
        content: {
          type: 'string',
          description: '댓글 내용',
        },
        author: {
          type: 'string',
          description: '작성자',
        },
      },
    },
  })
  @ApiCreatedResponse({
    type: CommentEntity,
    description: '생성된 댓글을 반환합니다',
  })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(createCommentDto);
  }

  /*
   * PATCH
   */
  @Patch(':commentId')
  @ApiOperation({
    summary: '댓글 수정하기',
    description: '특정 댓글을 수정합니다',
  })
  @ApiParam({
    name: 'commentId',
    description: '수정하려는 댓글의 아이디',
    type: String,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          description: '댓글 내용',
          nullable: true,
        },
        author: {
          type: 'string',
          description: '작성자',
          nullable: true,
        },
      },
    },
  })
  @ApiOkResponse({
    type: CommentEntity,
    description: '수정된 댓글을 반환합니다',
  })
  update(
    @Param('commentId') commentId: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.updateComment(commentId, updateCommentDto);
  }

  /*
   * DELETE
   */
  @Delete(':commentId')
  @ApiOperation({
    summary: '댓글 삭제하기',
    description: '특정 댓글을 삭제합니다',
  })
  @ApiParam({
    name: 'commentId',
    description: '삭제하려는 댓글의 아이디',
    type: String,
  })
  @ApiOkResponse({
    description: '댓글이 삭제되었습니다',
  })
  @ApiNotFoundResponse({
    description: '삭제하려는 댓글이 존재하지 않습니다',
  })
  remove(@Param('commentId') commentId: string) {
    return this.commentService.removeComment(commentId);
  }
}
