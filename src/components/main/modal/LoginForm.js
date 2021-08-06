import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../../actions/userActions';
import { LoginContext } from '../../../contexts/loginContext';
import { saveUserOnCookie } from '../../../cookies/userCookie';
import { loginToDB } from '../../../services/userService';
import Spinner from '../Spinner';

const LoginForm = (props) => {

    const { dispatchUserData } = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailinputValid, setIsEmailInputValid] = useState(true);
    const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
    const [showPassowrd, setShowPassowrd] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false)

    const history = useHistory();

    const isFormInavlid = () => {
        return email === "" || password === "";
    };
    const onSubmitform = (event) => {
        event.preventDefault();
        setShowSpinner(true)
        loginToDB(email, password).then((response) => {
            console.log(response.data.user)
            setShowSpinner(false)
            if (response.data) {
                const userData = response.data;
                if (props.setShowLoginModal)
                    props.setShowLoginModal(false)
                saveUserOnCookie(userData)
                dispatchUserData(loginAction(userData));
                history.push('/home')
            }
            else
                alert('שגיאה')
        }).catch((err) => {
            console.log(err)
        })
    };

    const onClickSubscribe = () => {
        props.setIsLoginMode(false);
    };

    const onBlurEmailInput = (event) => {
        const theEmail = event.target.value.trim();
        if (theEmail === "") {
            setEmail("");
            setIsEmailInputValid(false);
        } else {
            setEmail(theEmail);
            setIsEmailInputValid(true);
        }
    };

    const onBlurPasswordInput = (event) => {
        const thePassword = event.target.value.trim();
        setPassword(thePassword === "" ? "" : thePassword);
        setIsPasswordInputValid(thePassword !== "");
    };
    return (
        <div className="login-form">
            {showSpinner && <Spinner />}
            <div className="form-header">
                <h3>התחברות</h3>
                <p>הזן את הפרטים כדי להתחבר</p>
            </div>
            <div className="form-container">
                <form onSubmit={onSubmitform}>
                    <div className="div1">
                        <div className="email">
                            <div className="form-label">כתובת מייל</div>
                            <input placeholder="your@email.com" onBlur={onBlurEmailInput} className={!isEmailinputValid ? 'invalid-input' : ''} />
                            {!isEmailinputValid && <div className="invalid-message">שדה חובה</div>}
                        </div>
                        <div className="password">
                            <div className="form-label">סיסמה</div>
                            <div className="passwordDiv">
                                {showPassowrd ?
                                    <img src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png" alt="eye" onClick={() => setShowPassowrd(false)} /> :
                                    <img src="https://img.icons8.com/material-outlined/24/000000/hide.png" alt="eye closed" onClick={() => setShowPassowrd(true)} />
                                }
                                <input type={!showPassowrd ? "password" : 'text'} placeholder="Password" onBlur={onBlurPasswordInput} className={!isPasswordInputValid ? 'invalid-input' : ''} />
                            </div>
                            {!isPasswordInputValid && <div className="invalid-message">שדה חובה</div>}
                            <span className="forgotPassword">שכחתי סיסמה</span>
                        </div>
                    </div>
                    <div className="div2">
                        <button type="submit" disabled={isFormInavlid()}>התחבר</button>
                        <div className="suggestion">
                            <span>לא רשום? </span>
                            <span className="switchMode" onClick={onClickSubscribe}>להרשמה</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
