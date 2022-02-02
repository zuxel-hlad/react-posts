import { useState } from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/select/MySelect";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const sortOptions = [
    {
      value: "title",
      name: "По названию",
    },
    {
      value: "body",
      name: "По описанию",
    },
  ];

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const setSortOption = (sortVal) => {
    setSelectedSort(sortVal);
    setPosts([...posts].sort((a, b) => a[sortVal].localeCompare(b[sortVal])));
  };

  const postList = posts.length ? (
    <PostList remove={removePost} posts={posts} title="Список постов 1" />
  ) : (
    <h2 style={{ textAlign: "center" }}>Posts is empty</h2>
  );

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr />
      <MySelect
        value={selectedSort}
        onChange={setSortOption}
        style={{ margin: "20px 0 0 0" }}
        defaultValue="Сортировать по:"
        options={sortOptions}
      />
      {postList}
    </div>
  );
};

export default App;
