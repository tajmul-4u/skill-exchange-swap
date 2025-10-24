import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user)
    const location =useLocation();
    console.log(location)

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    // if user not exits
    return <Navigate state={location.pathname} to={"/auth/signin"}></Navigate>;
};

export default PrivateRoute;