import Cookies from 'js-cookie';

const POST_DATA = "post-data";

export const savePostOnCookie = (postData) => {
    const jsonPostData = JSON.stringify(postData);
    Cookies.set(POST_DATA, jsonPostData, { expires: 1 / 24, sameSite: "strict", secure: true });
};

export const deletePostFromCookie = () => {
    Cookies.remove(POST_DATA, { secure: true, sameSite: "strict" });
};

export const getPostFromCookie = () => {
    try {
        const jsonPostData = Cookies.get(POST_DATA);
        if (jsonPostData === undefined || !jsonPostData) return null;

        return JSON.parse(jsonPostData);
    } catch (err) {
        return undefined;
    }
};