import React from 'react'
import { sidebarOptions } from '../../constants/sideBar'
import { useNavigate } from "react-router-dom";

type Props = {}

export default function Sidebar({ }: Props) {
    const navigate = useNavigate()
    return (
        <div className=' bg-gray-100 h-screen shadow-sm rounded-r-3xl flex flex-col items-start pt-24 gap-y-4 px-4'>
            {sidebarOptions.map((item, index) => (
                <div onClick={() => navigate(item.path)} className=' capitalize flex items-center justify-start gap-x-2 text-customBlue hover:text-white hover:bg-slate-500 rounded-2xl duration-300 px-4 py-2 hover:cursor-pointer w-full' key={index}>
                    <div>
                        {item.icon}
                    </div>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}