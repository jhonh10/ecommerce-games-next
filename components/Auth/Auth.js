import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth({ onCloseModal, setTitleModal }) {

    const [showLogin, setShowLogin] = useState(true)

    const showLoginForm = () => {
        setTitleModal("Iniciar Sesion")
        setShowLogin(true)
    }
    const showRegisterForm = () => {
        setTitleModal("Crea una cuenta")
        setShowLogin(false)
    }

    return showLogin ? (
        <LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal} />
    ) : (
        <RegisterForm showLoginForm={showLoginForm} />
        );
}
