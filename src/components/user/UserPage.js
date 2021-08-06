import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { logoutAction } from '../../actions/userActions';
import { LoginContext } from '../../contexts/loginContext';
import { deleteUserFromCookie } from '../../cookies/userCookie';
import { getUserPosts, logoutFromDB } from '../../services/userService';
import Header from '../main/Header/Header';
import Spinner from '../main/Spinner'
import UpdateInfo from './UpdateInfo';
import UpdatePosts from './UpdatePosts';

const UserPage = (props) => {
    const { userData, dispatchUserData } = useContext(LoginContext)
    const [showSpinner, setShowSpinner] = useState(false);
    const [updatePostsComponent, setUpdatePostsComponent] = useState(true);
    const [UpdateInfoComponent, setUpdateInfoComponent] = useState(false);
    const [userPosts, setUserPosts] = useState([]);
    const history = useHistory();

    const logoutClick = () => {
        setShowSpinner(true);
        logoutFromDB(userData.token).then((response) => {
            deleteUserFromCookie();
            dispatchUserData(logoutAction());
            setShowSpinner(false)
            history.push('/home')
        })
    }

    useEffect(() => {
        switch (props.location.hash) {
            case "#updateInfo":
                setUpdatePostsComponent(false)
                setUpdateInfoComponent(true)
                break;
            default:
                setUpdatePostsComponent(true)
                setUpdateInfoComponent(false)
        }
    }, [props.location.hash]);

    useEffect(() => {
        getUserPosts(userData.token, userData.user.userID).then((res) => {
            console.log(res)
            setUserPosts(res)
        }).catch(e => console.log(e))
    }, []);

    return (
        <div className="userPage">
            {showSpinner && <Spinner />}
            <Header />
            <div className="profileHeader">
                <div className="iconAndTitle">
                    <Link to="/home">
                        <img src="//images.yad2.co.il/Pic/yad2new/page/yad2_madad.jpg" alt="לוח יד2- לוח המודעות הגדול באינטרנט"></img>
                    </Link>
                    <div className="title">
                        האזור האישי שלי
                    </div>
                </div>
                <div className="personalInformation">
                    <div className="helloInfo">
                        <span>שלום, יש לך ({userPosts.length}) מודעות </span>
                        <span>|</span>
                    </div>
                    <div>
                        <img src="//my.yad2.co.il/images/myYad2Secure/logout_small.jpg" border="0" alt="logout" />
                        <span className="logout" onClick={logoutClick}>התנתק</span>
                    </div>
                </div>
            </div>
            <div className="profileBody">
                <div className="profileBodyHeader">
                    <div className="buttons">
                        <div>
                            <NavLink to='#updatePost' activeClassName="selected" isActive={() => updatePostsComponent}  > המודעות שלי</NavLink>
                        </div>
                        <div>
                            <NavLink to='/user/create-Post' >פרסום מודעה חדשה</NavLink>
                        </div>
                        <div>
                            <NavLink to='#updateInfo' activeClassName="selected" isActive={() => UpdateInfoComponent} > עדכון פרטים</NavLink>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {/* כאן אני אקסל מהיוס אפקט שקורה בהגעה לעמוד את המידע על המשתמש ואעשה מאפ על כל הפוסטים שלו */}
                    {updatePostsComponent ?
                        userPosts.length > 0 ?
                            <UpdatePosts userPosts={userPosts} /> :
                            <div className="text">
                                <p>איתמר, כאן תוכל/י לבצע שינויים על המודעות שלך, </p>
                                <p>למשל למחוק, לעדכן ולהקפיץ את מודעתך למקום גבוה יותר בלוח.</p>
                                <p>כדי להתחיל פשוט לחץ/י על המדור המתאים:</p>
                            </div>
                        :
                        <UpdateInfo />
                    }
                </div>
            </div>
        </div>
    )
}

export default UserPage;