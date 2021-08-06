import React from 'react'
import { Link } from 'react-router-dom'

const TabletHeader = () => {
    return (
        <div>
            <div className="main-right">
                <div className="logo-wrapper">
                    <Link to="/" className="yad2Logo" target="_self">
                        <img src="//assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png" alt="לוגו יד2 yad2 logo" />
                    </Link>
                </div>
                <div className="menu">
                    {
                        <button>
                            <img src="https://img.icons8.com/material-outlined/20/000000/menu--v1.png" alt="menu" />
                            <span>תפריט</span>
                        </button>
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
                <div className="profile-icon">
                    <img src="https://img.icons8.com/small/25/000000/gender-neutral-user.png" alt="profile" />
                </div>
                <button className="add-post-button">פרסום מודעה חדשה +</button>
            </div>
        </div>
    )
}

export default TabletHeader
