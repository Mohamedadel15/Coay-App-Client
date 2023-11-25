import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'



export default function Dropdown({data,header,path}) {
    const [t] = useTranslation()
    
    return (
        <div className="max-w-full element-center relative">
            <div className=" group cursor-pointer pb-2">
                <NavLink
                    to={path}
                    className="element-between menu-hover  text-[#fff]  py-1 rounded md:dark:text-primary_Color px-2 "
                >
                    {header}
                    <span >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                </NavLink>
                <div
                    id='stay-dropdown'
                    className="invisible absolute top-[40px] z-50 flex w-[200px] flex-col bg-BgDark  text-[#fff] shadow-xl group-hover:visible px-3"
                >
                    {
                        data.map((item) => {
                            return (
                                <NavLink
                                    to={item.Path}
                                    key={item.id}
                                    className="hover:text-primary_Color my-2 block py-1 md:mx-2">
                                    {item.title}
                                </NavLink>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}
