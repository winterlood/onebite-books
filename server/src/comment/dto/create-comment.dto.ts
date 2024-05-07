import { IsNonEmptyString } from 'src/validate-decorators';

export class CreateCommentDto {
  @IsNonEmptyString()
  author: string;

  @IsNonEmptyString()
  content: string;

  @IsNonEmptyString()
  bookId: string;
}
