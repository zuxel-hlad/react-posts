import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/API';
import Loader from '../component/UI/loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getByID(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById();
  }, []);

  const postData = isLoading ? (
    <Loader />
  ) : (
    <div>
      <h1>Пост с ID: {params.id}</h1>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );

  return <div>{error ? <h2>{error}</h2> : postData}</div>;
};

export default PostIdPage;
