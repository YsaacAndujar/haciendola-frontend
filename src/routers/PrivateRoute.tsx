
import { Layout } from 'components';
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    isAuthenticated: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
    isAuthenticated,
}) => {
    return (
        isAuthenticated ? <Layout><Outlet/></Layout> : <Navigate to="/auth"/>
    );
};


