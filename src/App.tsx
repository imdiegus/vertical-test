import React, { useEffect, useMemo } from 'react'
import { useLocation, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/commonComponents/Sidebar';
import Login from './components/routes/Login';
import Received from './components/routes/Received';
import Redirect from './components/routes/Redirect';
import Sent from './components/routes/Sent';
import axiosClient from './config/axiosClient';
import string from './constants/strings';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { setUser } from './slices/userSlice';

type Props = {}

export default function App({ }: Props) {

    const user = useAppSelector(state => state.user.user)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Redirect />
        },
        { path: '/email/sent', element: <Sent /> },
        { path: '/email/inbox', element: <Received /> },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/profile',
            element: <Login />,
        },
    ]);
    const dispatch = useAppDispatch()

    useEffect(() => {
        const getUserData = async () => {
            const token = localStorage.getItem(string.locaStorageToken)
            if (!user.email && token) {
                const res = await axiosClient.get('/users/userData')
                dispatch(setUser(res.data.data))
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