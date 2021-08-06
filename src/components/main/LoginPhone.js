import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from './modal/LoginForm';
import RegisterForm from './modal/RegisterForm';

const LoginPhone = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const history = useHistory();
    return (
        <div className="loginPhone">
            <img onClick={() => history.push('/home')} className="exitButton" src="https://img.icons8.com/fluent-systems-filled/48/000000/x.png" alt="x" />
            <div className="welcome">
                <div className="welcome-text">
                    <h1>ברוכים הבאים לאתר יד2</h1>
                    <h4>טוב לראות אותך שוב!</h4>
                </div>
                <img className="welcome-img" src="	https://y2-address-master-dev.s3-eu-west-1.amazonaws.com/auth/couch_lamp.svg" alt="i" />
            </div>
            <div className="form-div">
                {isLoginMode ?
                    <LoginForm setIsLoginMode={setIsLoginMode} /> :
                    <RegisterForm setIsLoginMode={setIsLoginMode} />
                }
            </div>
        </div>
    )
}

export default LoginPhone
