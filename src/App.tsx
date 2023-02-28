import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Teams,TeamOverview,UserOverview} from 'pages';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Teams />,
        },
        {
            path: '/team/:teamId',
            element: <TeamOverview />,
        },
        {
            path: '/user/:useId',
            element: <UserOverview />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
