import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import React from 'react'


const PrivateRoute = () => {

    //check useInfo first, if not login, redrict to login page

    const { useInfo } = useSelector((state) => state.auth);
    return useInfo ? <Outlet /> : <Navigate to='/login' replace />

}

export default PrivateRoute