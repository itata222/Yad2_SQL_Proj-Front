import React, { useState } from 'react'
import LoginForm from './LoginForm';
import Modal from './Modal'
import RegisterForm from './RegisterForm';

const LoginModal = ({ setShowLoginModal }) => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div className="loginModal">
            <Modal>
                <img onClick={() => setShowLoginModal(false)} className="exitButton" src="https://img.icons8.com/fluent-systems-filled/48/000000/x.png" alt="x" />
                <div className="welcome">
                    <div className="welcome-text">
                        <img src="	https://y2-address-master-dev.s3-eu-west-1.amazonaws.com/auth/New_logo_negative.svg" alt="yad2 icon" />
                        <h1>ברוכים הבאים לאתר יד2</h1>
                        <h4>טוב לראות אותך שוב!</h4>
                    </div>
                    <img className="welcome-img" src="	https://y2-address-master-dev.s3-eu-west-1.amazonaws.com/auth/couch_lamp.svg" alt="i" />
                </div>
                <div className="form-div">
                    {isLoginMode ?
                        <LoginForm setIsLoginMode={setIsLoginMode} setShowLoginModal={setShowLoginModal} /> :
                        <RegisterForm setIsLoginMode={setIsLoginMode} setShowLoginModal={setShowLoginModal} />
                    }

                </div>
            </Modal>
        </div>
    )
}

export default LoginModal
