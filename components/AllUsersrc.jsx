'use client'

import { useState } from "react";
import Button from "./DeleteButton"
import More from "./More"


const AllUsersrc = ({ data }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data?.filter((user) => {
        return (
          user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.phone.includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })


    return (
        <div>
            <div className="my-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="grid grid-cols-4 18xl:grid-cols-3 16xl:grid-cols-2 14xl:grid-cols-1 gap-5 mt-7">
                {
                    filteredData?.map((e, i) => (
                        <div key={i} className="p-6 relative rounded-xl shadow-xl border-[1px] border-gray-300">
                            <div className="absolute top-1 left-1">
                                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 text-sm">{i + 1}</span>
                            </div>
                            <div className="absolute top-1 right-1">
                                <Button id={e._id}>
                                    <span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            version="1.1"
                                            viewBox="0 0 16 16"
                                            height="1.1em"
                                            width="1.1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z" />
                                            <path d="M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z" />
                                        </svg>
                                    </span>
                                </Button>
                            </div>

                            <div className="flex flex-col items-start">
                                <div>
                                    <span className="text-xs font-normal text-[#454545]">First name:</span>
                                    <h4 className="text-lg font-medium -mt-1.5">{e.firstname}</h4>
                                </div>
                                <div>
                                    <span className="text-xs font-normal text-[#454545]">Last name:</span>
                                    <h4 className="text-lg font-medium -mt-1.5">{e.lastname}</h4>
                                </div>
                                <div>
                                    <span className="text-xs font-normal text-[#454545]">Contact Phone:</span>
                                    <h4 className="text-lg font-medium -mt-1 -ml-1">{e.phone}</h4>
                                </div>
                                <div>
                                    <span className="text-xs font-normal text-[#454545]">Email Adress:</span>
                                    <h4 className="text-lg font-medium -mt-1 -ml-1">{e.email}</h4>
                                </div>
                                <div>
                                    <span className="text-xs font-normal text-[#454545]">Investment Budget :</span>
                                    <h4 className="text-lg font-medium -mt-1">{e.investmain} $</h4>
                                </div>
                                <div>
                                    <span className="text-xs font-normal text-[#454545]">Scam Type :</span>
                                    <h4 className="text-lg font-medium -mt-1">{e.mainspan}</h4>
                                </div>
                                <div>
                                    <span className="text-xs font-normal text-[#454545]">Message :</span>
                                    <More message={e.message} />
                                </div>
                                <div>
                                    <span className="text-xs font-normal text-[#454545]">Created Post :</span>
                                    <h3 className="text-base font-medium -mt-1">{e.createdAt.slice(0, 10)}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllUsersrc
