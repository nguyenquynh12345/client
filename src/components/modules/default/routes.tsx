import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const DetailPost = React.lazy(() => import('./DetailPost'));

export const detailPostLayout: RouteObject[] = [
    { path: ':id', element: <DetailPost /> },
    { path: '*', element: <Navigate to="/404" replace /> },
];

const DetailPostRoutes = () => useRoutes(detailPostLayout);
export default DetailPostRoutes;
