import { sidebarItem } from "../interfaces/sidebarInterfaces";
import { BiUser } from 'react-icons/bi'

export const sidebarOptions: sidebarItem[] = [
    {
        title: 'profile',
        icon: <BiUser />,
        path: '/profile',
    },
    {
        title: 'inbox',
        icon: <BiUser />,
        path: '/email/inbox',
    },
    {
        title: 'sent',
        icon: <BiUser />,
        path: '/email/sent',
    },
    {
        title: 'logout',
        icon: <BiUser />,
        path: '',
    }

]