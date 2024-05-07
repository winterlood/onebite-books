export type BookCategory = "FE" | "BE";

export interface Book {
  id: string;
  title: string;
  category: BookCategory;
  subTitle: string;
  author: string;
  publisher: string;
  description: string;
  coverImgUrl: string;
}

export interface BookListItem extends Omit<Book, "description"> {}

export interface Comment {
  bookId: string;
  id: string;
  content: string;
  author: string;
  createdAt: string;
}
