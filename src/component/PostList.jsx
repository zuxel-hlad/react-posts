import PostItem from '../component/PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: 'center' }}>Posts is empty</h2>;
  }

  return (
    <div className="posts">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, idx) => (
          <CSSTransition
            classNames="post"
            key={post.id + post.title}
            timeout={500}
          >
            <PostItem remove={remove} post={post} idx={idx} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
