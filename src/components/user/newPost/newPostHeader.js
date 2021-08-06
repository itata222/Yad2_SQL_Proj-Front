import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginContext } from '../../../contexts/loginContext';

const NewPostHeader = ({ }) => {
    const { userData } = useContext(LoginContext);
    const history = useHistory();

    return (
        <div className="newPostHeader">
            <div className="right">
                <img src="https://assets.yad2.co.il/personal/images/general/new_logo_orange.png" alt="yad2 icon" onClick={() => history.push('/home')} />
                <span>פרסום מודעה חדשה</span>
            </div>
            <div className="left">
                <div className="me" onClick={() => history.push('/user/profile')}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="25" height="25"
                        viewBox="0 0 172 172"
                        style={{ fill: '#000000' }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#e67e22"><path d="M86,21.5c-17.7627,0 -32.25,14.4873 -32.25,32.25c0,17.7627 14.4873,32.25 32.25,32.25c17.7627,0 32.25,-14.4873 32.25,-32.25c0,-17.7627 -14.4873,-32.25 -32.25,-32.25zM86,86c-29.60449,0 -53.75,24.14551 -53.75,53.75h10.75c0,-23.80957 19.19043,-43 43,-43c23.80957,0 43,19.19043 43,43h10.75c0,-29.60449 -24.14551,-53.75 -53.75,-53.75zM86,32.25c11.92578,0 21.5,9.57422 21.5,21.5c0,11.92578 -9.57422,21.5 -21.5,21.5c-11.92578,0 -21.5,-9.57422 -21.5,-21.5c0,-11.92578 9.57422,-21.5 21.5,-21.5z"></path></g></g></svg>
                    <span>{!!userData && userData?.user.email.substr(0, 3) || 'none'}</span>
                </div>
                <span>צור קשר</span>
                <div className="exit" onClick={() => history.push('/home')}>
                    <img className="exitIcon" src="https://img.icons8.com/fluent-systems-filled/22/000000/x.png" alt="x" />
                    <span>יציאה</span>
                </div>
            </div>
        </div>
    )
}

export default NewPostHeader
