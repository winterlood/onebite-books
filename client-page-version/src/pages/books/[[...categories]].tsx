import BookItem from "@/components/book-item";
import BooksLayout from "@/components/layout/books-layout";
import { CATEGORIES } from "@/contants";
import { BookCategory, BookListItem } from "@/types";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { ReactNode } from "react";
import style from "./[[...categories]].module.css";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { categories } = ctx.query;

  /* 1. id가 배열이 아니면 -> 전체 책 다 불러오기 */
  if (!Array.isArray(categories)) {
    const books = await fetchBooks();
    return {
      props: {
        books,
      },
    };
  }

  /* 2. id가 길이가 1이상이라면 -> 404 */
  if (categories.length !== 1) {
    return { redirect: { destination: "/404" } };
  }

  /* 3. id가 FE, BE중 하나가 아니라면 -> 404 */
  const category = categories[0];
  if (!CATEGORIES.includes(category.toUpperCase() as BookCategory)) {
    return { redirect: { destination: "/404" } };
  }

  /* 4. id가 FE, BE중 하나라면 -> 해당 데이터 불러오기 */
  const books = await fetchBooks(
    category.toUpperCase() as BookCategory
  );
  return {
    props: {
      books,
    },
  };
};

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactNode) {
  return <BooksLayout>{page}</BooksLayout>;
};
