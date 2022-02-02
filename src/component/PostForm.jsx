import { useState } from "react";
import MyButton from "../component/UI/button/MyButton";
import MyInput from "../component/UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    if (post.title || post.body !== "") {
      const newPost = {
        ...post,
        id: Date.now(),
      };
      create(newPost);
      setPost({ title: "", body: "" });
    } else {
      return;
    }
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton type="submit" onClick={addNewPost}>
        Создать
      </MyButton>
    </form>
  );
};

export default PostForm;
