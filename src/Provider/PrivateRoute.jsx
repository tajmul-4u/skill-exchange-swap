import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    console.log(user)

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    // if user not exits
    return <Navigate to={"/auth/signin"}></Navigate>;
};

export default PrivateRoute;