import { IsNotEmpty, IsString } from 'class-validator';
import { IsNonEmptyString } from 'src/validate-decorators';

export class UpdateCommentDto {
  @IsNonEmptyString()
  content: string;
}
