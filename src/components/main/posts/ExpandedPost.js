import React from 'react';
import {
    faSnowflake,
    faHouseDamage,
    faBoxOpen,
    faDoorClosed,
    faChair,
    faWheelchair,
    faDungeon,
    faHome,
    faPaintRoller,
    faFaucet,
    faSolarPanel,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { propertiesNamesArray } from '../../../utils/arrays';
import moment from 'moment';

const ExpandedPost = ({ post }) => {

    const icons = [faSnowflake, faHouseDamage, faBoxOpen, faDoorClosed, faChair,
        faWheelchair, faDungeon, faHome, faPaintRoller, faFaucet, faSolarPanel, faBars]
    const propertiesNames = [post.airCondition, post.mamad, post.warehouse, post.pandor, post.furnished,
    post.accessible, post.elevator, post.tadiran, post.remaked, post.kasher, post.sunEnergy, post.bars]

    console.log(post)
    return (
        <div className="postExpand">
            <div className="advertise"></div>
            <div className="propertyData">
                <div className="propertyDescription">
                    <h4>תיאור הנכס</h4>
                    <div className="propertyDescText">
                        {post.description || 'דופלקס - שטח בנוי כ 75 מ"ר, שטח מרפסת/גג כ 25 מ"ר. קומה תחתונה 2 חדרים, מקלחון, מטבח, מרפסת שירות. קומה עליונה חדר, מקלחון, מרפסת '}
                    </div>
                    <div className="propertiesSmall">
                        <div className="propertyCondition">
                            <span> מצב הנכס </span>
                            <span className="space"> </span>
                            <span>{post.condition}</span>
                        </div>
                        <div className="propertyDate">
                            <span> תאריך כניסה </span>
                            <span className="space">  </span>
                            <span>  {moment(post.entryDate).format('DD.M.YYYY')} </span>
                        </div>
                        <div className="propertyFloorsIn">
                            <span> קומות בבניין </span>
                            <span className="space"> </span>
                            <span>{post.floorsIn}</span>
                        </div>
                        <div className="propertyBalconies">
                            <span> מרפסות </span>
                            <span className="space"> </span>
                            <span>{post.balcony}</span>
                        </div>
                        <div className="propertyParking">
                            <span> חניות </span>
                            <span className="space"> </span>
                            <span>{post.parking}</span>
                        </div>
                    </div>

                </div>
                <div className="propertyIcons">
                    <h4>מה יש בנכס?</h4>
                    <div className="icons">
                        {
                            icons.map((icon, i) => (
                                <div key={i} className={propertiesNames[i] ? 'iconExist' : 'iconNotExist'}>
                                    <FontAwesomeIcon icon={icon} />
                                    <span>{propertiesNamesArray[i]}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandedPost
