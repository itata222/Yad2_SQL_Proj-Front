import React, { createContext, useReducer } from 'react';
import postsReducer, { initialPostsState } from '../reducers/postsReducer';

export const PostsContext = createContext();

const PostsContextProvider = (props) => {

    const [postsData, dispatchPostsData] = useReducer(postsReducer, initialPostsState);

    return (
        <PostsContext.Provider value={{ postsData, dispatchPostsData }}>
            {props.children}
        </PostsContext.Provider>
    );
};

export default PostsContextProvider;