import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { clearPostAction } from '../../../actions/postActions';
import { PostContext } from '../../../contexts/postContext';
import Spinner from '../../main/Spinner'
import NewPostHeader from './newPostHeader';
import NewPostStepper from './NewPostStepper'

const NewPost = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    const { dispatchPostData } = useContext(PostContext);

    useEffect(() => {
        dispatchPostData(clearPostAction())
    }, []);

    return (
        <div className="newPost">
            {showSpinner && <Spinner />}
            <NewPostHeader />
            <div className="newPostContainer">
                <NewPostStepper setShowSpinner={setShowSpinner} />
            </div>
        </div>
    )
}

export default NewPost
