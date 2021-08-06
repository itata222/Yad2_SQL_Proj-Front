import moment from 'moment'
import React from 'react'
import NumberFormat from 'react-number-format'

const UpdatePosts = ({ userPosts }) => {
    console.log(userPosts)

    //with SQL-BACK every data should be that way: postObj.city
    //with MongoDB-BACK every data should be that way: postObj.post.city

    return (
        <div>
            {
                userPosts.map((postObj, i) => (
                    <div key={i} className="userPost">
                        <div className="area">
                            <span>{postObj.city}</span>
                            <span>{postObj.street}</span>
                        </div>
                        <div className="properties">
                            <span>{postObj.totalMr}</span>
                            <span> </span>
                            <span>מ"ר</span>
                        </div>
                        <div className="priceUserPost">
                            {postObj.price === -1 ?
                                <div>לא ציינת מחיר</div>
                                :
                                <NumberFormat value={postObj.price} displayType={'text'} thousandSeparator={true} prefix={'₪'} />
                            }
                        </div>
                        <div className="updatedAt">
                            <span>עדכון אחרון:</span>
                            <span> </span>
                            <span>{moment(postObj.updatedAt).format('D/M/YY')}</span>
                        </div>
                    </div>   // post component
                ))}
        </div>
    )
}

export default UpdatePosts
