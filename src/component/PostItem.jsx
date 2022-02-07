import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  const router = useHistory();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.idx + 1}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
