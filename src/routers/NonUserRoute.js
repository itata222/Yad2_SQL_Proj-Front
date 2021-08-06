import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from '../contexts/loginContext'


const NonUserRoute = ({ component: Component, ...rest }) => {
    const { userData } = useContext(LoginContext);

    return (
        <Route
            {...rest}
            component={(props) => (
                !!userData.token ?
                    <Redirect to={{ pathname: "/home" }} /> :
                    <Component {...props} />

            )}
        />);
};

export default NonUserRoute;