import React, { createContext, useReducer } from 'react';
import loginReducer, { userDataInitialState } from '../reducers/loginReducer';
import { deleteUserFromCookie, getUserFromCookie } from '../cookies/userCookie'

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const cookieUserData = getUserFromCookie();

    const [userData, dispatchUserData] = useReducer(loginReducer, cookieUserData || userDataInitialState);

    return (
        <LoginContext.Provider value={{ userData, dispatchUserData }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;