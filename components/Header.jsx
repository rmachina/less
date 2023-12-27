'use client'

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link"
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import Image from "next/image";



const Header = () => {

    const headerMenu = [
        {
            id: 1,
            title: 'Testimonials',
            href: '/'
        },
        {
            id: 2,
            title: 'Recovery Services',
            href: '/'
        },
        {
            id: 3,
            title: 'Blacklist',
            href: '/'
        },
        {
            id: 4,
            title: 'Contact us',
            href: '/contact-us'
        },
        {
            id: 5,
            title: 'About Us',
            href: '/about-us'
        },
        ,
        {
            id: 6,
            title: 'Blog',
            href: '/'
        },
        ,
        {
            id: 7,
            title: 'FAQ',
            href: '/'
        },
    ]

    const [menu, setMenu] = useState(false)

    const HandleCloses = () => {
        setTimeout(() => {
            setMenu(false)
        }, 1000);
    }

    return (
        <>
            <header className="fixed top-0 z-[999] left-0 w-full h-20 bg-[#111f51] flex items-center justify-center overflow-hidden">
                <div className="w-full flex items-center justify-between px-28 17xl:px-16 14xl:px-5 max-w-[1400px] mx-auto">
                    <div className="14xl:-ml-9">
                        <Link href={'/'}>
                            <Image src={'/header_logo.png'} width={220} height={100} alt="header_logo" />
                        </Link>
                    </div>

                    <nav className="flex items-center gap-6 19xl:hidden">
                        {
                            headerMenu?.map((e) => (
                                <Link href={e.href} key={e.id}>
                                    <span className="text-[#a0a6ba] font-medium text-[16px] hover:text-white transition-colors">{e.title}</span>
                                </Link>
                            ))
                        }
                    </nav>
                    <div>
                        <Link href={'/contact-us'} className="group 19xl:hidden px-6 py-3 border border-white hover:bg-white transition-colors">
                            <span className="text-white text-[16px] group-hover:text-[#111f51] font-medium">Get your money back</span>
                        </Link>
                        <div className="hidden 19xl:block">
                            <button onClick={() => setMenu(!menu)}>
                                <span className="text-white">{menu === true ? <span className="text-3xl">{CloseIcon}</span> : <span className="text-3xl">{MenuIcon}</span> }</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {
                    menu && (
                        <motion.div initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed z-50 top-12 inset-x-0 bottom-0 bg-white"
                        >
                            <div className="pt-16 px-3">
                                <nav className="flex flex-col gap-5">
                                    {
                                        headerMenu?.map((e) => (
                                            <Link href={e.href} onClick={() => HandleCloses()} className="block" key={e.id}>
                                                <span className="font-semibold text-xl">{e.title}</span>
                                            </Link>
                                        ))
                                    }
                                </nav>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Header