import React, { createContext, useReducer } from 'react';
import postReducer, { postInitialState } from '../reducers/postReducer';

export const PostContext = createContext();

const PostContextProvider = (props) => {

    const [postData, dispatchPostData] = useReducer(postReducer, postInitialState);

    return (
        <PostContext.Provider value={{ postData, dispatchPostData }}>
            {props.children}
        </PostContext.Provider>
    );
};

export default PostContextProvider;