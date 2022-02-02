import PostItem from "../component/PostItem";

const PostList = ({ posts, title,remove }) => {
  return (
    <div className="posts">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post) => (
        <PostItem remove={remove} post={post} key={post.id + post.title} />
      ))}
    </div>
  );
};
export default PostList;
