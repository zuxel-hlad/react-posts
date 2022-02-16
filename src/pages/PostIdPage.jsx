import {useParams} from 'react-router-dom/cjs/react-router-dom.min';
import {useEffect, useState} from 'react';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/API';
import Loader from '../component/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getByID(params.id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostID(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    const postData = isLoading ? (
        <Loader/>
    ) : (
        <div>
            <h1>Пост с ID: {params.id}</h1>
            <h2>{post.title}</h2>
            <h2>{post.body}</h2>
        </div>
    );

    const postComments = isComLoading ? (
        <Loader/>
    ) : (
        <div>
            <h1>Комментарии</h1>
            {comments.map(item =>
                <div key={item.id}>
                    <h2>
                        {item.email}
                    </h2>
                    <span>{item.body}</span>
                </div>
            )}
        </div>
    );

    return (
        <div>
            <div>{error ? <h2>{error}</h2> : postData}</div>
            <div>{comError ? <h2>{comError}</h2> : postComments}</div>
        </div>

    )
};

export default PostIdPage;
