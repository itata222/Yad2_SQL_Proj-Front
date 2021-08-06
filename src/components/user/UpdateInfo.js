import React, { useContext, useState } from 'react'
import { LoginContext } from '../../contexts/loginContext';
import { updateUserInfoDB } from '../../services/userService';
import Modal from '../main/modal/Modal';
import ModalWithMessage from '../main/modal/ModalWithMessage';

const UpdateInfo = () => {
    const { userData } = useContext(LoginContext);
    console.log(userData)
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isPasswodsMatch, setIsPasswodsMatch] = useState(false);

    const isFormInvalid = () => {
        return isPasswodsMatch === true && isPasswordValid === true && isEmailValid === true
    }

    const passwordBlur = (e) => {
        const thePassword = e.target.value.trim();
        if (thePassword.length > 0) {
            setIsPasswordValid(true)
        }
        else {
            setIsPasswordValid(false)
        }
        setPassword(thePassword);
    }
    const emailBlur = (e) => {
        const theEmail = e.target.value.trim();
        if (theEmail.length > 0) {
            setIsEmailValid(true)
        }
        else {
            setIsEmailValid(false)
        }
        setEmail(theEmail);
    }

    const repeatedPassBlur = (e) => {
        const theRepeatedPass = e.target.value.trim();
        if (theRepeatedPass === password) {
            setIsPasswodsMatch(true)
        }
        else {
            setIsPasswodsMatch(false);
        }
        // e.target.value = "";
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(password, email)
        updateUserInfoDB(userData.token, { password, email }).then((response) => {
            console.log(response)
            setShowModal(true)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div className="updateInfo">
            {showModal && <ModalWithMessage setShowModal={setShowModal} text="User Info Updated !" />}
            <h3>הפרטים שלי</h3>
            <form className="changePasswordForm" onSubmit={submitForm}>
                <div className="password">
                    <label> סיסמה</label>
                    <div className="passInputs">
                        <input onBlur={passwordBlur} type="password" placeholder="סיסמא חדשה" required />
                        <input onBlur={repeatedPassBlur} type="password" placeholder="חזור על הסיסמא החדשה" required />
                    </div>
                </div>
                <div className="email">
                    <label>דוא"ל</label>
                    <input type="email" placeholder="אימייל חדש" onBlur={emailBlur} />
                </div>
                <button disabled={!isFormInvalid()}>Update !</button>
            </form>
        </div>
    )
}

export default UpdateInfo
