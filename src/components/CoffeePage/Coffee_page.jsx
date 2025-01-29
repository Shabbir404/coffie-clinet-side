import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Follow_us from "../FollowUS/Follow_us";

const Coffee_page = () => {

    const [coffee, SetCoffee] = useState([])

    fetch('http://localhost:5000/coffee')
        .then(res => res.json())
        .then(data => SetCoffee(data))

    return (
        <div>
            <div className="w-9/12 mx-auto">
                <div className=" md:flex md:justify-between">
                    <div className="">
                        {
                            coffee.slice(0, 3).map((item, i) =>
                                <div key={i}>
                                    <div className="flex ">
                                        <div className="mt-12 flex p-1 md:pr-20 rounded-md bg-[#F5F4F1] ">
                                            <div>
                                                <img className="size-40" src={item.url} alt="" />
                                            </div>
                                            <div className="space-y-2 mt-8">
                                                <div className="flex ">
                                                    <h1 className="font-semibold">Name :</h1>
                                                    <p className="ml-2">{item.name}</p>
                                                </div>
                                                <div className="flex">
                                                    <h1 className="font-semibold">Test :</h1>
                                                    <p className="ml-2">{item.name}</p>
                                                </div>
                                                <div className="flex">
                                                    <h1 className="font-semibold">Category :</h1>
                                                    <p className="ml-2">{item.category}</p>
                                                </div>
                                            </div>
                                            {/* right side icons */}
                                            <div className="ml-8 mt-4 space-y-4">
                                                <div className="p-2 rounded-md text-white bg-[#D2B48C] cursor-pointer hover:bg-[#B29A6A] hover:text-gray-900">
                                                    <IoMdEye />
                                                </div>
                                                <div className="p-2 rounded-md text-white bg-[#3C393B] cursor-pointer hover:bg-[#6b6a6b] hover:text-gray-100">
                                                    <FaPen />
                                                </div>
                                                <div className="rounded-md bg-[#EA4744] text-white p-2 cursor-pointer hover:bg-[#9e5958] hover:text-gray-100">
                                                    <FaTrash />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {
                            coffee.slice(3, 6).map((item, i) =>
                                <div key={i}>
                                    <div className="flex ">

                                        <div className="mt-12 flex p-1 md:pr-20 bg-[#F5F4F1] rounded-md">
                                            <div>
                                                <img className="size-40" src={item.url} alt="" />
                                            </div>
                                            <div className="space-y-2 mt-8">
                                                <div className="flex ">
                                                    <h1 className="font-semibold">Name :</h1>
                                                    <p className="ml-2">{item.name}</p>
                                                </div>
                                                <div className="flex">
                                                    <h1 className="font-semibold">Test :</h1>
                                                    <p className="ml-2">{item.name}</p>
                                                </div>
                                                <div className="flex">
                                                    <h1 className="font-semibold">Category :</h1>
                                                    <p className="ml-2">{item.category}</p>
                                                </div>
                                            </div>
                                            {/* right side icons */}
                                            <div className="ml-8 mt-4 space-y-4">
                                                <div className="p-2 rounded-md text-white bg-[#D2B48C] cursor-pointer hover:bg-[#B29A6A] hover:text-gray-900">
                                                    <IoMdEye />
                                                </div>
                                                <div className="p-2 rounded-md text-white bg-[#3C393B] cursor-pointer hover:bg-[#6b6a6b] hover:text-gray-100">
                                                    <FaPen />
                                                </div>
                                                <div className="rounded-md bg-[#EA4744] text-white p-2 cursor-pointer hover:bg-[#9e5958] hover:text-gray-100">
                                                    <FaTrash />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                {/* follow-US */}
                <Follow_us></Follow_us>
            </div>
        </div>
    );
};

export default Coffee_page;