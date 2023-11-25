import { useContext, useEffect, useReducer } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import dark_LanguageContext from '../../store/UseDarkAndLangContext';
import { headerReducer, initialHeaderReducer } from '../../utils/helpers';
import { StayToggleData, PagesToggleData } from '../../Data/Data'
import Dropdown from './Dropdown';
import SideNav from './SideNav';

import Logo from "../../assets/Images/logo.png";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";




export default function Header() {
    const { dark, setDark, lang, setLang } = useContext(dark_LanguageContext)
    const [headerState, headerDispatch] = useReducer(headerReducer, initialHeaderReducer)
    const [t, i18n] = useTranslation();
    const { Data } = StayToggleData()
    const { pagesData } = PagesToggleData()

    // to change language
    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])


    return (
        <nav className="absolute top-0 left-0 w-full z-40 bg-inherit dark:bg-BgDark border-b-[1px]">
            <div className=" element-center md:element-between flex-wrap items-center gap-5  py-4 px-12 ">
                <div className="element-between hidden w-full lg:flex md:w-auto">
                    <ul className="element-between font-medium p-2 space-x-8 " id='header-link'>
                        <li className='pb-2' >
                            <NavLink
                                to={"/"}
                                className="relative block text-[#fff]  pl-3 pr-4 py-1 rounded md:dark:text-primary_Color after:content-[''] after:bottom-[-5px] after:left-[0]  after:w-0 after:h-[1px] after:bg-white after:dark:bg-primary_Color   after:absolute after:hover:w-full  after:Transition300">
                                {t("Header1")}
                            </NavLink>
                        </li>
                        <li className={`${lang === "ar" ? " pr-8" : "'px-3"}`}>
                            <Dropdown data={Data} header={t("Header2")} path="stay" />
                        </li>
                        <li className='px-3'>
                            <Dropdown data={pagesData} header={t("Header3")} path="pages" />
                        </li>
                        <li className='pb-2'>
                            <NavLink
                                to={"new"}
                                className="relative block text-[#fff]  pl-3 pr-4  py-1 rounded md:dark:text-primary_Color after:content-[''] after:bottom-[-5px] after:left-[0]  after:w-0 after:h-[1px] after:bg-white after:dark:bg-primary_Color   after:absolute after:hover:w-full  after:Transition300">
                                {t("Header4")}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* logo image */}
                <Link to={'/'} className='flex items-center cursor-pointer'>
                    <img src={Logo} className="h-6 mr-3" alt="coZy Logo" />
                </Link>
                {/* 
                    === icons
                 */}
                <div className="flex items-center">
                    <div className='language-toggle relative'>
                        <button
                            onClick={() => headerDispatch({ type: 'ShowLanguageToggle' })}
                            className="w-[120px] h-[35px] element-center p-2 text-sm text-[#fff] dark:text-primary_Color rounded-lg cursor-pointer hover:border-[1px]  dark:hover:bg-gray-700 dark:hover:border-0 dark:hover:text-white">
                            <div className={lang === "ar" ? "inline-flex items-center" : "hidden"}>
                                <img
                                    className='w-[15px] h-[15px] rounded-full mx-2 '
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyMOYNYSJ6AKSlxlxhQAQP6zZ3Yb9rkzfY9QfVaeE&s' />
                                AR (EG)
                            </div>
                            <div className={lang === "en" ? "inline-flex items-center" : "hidden"}>
                                <svg className="w-5 h-5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlinkHref="#a" y="420" /><use xlinkHref="#a" y="840" /><use xlinkHref="#a" y="1260" /></g><use xlinkHref="#a" y="1680" /></g><use xlinkHref="#b" x="247" y="210" /></g><use xlinkHref="#c" x="494" /></g><use xlinkHref="#d" x="988" /><use xlinkHref="#c" x="1976" /><use xlinkHref="#e" x="2470" /></g></svg>
                                EN (US)
                            </div>
                        </button>
                        {/* <!-- Dropdown language --> */}
                        <div className={headerState.languageToggle ? "w-full z-50  my-4 bg-white  divide-gray-100 rounded-sm shadow dark:bg-gray-700 absolute top-7" : "hidden"}>
                            <ul className="py-2 font-medium">
                                <li className='cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>
                                    <div
                                        onClick={() => {
                                            headerDispatch({ type: "ShowLanguageToggle" })
                                            setLang("en")
                                        }
                                        }
                                        className="inline-flex items-center">
                                        <svg className="w-5 h-5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlinkHref="#a" y="420" /><use xlinkHref="#a" y="840" /><use xlinkHref="#a" y="1260" /></g><use xlinkHref="#a" y="1680" /></g><use xlinkHref="#b" x="247" y="210" /></g><use xlinkHref="#c" x="494" /></g><use xlinkHref="#d" x="988" /><use xlinkHref="#c" x="1976" /><use xlinkHref="#e" x="2470" /></g></svg>
                                        EN (US)
                                    </div>
                                </li>
                                <li className='cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>
                                    <div
                                        onClick={() => {
                                            headerDispatch({ type: "ShowLanguageToggle" })
                                            setLang("ar")
                                        }
                                        }
                                        className="inline-flex items-center">
                                        <img
                                            className='w-[15px] h-[15px] rounded-full mx-2 '
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyMOYNYSJ6AKSlxlxhQAQP6zZ3Yb9rkzfY9QfVaeE&s' />
                                        AR (EG)
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            dark === "dark" ? setDark("light") : setDark("dark")
                        }}

                        className="element-center p-2 text-[20px] bg-BgDark dark:bg-gray-600  text-[#fff] rounded-xl border-[1px] border-[#fff] mx-2  hover:bg-BgDark   dark:text-gray-200 dark:hover:bg-gray-600">
                        {
                            dark !== "dark" ? <MdDarkMode /> : <BsFillSunFill />
                        }
                    </button>
                    <div
                        className="curser-pointer element-center p-1 rounded-sm lg:hidden hover:bg-BgDark   dark:text-gray-400 dark:hover:bg-gray-600">
                        <SideNav />
                    </div>
                    <NavLink
                        className=" hidden xl:flex px-4 py-2 border border-[#fff] rounded-md  dark:border-primary_Color bg-second_color text-[#fff] hover:bg-primary_Color hover:text-black Transition300"
                        to={"/stay/rooms"}>
                        {t("Header5")}
                    </NavLink>
                </div>
            </div>
            
        </nav>

    )
}
