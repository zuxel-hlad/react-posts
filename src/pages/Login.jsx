import MyInput from "../component/UI/input/MyInput";
import MyButton from "../component/UI/button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = e => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth','true')
    }
    return (
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="text" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login