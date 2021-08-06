import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { LoginContext } from '../../../contexts/loginContext';
import LoginModal from '../modal/LoginModal';
import NavSideBar from '../sidebar/NavSideBar';
import { deleteUserFromCookie } from '../../../cookies/userCookie'


const HeaderContent = () => {
    const { userData } = useContext(LoginContext);
    // console.log(userData)
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    const history = useHistory();

    const clickedProfile = () => {
        if (!userData.token) {
            setShowLoginModal(true)
        }
        else
            history.push('/user/profile')
    }
    const clickedNewPost = () => {
        if (!userData.token) {
            setShowLoginModal(true)
        }
        else
            history.push('/user/create-post')
    }

    return (
        <div className="headerContent">
            {showSideBar && <NavSideBar setShowSideBar={setShowSideBar} />}
            {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="phone-empty-div"></div>
            <div className="logo-wrapper">
                <Link to="/" className="yad2Logo" target="_self">
                    <img className="phone-logo" src="https://assets.yad2.co.il/yad2site/y2assets/images/header/Yad2_logo_white2.svg" alt="logo yad2" />
                    <img className="desktop-logo" src="//assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png" alt="לוגו יד2 yad2 logo" />
                </Link>
            </div>
            <div className="logo-container" onClick={() => setShowSideBar(true)}>
                <i className="fas fa-bars"></i>
                {/* <img src="https://img.icons8.com/material-outlined/20/000000/menu--v1.png" alt="menu" /> */}
            </div>
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            {/* ----------------------------------------------- */}
            <div className="main-right">
                <div className="logo-wrapper">
                    <Link to="/" className="yad2Logo" target="_self">
                        <img src="//assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png" alt="לוגו יד2 yad2 logo" />
                    </Link>
                </div>
                <div className="menu">
                    {
                        <>
                            <div>נדל"ן</div>
                            <div>רכב</div>
                            <div>יד שנייה</div>
                            <div>דרושים IL</div>
                            <div>עסקים למכירה</div>
                            <div>חיות מחמד</div>
                            <div>בעלי מקצוע</div>
                            <div>עוד...</div>
                        </>
                    }

                </div>
            </div>
            <div className="main-left">
                <div className="bell">
                    <img src="https://img.icons8.com/windows/25/000000/bell.png" alt="bell" />
                </div>
                <div className="heart">
                    <img src="https://img.icons8.com/material-outlined/25/000000/like--v1.png" alt="heart" />
                </div>
                <div className="profile-icon" onClick={clickedProfile}>
                    {!!userData.token ? userData.user.email.substring(0, 1) :
                        <img src="https://img.icons8.com/small/25/000000/gender-neutral-user.png" alt="profile" />
                    }
                </div>
                <button className="add-post-button" onClick={clickedNewPost}>פרסום מודעה חדשה +</button>
            </div>

        </div>
    )
}

export default HeaderContent
