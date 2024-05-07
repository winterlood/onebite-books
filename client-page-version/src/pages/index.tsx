import Link from "next/link";
import style from "./index.module.css";
import { BookListItem } from "@/types";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

interface Props {
  allBooks: BookListItem[];
  recommendBooks: BookListItem[];
}

/* SSR 적용 */
// export const getServerSideProps = async (): Promise<{
//   props: Props;
// }> => {
//   const [allBooks, recommendBooks] = await Promise.all([
//     fetchBooks(),
//     fetchRandomBooks(),
//   ]);

//   return {
//     props: {
//       allBooks,
//       recommendBooks,
//     },
//   };
// };

/* ISR 적용 -> 5초 */
export const getStaticProps = async () => {
  const [allBooks, recommendBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recommendBooks,
    },
    revalidate: 10,
  };
};

export default function Home({ allBooks, recommendBooks }: Props) {
  return (
    <div className={style.container}>
      <section className={style.banner_section}>
        <img
          src={
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </section>
      <section>
        <h3>지금 추천하는 도서</h3>
        <div>
          {recommendBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
      </section>
      <section>
        <Link href={"books"}>
          <h3>등록된 모든 도서</h3>
        </Link>
        <div>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
      </section>
    </div>
  );
}
