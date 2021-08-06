export const initialPostsState = [];

const postsReducer = (posts, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return [...posts];
        case 'SET_POSTS':
            return [...action.posts]
        default:
            return [...posts]
    }
}

export default postsReducer