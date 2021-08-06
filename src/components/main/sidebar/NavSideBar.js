
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../../actions/userActions";
import { LoginContext } from '../../../contexts/loginContext'
import { deleteUserFromCookie } from "../../../cookies/userCookie";
import { logoutFromDB } from "../../../services/userService";
import Spinner from '../Spinner'


const NavSidebar = ({ setShowSideBar }) => {
    const { userData, dispatchUserData } = useContext(LoginContext)
    console.log(userData)
    const [showSpinner, setShowSpinner] = useState(false)
    const history = useHistory();


    const exitSideBar = (e) => {
        e.stopPropagation();
        setShowSideBar(false)
    }

    const logoutUser = () => {
        setShowSpinner(true);
        logoutFromDB(userData.token).then((response) => {
            deleteUserFromCookie();
            dispatchUserData(logoutAction());
            setShowSpinner(false)
            history.push('/home')
        })
    }

    const loginFunc = () => {
        setShowSideBar(false)
        if (!!userData.token) {
            history.push('/user/create-post')
        }
        else {
            history.push('/login-page')

        }
    }

    const userInfo = () => {
        setShowSideBar(false)
        if (!!userData.token) {
            history.push('/user/profile')
        }
        else {
            history.push('/login-page')
        }
    }

    return (
        <div className="navBar">
            {showSpinner && <Spinner />}
            <div className="navBarContent">
                <img onClick={exitSideBar} className="exitButton" src="https://img.icons8.com/fluent-systems-filled/48/000000/x.png" alt="x" />
                {
                    !!userData.token &&
                    <span className="logoutPhone" onClick={logoutUser}>התנתקות</span>
                }
                <div className="sideBarHeader">
                    <div className={!userData.token ? 'profileSection notConnected' : "profileSection"}>
                        {!!userData.token ?
                            <>
                                <div className="circleName">
                                    <span>{userData.user.email.substring(0, 1)}</span> {/*user first char of email*/}
                                </div>
                                <span>{userData.user?.email.substring(0, 3) || 'איתמר'}</span>
                                <div className="profileLink" onClick={userInfo}>לאזור האישי</div>
                            </> :
                            <div onClick={loginFunc}>
                                <div className="profile-icon">
                                    <img src="https://img.icons8.com/small/38/000000/gender-neutral-user.png" alt="profile" />
                                </div>
                                <div>התחברות</div>
                            </div>
                        }
                    </div>
                    <div className="newPostSection" onClick={loginFunc}>
                        <button>פרסום הודעה</button>
                    </div>
                    <div className="icons">
                        <div className="carsCompare">
                            <img src="https://img.icons8.com/material-outlined/24/000000/data-in-both-directions.png" alt="arrows" />
                            <span>השוואת רכבים</span>
                        </div>
                        <div className="lastSearchs">
                            <img src="https://img.icons8.com/ios/24/000000/search--v5.png" alt="search" />
                            <span>חיפושים אחרונים</span>
                        </div>
                        <div className="likedPosts">
                            <img src="https://img.icons8.com/material-outlined/24/000000/like.png" alt="heart" />
                            <span>מודעות שאהבתי</span>
                        </div>
                        <div className="myNotifications">
                            <img src="https://img.icons8.com/windows/25/000000/bell.png" alt="bell" />
                            <span>התראות שלי</span>
                        </div>
                    </div>
                </div>
                <div className="sideBarFastSearch">
                    <h3>חיפוש מהיר באתר</h3>
                    <div className="fastSearchDiv">
                        <div>
                            <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" alt="home" />
                            <span>נדל"ן</span>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/ios/25/000000/people-in-car-side-view.png" alt="car" />
                            <span>רכב</span>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/material-outlined/24/000000/living-room.png" alt="couch" />
                            <span>יד שנייה</span>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/ios/25/000000/bag-front-view.png" alt="bag" />
                            <span>עסקים למכירה</span>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/detective--v1.png" alt="magnifying glass" />
                            <span>דרושים IL</span>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/ios/25/000000/pet-commands-summon.png" alt="pet foot" />
                            <span>חיות מחמד</span>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/ios/25/000000/palm-tree.png" alt="palm tree" />
                            <span>תיירות ונופש</span>
                        </div>
                        <div>
                            <img src="https://img.icons8.com/ios/25/000000/graduation-cap.png" alt="graduate" />
                            <span>לימודים</span>
                        </div>
                    </div>
                </div>
                <div className="sideBarNavigateCategories">
                    <h3>ניווט לפי קטגוריות</h3>
                    <div className="categoriesSearchDiv">
                        <div>
                            <span>נדל"ן</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="down arrow" />
                        </div>
                        <div>
                            <span>רכב</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="down arrow" />
                        </div>
                        <div>
                            <span>יד שנייה</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="down arrow" />
                        </div>
                        <div>
                            <span>עסקים למכירה</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="down arrow" />
                        </div>
                        <div>
                            <span>דרושים IL</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="down arrow" />
                        </div>
                        <div>
                            <span>חיות מחמד</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="down arrow" />
                        </div>
                        <div>
                            <span>בעלי מקצוע</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="down arrow" />
                        </div>
                        <div>
                            <span>תיירות ונופש</span>
                        </div>
                        <div>
                            <span>לימודים</span>
                        </div>
                        <div>
                            <span>מגזין יד2</span>
                        </div>
                    </div>
                </div>
                <div className="sideBarFooter">
                    <div>
                        <div className="circle">
                            <img src="https://img.icons8.com/ios/18/000000/pencil--v1.png" alt="pencil" />
                        </div>
                        <span>תקנון</span>
                    </div>
                    <div>
                        <div className="circle">
                            <img src="https://img.icons8.com/material-outlined/18/000000/key--v1.png" alt="key" />
                        </div>
                        <span>פרטיות ותנאים</span>
                    </div>
                    <div>
                        <div className="circle">
                            <img src="https://img.icons8.com/windows/18/000000/body.png" alt="human body" />
                        </div>
                        <span>נגישות</span>
                    </div>
                    <div>
                        <div className="circle">
                            <img src="https://img.icons8.com/material-rounded/18/000000/question-mark.png" alt="question" />
                        </div>
                        <span>מענה לשאלות</span>
                    </div>
                    <div>
                        <div className="circle">
                            <img src="https://img.icons8.com/ios/18/000000/phone-case.png" alt="smartphone" />
                        </div>
                        <span>יצירת קשר</span>
                    </div>
                </div>
            </div>
            <div className="navBarBackground"></div>
        </div>
    )
};

export default NavSidebar;