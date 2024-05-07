import { CommentService } from './../comment/comment.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { BookEntity } from './entitiy/book.entity';
import { UpdateBookDto } from './dto/update-book.dto';
import { Category } from 'src/types';

@ApiTags('Book (도서 관련 API)')
@Controller('book')
export class BookController {
  constructor(
    private readonly bookService: BookService,
    private readonly commentService: CommentService,
  ) {}

  /*
   * GET
   */
  @Get()
  @ApiOperation({
    summary: '모든 도서 불러오기',
    description: '데이터베이스에 저장되어있는 모든 도서를 불러옵니다.',
  })
  @ApiQuery({
    name: 'category',
    type: String,
    description: '해당 카테고리에 속한 도서들만 불러옵니다 (FE, BE만 가능)',
    required: false,
  })
  @ApiOkResponse({
    type: BookEntity,
    isArray: true,
  })
  findAll(@Query('category') category?: Category) {
    return this.bookService.findAllBooks(category);
  }

  @Get('random')
  @ApiOperation({
    summary: '랜덤 도서 불러오기',
    description: '랜덤 3개의 도서를 불러옵니다 (추천도서에 사용하세요)',
  })
  @ApiOkResponse({
    type: BookEntity,
    isArray: true,
  })
  findRandom() {
    return this.bookService.findRandomBooks();
  }

  @Get(':bookId')
  @ApiOperation({
    summary: '특정 도서 불러오기',
    description: 'id를 기준으로 특정 도서의 정보를 불러옵니다',
  })
  @ApiParam({
    name: 'bookId',
    description: '정보를 불러오려는 도서의 아이디',
    type: String,
  })
  @ApiOkResponse({
    type: BookEntity,
  })
  @ApiNotFoundResponse({
    description: '{id}번 도서는 존재하지 않습니다',
  })
  findOne(@Param('bookId') bookId: string) {
    return this.bookService.findOneBook(bookId);
  }

  /*
   * POST
   */
  @Post()
  @ApiOperation({
    summary: '새로운 도서 생성하기',
    description:
      "새로운 도서를 생성합니다. category는 'FE' 이거나 'BE'여야 합니다.",
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          description: '도서 제목',
        },
        subTitle: {
          type: 'string',
          description: '도서 부제',
        },
        category: {
          type: 'string',
          description: '카테고리',
        },
        author: {
          type: 'string',
          description: '저자',
        },
        description: {
          type: 'string',
          description: '도서 소개',
        },
        publisher: {
          type: 'string',
          description: '출판사',
        },
        coverImgUrl: {
          type: 'string',
          description: '도서 표지 이미지 링크(URL)',
        },
      },
    },
  })
  @ApiCreatedResponse({
    type: BookEntity,
  })
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  /*
   * PATCH
   */
  @Patch(':bookId')
  @ApiOperation({
    summary: '도서 정보 수정하기',
    description: '특정 도서의 정보를 수정합니다.',
  })
  @ApiParam({
    name: 'bookId',
    description: '정보를 수정하려는 도서의 아이디',
    type: String,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          description: '도서 제목',
          nullable: true,
        },
        subTitle: {
          type: 'string',
          description: '도서 부제',
        },
        category: {
          type: 'string',
          description: '카테고리',
        },
        author: {
          type: 'string',
          description: '저자',
          nullable: true,
        },
        description: {
          type: 'string',
          description: '도서 소개',
          nullable: true,
        },
        publisher: {
          type: 'string',
          description: '출판사',
          nullable: true,
        },
        coverImgUrl: {
          type: 'string',
          description: '도서 표지 이미지 링크(URL)',
          nullable: true,
        },
      },
    },
  })
  @ApiOkResponse({
    type: BookEntity,
  })
  @ApiNotFoundResponse()
  update(
    @Param('bookId') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.bookService.updateBook(bookId, updateBookDto);
  }

  /*
   * DELETE
   */
  @Delete(':bookId')
  @ApiOperation({
    summary: '도서 삭제하기',
    description: '특정 도서를 삭제합니다.',
  })
  @ApiParam({
    name: 'bookId',
    description: '삭제하려는 도서의 아이디',
    type: String,
  })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  delete(@Param('bookId') bookId: string) {
    return this.bookService.removeBook(bookId);
  }
}
