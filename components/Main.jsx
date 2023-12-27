'use client'

import { useAtom } from 'jotai'
import React from 'react'
import { for_lines, plso, plst } from '../app/atom'
import { EyeClose, EyeOpen, LogOutIcon } from "@/components/icons"
import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from 'react-simple-captcha';


const Main = () => {

    const [lines, setLines] = useAtom(for_lines)

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [chg1, setChg1] = useState(false);
    const [chg2, setChg2] = useState(false);
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState(false);

    useEffect(() => {
        loadCaptchaEnginge(4, '#2E2E38', 'white');
    }, []);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const correctPassword1 = plso;
        const correctPassword2 = plst

        if (password1 === correctPassword1 && password2 === correctPassword2) {
            if (validateCaptcha(captchaInput)) {
                setLoggedIn(true);
                setLines(true);
                setCaptchaInput('')
                setPassword1('')
                setPassword2('')
                toast.success('Successful login to the admin panel');
            } else {
                setCaptchaError(true);
                toast.error('Incorrect CAPTCHA');
            }
        } else {
            toast.error('Incorrect password');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setLines(false);
    };
    return (
        <div className='mt-20 14xl:mt-10'>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        className: 'bg-white',
                        duration: 3000,
                        style: {
                            background: '#fff',
                            color: '#000',
                        },

                        success: {
                            duration: 1000,
                            theme: {
                                primary: 'green',
                                secondary: 'white',
                            },
                        },
                    }}
                />
            </div>
            {
                lines === false ? (
                    <div>
                        <div className="h-screen fixed inset-0 z-[99999] bg-white flex items-center justify-center">
                            <form onSubmit={handlePasswordSubmit} className="max-w-[400px] px-3">
                                <div>
                                    <label className="relative">
                                        <span className="text-lg font-medium">Enter Password 1:</span>
                                        <input
                                            type={chg1 ? 'text' : 'password'}
                                            placeholder="Enter Password 1"
                                            value={password1}
                                            onChange={(e) => setPassword1(e.target.value)}
                                            className="w-full outline-none px-3 py-3 pr-12 bg-white border-[1px] border-[#dfdddd] rounded-md font-medium"
                                        />
                                        <span className="block absolute right-3 top-9" onClick={() => setChg1(!chg1)}>
                                            {chg1 ? <span className="text-2xl">{EyeClose}</span> : <span className="text-2xl">{EyeOpen}</span>}
                                        </span>
                                    </label>
                                </div>
                                <div className="mt-7">
                                    <label className="relative">
                                        <span className="text-lg font-medium mb-3">Enter Password 2:</span>
                                        <input
                                            type={chg2 ? 'text' : 'password'}
                                            placeholder="Enter Password 2"
                                            value={password2}
                                            onChange={(e) => setPassword2(e.target.value)}
                                            className="w-full outline-none px-3 py-3 pr-12 bg-white border-[1px] border-[#dfdddd] rounded-md font-medium"
                                        />
                                        <span className="block absolute right-3 top-9" onClick={() => setChg2(!chg2)}>
                                            {chg2 ? <span className="text-2xl">{EyeClose}</span> : <span className="text-2xl">{EyeOpen}</span>}
                                        </span>
                                    </label>
                                </div>
                                <div className="mt-7" >
                                    <LoadCanvasTemplate reloadText="Reload" />
                                    <input
                                        placeholder="Enter CAPTCHA"
                                        value={captchaInput}
                                        onChange={(e) => setCaptchaInput(e.target.value)}
                                        className="w-full outline-none px-3 py-3 pr-12 bg-white border-[1px] border-[#dfdddd] rounded-md font-medium mt-3"
                                    />
                                </div >
                                <div>
                                    <button type="submit" className="w-full transition-colors hover:bg-yellow-400/80 bg-yellow-400 py-3 rounded mt-5">
                                        <span className="text-lg font-medium">Continue</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='flex items-center justify-between max-w-[1200px] mx-auto mt-32 14xl:mt-10'>
                            <div>
                                <h1 className='text-3xl font-semibold text-[#112152]'>All Users</h1>
                            </div>
                            <div>
                                <button onClick={handleLogout} className='px-3 py-1 rounded border-[1px] border-[#112152]'>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-sm font-medium'>Log out</span>
                                        <span>{LogOutIcon}</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Main