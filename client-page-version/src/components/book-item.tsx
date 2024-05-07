import { BookListItem } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

interface Props extends BookListItem {}

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  category,
  publisher,
  coverImgUrl,
}: Props) {
  return (
    <div className={style.container}>
      <Link href={`/detail/${id}`}>
        <div className={style.inner}>
          <div>
            <img src={coverImgUrl} />
          </div>
          <div>
            <div className={style.title}>{title}</div>
            <div className={style.subtitle}>{subTitle}</div>
            <br />
            <div className={style.author}>
              {author} | {publisher}
            </div>
            <div className={style.category}>{category} 도서</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
