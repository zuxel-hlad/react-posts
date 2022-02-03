import { useState, useEffect } from "react";
import { usePosts } from "./hooks/usePost";
import { useFetching } from "./hooks/useFetching";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";
import MyModal from "./component/UI/MyModal/MyModal";
import MyButton from "./component/UI/button/MyButton";
import PostService from "./API/API";
import Loader from "./component/UI/loader/Loader";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modalVisible, setModalVisible] = useState(false);
  const [fetchPosts, isPostLoading, loadError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortedAndSerachedPosts = usePosts(posts, filter.sort, filter.query);
  const postList = isPostLoading ? (
    <Loader />
  ) : (
    <PostList
      remove={removePost}
      posts={sortedAndSerachedPosts}
      title="Список постов"
    />
  );

  return (
    <div className="App">
      <MyButton onClick={() => setModalVisible(true)}>Создать Пост</MyButton>
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ marginTop: "20px" }} />
      <PostFilter setFilter={setFilter} filter={filter} />
      {loadError ? <h2>Произошла ошибка {loadError}</h2> : postList }
    </div>
  );
};

export default App;
