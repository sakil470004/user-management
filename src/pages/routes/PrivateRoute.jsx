import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useRole from '../../hooks/useRole';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const {loading:load}=useRole()
    const location = useLocation();


    if (loading || load) {
        return <div className='flex items-center h-[600px] justify-center'>
            <progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoute;