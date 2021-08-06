import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../../actions/userActions';
import { LoginContext } from '../../../contexts/loginContext';
import { saveUserOnCookie } from '../../../cookies/userCookie';
import Spinner from '../Spinner';
import { registerToDB } from '../../../services/userService';

const RegisterForm = (props) => {
    const { dispatchUserData } = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailinputValid, setIsEmailInputValid] = useState(true);
    const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
    const [passwordRepeatedValid, setPasswordRepeatedValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [showRepeatedPassword, setShowRepeatedPassword] = useState(false)

    const history = useHistory();

    const isFormInavlid = () => {
        return email === "" || password === "" || passwordRepeatedValid === false;
    };
    const onSubmitform = (event) => {
        event.preventDefault();
        setShowSpinner(true)
        registerToDB(email, password).then((response) => {
            if (response.data) {
                const userData = response.data;
                setShowSpinner(false)
                if (props.setShowLoginModal)
                    props.setShowLoginModal(false)
                saveUserOnCookie(userData)
                dispatchUserData(loginAction(userData));
                history.push('/home')
            }
        }).catch((err) => {
            console.log(err)
        })
    };

    const onClickSubscribe = () => {
        props.setIsLoginMode(true);
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
    const onBlurPasswordRepeated = (event) => {
        const passwordRepeated = event.target.value.trim();
        setPasswordRepeatedValid(password === passwordRepeated)
        return password === passwordRepeated;
    };

    return (
        <div className="login-form">
            {showSpinner && <Spinner />}
            <div className="form-header">
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להירשם</p>
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
                                {showPassword ?
                                    <img src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png" alt="eye" onClick={() => setShowPassword(false)} /> :
                                    <img src="https://img.icons8.com/material-outlined/24/000000/hide.png" alt="eye closed" onClick={() => setShowPassword(true)} />
                                }
                                <input type={!showPassword ? "password" : 'text'} placeholder="6 תווים, אותיות באנגלית וספרה" onBlur={onBlurPasswordInput} className={!isPasswordInputValid ? 'invalid-input' : ''} />
                            </div>
                            {!isPasswordInputValid && <div className="invalid-message">שדה חובה</div>}
                            <div className="repeatedPasswordDiv">
                                {showRepeatedPassword ?
                                    <img src="https://img.icons8.com/material-outlined/24/000000/visible--v1.png" alt="eye" onClick={() => setShowRepeatedPassword(false)} /> :
                                    <img src="https://img.icons8.com/material-outlined/24/000000/hide.png" alt="eye closed" onClick={() => setShowRepeatedPassword(true)} />
                                }
                                <input type={!showRepeatedPassword ? "password" : 'text'} placeholder="חזור על הסיסמה שהקלדת" onBlur={onBlurPasswordRepeated} className={!passwordRepeatedValid ? 'invalid-input' : ''} />
                            </div>
                            {!passwordRepeatedValid && <div className="invalid-message">סיסמא לא תואמת</div>}
                        </div>
                    </div>
                    <div className="div2">
                        <button type="submit" disabled={isFormInavlid()}>הירשם</button>
                        <div className="suggestion">
                            <span>כבר רשום? </span>
                            <span className="switchMode" onClick={onClickSubscribe}>להתחברות</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
