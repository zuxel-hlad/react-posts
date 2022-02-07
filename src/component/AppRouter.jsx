import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import { Switch, Route, Redirect } from 'react-router-dom';
import PostIdPage from '../pages/PostIdPage';
const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route exact path="/posts/:id">
        <PostIdPage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
};

export default AppRouter;
