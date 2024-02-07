import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useRole from '../../hooks/useRole';


const AdminRoute = ({ children }) => {
    const { role, loading: load } = useRole()
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (!role || loading || load) {
        return <div className='flex items-center h-[600px] justify-center'>
            <progress className="progress w-56"></progress></div>
    }
    if (user && role === 'admin') {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default AdminRoute;