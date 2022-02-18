import {useState, useEffect, useRef} from 'react';
import {usePosts} from '../hooks/usePost';
import {useFetching} from '../hooks/useFetching';
import {getPageCount} from '../utils/pages';
import Pagination from '../component/UI/pagination/Pagination';
import PostList from '../component/PostList';
import PostForm from '../component/PostForm';
import PostFilter from '../component/PostFilter';
import MyModal from '../component/UI/MyModal/MyModal';
import MyButton from '../component/UI/button/MyButton';
import MySelect from "../component/UI/select/MySelect";
import PostService from '../API/API';
import {useObserver} from "../hooks/useObserver";
import Loader from '../component/UI/loader/Loader';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modalVisible, setModalVisible] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElementInPosts = useRef();
    const [fetchPosts, isPostLoading, loadError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalPagesCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalPagesCount, limit));
    });

    useObserver(lastElementInPosts, page < totalPages, isPostLoading, () => setPage(page + 1))

    useEffect(() => {
        fetchPosts();
    }, [page, limit]);

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

    return (
        <div className="posts">
            <MyButton onClick={() => setModalVisible(true)}>Создать Пост</MyButton>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{marginTop: '20px'}}/>
            <PostFilter setFilter={setFilter} filter={filter}/>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue={'Загружать постов:'}
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: 'Все сразу', name: '-1'}
                ]}
            />
            {loadError && <h2>Произошла ошибка {loadError}</h2>}
            <PostList
                remove={removePost}
                posts={sortedAndSerachedPosts}
                title="Список постов"
            />
            <div ref={lastElementInPosts} className="infinite" style={{height: '10px', background: '#ccc'}}></div>
            {isPostLoading && <Loader/>}
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
    );
};

export default Posts;
