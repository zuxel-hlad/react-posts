import {Link} from 'react-router-dom';
import MyButton from "../button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logout = () => {
        if (localStorage.getItem('auth')) {
            localStorage.removeItem('auth')
        }
        setIsAuth(false)
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className="navbar__links">
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Navbar;
