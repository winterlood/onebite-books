import { useState } from "react";
import style from "./comment-editor.module.css";

interface State {
  author: string;
  content: string;
}

interface Props {
  onCreateComment: (data: State) => void;
}

const initialState: State = {
  author: "",
  content: "",
};

export default function CommentEditor({ onCreateComment }: Props) {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState(initialState);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    setPending(true);
    await onCreateComment(state);
    setPending(false);
    setState(initialState);
  };

  return (
    <div className={style.container}>
      <textarea
        name="content"
        value={state.content}
        onChange={onChange}
      />
      <div className={style.submit_row}>
        <input
          name="author"
          value={state.author}
          onChange={onChange}
          placeholder="작성자"
        />
        <button onClick={onSubmit} disabled={pending}>
          작성하기
        </button>
      </div>
    </div>
  );
}
