import { IsEnum, IsNotEmpty } from 'class-validator';
import { IsCustomUrl, IsNonEmptyString } from 'src/validate-decorators';

enum Category {
  FE = 'FE',
  BE = 'BE',
}

export class CreateBookDto {
  @IsNonEmptyString()
  title: string;

  @IsNonEmptyString()
  subTitle: string;

  @IsNotEmpty()
  @IsEnum(Category, {
    message: '카테고리는 FE 이거나 BE 둘 중 하나여야 합니다',
  })
  category: 'FE' | 'BE';

  @IsNonEmptyString()
  description: string;

  @IsNonEmptyString()
  author: string;

  @IsNonEmptyString()
  publisher: string;

  @IsCustomUrl()
  coverImgUrl: string;
}
