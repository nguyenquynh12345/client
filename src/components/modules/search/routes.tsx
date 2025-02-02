import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const Search = React.lazy(() => import('./Search'));

export const SearchLayout: RouteObject[] = [
    { path: '', element: <Search /> },
    { path: '*', element: <Navigate to="/404" replace /> },
];

const SearchtRoutes = () => useRoutes(SearchLayout);
export default SearchtRoutes;
