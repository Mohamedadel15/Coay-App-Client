import { Fragment, useState } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'

import { NavLink } from "react-router-dom"
import { AllLinksData } from '../../Data/Data';

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";




export default function SideNav() {
    const [open, setOpen] = useState(false)
    const { allLinks } = AllLinksData()

    return (
        <div className="overflow-hidden">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex  max-w-full flex-col overflow-y-auto bg-primary_Color dark:bg-BgDark pb-12 shadow-xl">
                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <Tab.Panels as={Fragment}>
                                        <div className="xl:hidden pt-[60px] px-3 " >
                                            <div
                                                onClick={() => setOpen(false)}
                                                className='cursor-pointer absolute top-[20px] right-[20px] text-[30px] text-[#fff] p-1 bg-black dark:bg-second_color '>
                                                <AiOutlineClose />
                                            </div>
                                            <ul
                                                id="side-nav_toggle"
                                            className='grid grid-cols-2 gap-5 items-center place-items-center text-center text-[#fff]'>
                                                {
                                                    allLinks.map((item) => {
                                                        return (
                                                            <li key={item.id}>
                                                                <NavLink
                                                                    onClick={() => setOpen(false)}
                                                                    to={item.Path}
                                                                    className="element-center menu-hover  border-2 border-primary_Color bg-BgDark dark:bg-second_color  w-[150px]  py-3 rounded md:dark:text-primary_Color px-2 "
                                                                >
                                                                    {item.title}
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    }
                                                    )}
                                            </ul>
                                        </div>
                                    </Tab.Panels>
                                </Tab.Group>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <button
                type="button"
                className="element-center text-[#fff]"
                onClick={() => setOpen(true)}
            >
                <AiOutlineMenu className="text-[28px]" aria-hidden="true" />
            </button>
        </div>
    )
}
