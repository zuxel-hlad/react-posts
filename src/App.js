import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/UI/navbar/Navbar';
import AppRouter from './component/AppRouter';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Главная страница</h1>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;
