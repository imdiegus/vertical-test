import React, { useEffect, useMemo } from 'react'
import { useLocation, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/commonComponents/Sidebar';
import Login from './components/routes/Login';
import Received from './components/routes/Received';
import Redirect from './components/routes/Redirect';
import Sent from './components/routes/Sent';
import axiosClient from './config/axiosClient';
import string from './constants/strings';
import { useAppSelector } from './hooks/reduxHooks';

type Props = {}

export default function App({ }: Props) {

    const user = useAppSelector(state => state.user.user)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Redirect />
        },
        {
            path: '/email',
            element: <Received />,
            children: [
                { path: '/email/sent', element: <Sent /> },
                { path: '/email/inbox', element: <Received /> },
            ]
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/profile',
            element: <Login />,
        },
    ]);

    useEffect(() => {
        const getUserData = async () => {

            const token = localStorage.getItem(string.locaStorageToken)
            if (!user && token) {
                const res = await axiosClient.get('/users/userData')
                console.log(res)
            }
        }
        getUserData()
    }, [])

    return (
        <div >
            <RouterProvider router={router} />
        </div>
    )
}