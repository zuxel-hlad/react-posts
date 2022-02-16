import MyInput from "../component/UI/input/MyInput";
import MyButton from "../component/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Страница логина</h1>
            <form>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="text" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login