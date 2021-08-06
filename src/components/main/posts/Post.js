import moment from 'moment'
import React, { useState } from 'react'
import NumberFormat from 'react-number-format';
import ImagesModal from '../modal/ImagesModal';
import ExpandedPost from './ExpandedPost';


const Post = ({ post }) => {
    const [showPost, setShowPost] = useState(false);
    const [showImagesModal, setShowImagesModal] = useState(false);

    const openPost = (e) => {
        e.preventDefault();
        setShowPost(!showPost)
    }

    const displayImages = (e) => {
        // if (post.photos.length > 1 || post.video !== '') {
        //     e.stopPropagation()
        //     setShowImagesModal(true)

        // }
    }

    return (
        <div className="post" >
            {showImagesModal && <ImagesModal post={post} setShowImagesModal={setShowImagesModal} />}
            <div className={showPost ? 'post-phone post-phoneExpanded' : 'post-phone'} onClick={openPost}>
                <div className="areaDetails">
                    <div className="priceAndDate">
                        {post.price === -1 ?
                            <div className="priceNotMentioned">לא צוין מחיר</div>
                            :
                            <NumberFormat value={post.price} displayType={'text'} thousandSeparator={true} prefix={'₪'} />
                        }
                        <span className="date">{moment(post.updatedAt).isSame(new Date(), "day") ? 'עודכן היום' : ''}</span>
                        <span className="clickForDetails">לחצו לפרטים</span>
                        <div className="contactPhone">
                            <span>{post.contactPhone}</span>
                        </div>
                    </div>
                    <div className="postStreet">
                        <span>{post.street}</span>
                    </div>
                    <div className="postAreaAndType">
                        <span>{post.type}</span>
                        {post.area.length > 0 && <span>,{post.area},</span>}
                        <span>{post.city}</span>
                    </div>
                </div>
                <div className="itemDetails">
                    <div className="item-rooms">
                        <span>{post.rooms}</span>
                        <span>חדרים</span>
                    </div>
                    <div className="item-floor">
                        <span>{post.floor}</span>
                        <span>קומה</span>
                    </div>
                    <div className="item-space">
                        <span>{post.space}</span>
                        <span>מ"ר</span>
                    </div>
                </div>
                <div className={showPost ? 'image imageExpanded' : 'image'} onClick={(e) => {
                    if (showPost)
                        displayImages(e)
                }}>
                    <div className="postFilesDisplay">
                        {post.video !== "" && <i className="fas fa-play"></i>}
                        {/* {post.photos.length > 1 &&
                            <div className="numbersOfphotos">
                                <i className="far fa-clone">
                                    <span>+{post.photos.length - 1}</span>
                                </i>
                            </div>
                        } */}
                    </div>
                    {/* <img src={post.photos[0] || 'https://assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_re_placeholder_small.png'} alt="" /> */}
                </div>
                {
                    showPost &&
                    <ExpandedPost post={post} />
                }
            </div>
            <div className={showPost ? 'post-desktop post-desktopExpanded' : 'post-desktop'} onClick={openPost}>
                <div className="minInfo">
                    <div className={showPost ? 'image imageExpanded' : 'image'} onClick={(e) => {
                        if (showPost)
                            displayImages(e)
                    }}>
                        <div className="postFilesDisplay">
                            {post.video !== "" && <i className="fas fa-play"></i>}
                            {/* {post.photos.length > 1 &&
                                <div className="numbersOfphotos">
                                    <i className="far fa-clone">
                                        <span>+{post.photos.length - 1}</span>
                                    </i>
                                </div>
                            } */}
                        </div>
                        {/* <img src={post.photos[0] || 'https://assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_re_placeholder_small.png'} alt="" /> */}
                    </div>
                    <div className={showPost ? 'itemsMerged' : 'itemsInMerged'}>
                        <div className={showPost ? 'areaDetails areaDetailsExpanded' : 'areaDetails'}>
                            <div className="postStreet">
                                <span>{post.street}</span>
                            </div>
                            <div className="postAreaAndType">
                                <span>{post.type}</span>
                                {post.area.length > 0 && <span>,{post.area},</span>}
                                <span>{post.city}</span>
                            </div>
                        </div>
                        <div className={showPost ? 'itemDetails itemDetailsExpanded' : 'itemDetails'}>
                            <div className="item-rooms">
                                <span>{post.rooms}</span>
                                <span>חדרים</span>
                            </div>
                            <div className="item-floor">
                                <span>{post.floor}</span>
                                <span>קומה</span>
                            </div>
                            <div className="item-space">
                                <span>{post.totalMr}</span>
                                <span>מ"ר</span>
                            </div>
                        </div>
                    </div>
                    <div className={showPost ? 'priceAndDate priceAndDateExpanded' : 'priceAndDate'}>
                        {post.price === -1 ?
                            <div className="priceNotMentioned">לא צוין מחיר</div>
                            :
                            <NumberFormat value={post.price} displayType={'text'} thousandSeparator={true} prefix={'₪'} />
                        }
                        <span className="date">{moment(post.updatedAt).isSame(new Date(), "day") ? 'עודכן היום' : ''}</span>
                        <span className="clickForDetails">לחצו לפרטים</span>
                        <div className="contactPhone">
                            <span>{post.contactPhone}</span>
                        </div>
                    </div>
                </div>
                {
                    showPost &&
                    <ExpandedPost post={post} />
                }
            </div>
        </div>
    )
}

export default Post