import { Comment } from "@/types";
import style from "./comment-item.module.css";
import deleteComment from "@/lib/delete-comment";

interface Props extends Comment {
  onDeleteComment: (commentId: string) => void;
}

export default function CommentItem({
  id,
  author,
  content,
  createdAt,
  onDeleteComment,
}: Props) {
  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDeleteComment(id);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.tools}>
        <div>{new Date(createdAt).toLocaleDateString()}</div>
        <div className={style.delete_btn} onClick={handleDelete}>
          삭제하기
        </div>
      </div>
    </div>
  );
}
