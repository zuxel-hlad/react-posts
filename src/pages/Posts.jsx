import { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePost";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../component/UI/pagination/Pagination";
import PostList from "../component/PostList";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import MyModal from "../component/UI/MyModal/MyModal";
import MyButton from "../component/UI/button/MyButton";
import PostService from "../API/API";
import Loader from "../component/UI/loader/Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostLoading, loadError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalPagesCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalPagesCount, limit));
  });
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
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
    <div className="posts">
      <MyButton onClick={() => setModalVisible(true)}>Создать Пост</MyButton>
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ marginTop: "20px" }} />
      <PostFilter setFilter={setFilter} filter={filter} />
      {loadError ? <h2>Произошла ошибка {loadError}</h2> : postList}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
};

export default Posts;
