import { fetchComments } from "@/lib/fetch-comments";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-book";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import CommentItem from "@/components/comment-item";
import { useState } from "react";
import deleteComment from "@/lib/delete-comment";
import CommentEditor from "@/components/comment-editor";
import createComment from "@/lib/create-comment";

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { id } = ctx.query;
  try {
    const [book, comments] = await Promise.all([
      fetchOneBook(id as string),
      fetchComments(id as string),
    ]);

    return {
      props: {
        ...book,
        comments,
      },
    };
  } catch (err) {
    console.log(err);
    return { redirect: { destination: "/404" } };
  }
};

export default function Page({
  id,
  title,
  subTitle,
  author,
  publisher,
  description,
  category,
  coverImgUrl,
  comments: serverComments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [localComments, setLocalComments] = useState(serverComments);

  const onCreateComment = async (data: {
    content: string;
    author: string;
  }) => {
    try {
      const res = await createComment({
        bookId: String(id),
        ...data,
      });
      setLocalComments([res, ...localComments]);
    } catch (err) {
      console.error(err);
    }
  };

  const onDeleteComment = async (commentId: string) => {
    try {
      await deleteComment(commentId);
      setLocalComments(
        localComments.filter((comment) => comment.id !== commentId)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={style.container}>
      <section className={style.book_info_section}>
        <div
          className={style.cover_img_conatiner}
          style={{ backgroundImage: `url('${coverImgUrl}')` }}
        >
          <img src={coverImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </section>

      <section className={style.review_section}>
        <div className={style.review_count}>
          {localComments.length}개의 댓글이 있습니다
        </div>

        <CommentEditor onCreateComment={onCreateComment} />

        <div>
          {localComments.map((comment) => (
            <CommentItem
              key={comment.id}
              {...comment}
              onDeleteComment={onDeleteComment}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
