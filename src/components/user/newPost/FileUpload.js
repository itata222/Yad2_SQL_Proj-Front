import React, { useState } from 'react'
import { useContext } from 'react';
import { postFile } from '../../../services/userService';
import { LoginContext } from '../../../contexts/loginContext'
import Spinner from '../../main/Spinner'
import { PostContext } from '../../../contexts/postContext';
import { updatePhotosAction, updateVideoAction } from '../../../actions/postActions';

const FileUpload = ({ type, index }) => {
    const { userData } = useContext(LoginContext);
    const [showSpinner, setShowSpinner] = useState(false);
    const { postData, dispatchPostData } = useContext(PostContext)
    const postDataInFilled = type === 'image' ? postData.photos[index] == undefined : postData.video === '';
    const isTheFileIsVideo = type === 'image' ? postData.photos[index] == undefined : postData.video !== '';

    const postNewFile = (e) => {
        setShowSpinner(true)
        const file = e.target.files[0];
        const isImage = file.type.includes('image');
        postFile(userData.token, file).then((res) => {
            if (isImage) {
                dispatchPostData(updatePhotosAction([...postData.photos, res.filePath]))
            } else
                dispatchPostData(updateVideoAction(res.filePath))

            setShowSpinner(false)
        }).catch((e) => console.log(e))

    }

    return (
        <div className={`${type}Input`}>
            {showSpinner && <Spinner />}
            {

                postDataInFilled ?
                    <>
                        {
                            type === 'image' ?
                                <i className="fas fa-plus"></i>
                                :
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" className="svg-inline--fa fa-video fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg>
                        }
                        <span>העלאת {type === 'image' ? 'תמונות' : 'סרטון'}</span>
                        <input type="file" accept={type === 'image' ? "image/*" : "video/*"} onChange={postNewFile} />
                    </> :
                    <>
                        {
                            isTheFileIsVideo ?
                                <video src={postData.video} className="fileDisplayed" controls></video> :
                                <img src={postData.photos[index]} alt="" className="fileDisplayed" />
                        }
                    </>

            }
        </div>
    )
}

export default FileUpload
