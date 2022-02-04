import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./component/UI/navbar/Navbar";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Главная страница</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="about">
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
