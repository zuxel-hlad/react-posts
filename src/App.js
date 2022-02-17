import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './component/UI/navbar/Navbar';
import AppRouter from './component/AppRouter';
import {AuthContext} from "./context/context";
import {useEffect, useState} from "react";
import './styles/App.css';

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])
    return (
        <div className="App">
            <h1>Главная страница</h1>
            <AuthContext.Provider value={{isAuth, setIsAuth, loading}}>
                <Router>
                    <Navbar/>
                    <AppRouter/>
                </Router>
            </AuthContext.Provider>
        </div>
    );
};

export default App;
