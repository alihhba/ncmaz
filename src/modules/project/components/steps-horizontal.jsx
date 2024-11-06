import React from "react";
import Icon from "@/components/Icon";

const ServerStepsHorizontal = () => {
   
    return (
        <div className="border-b rounded py-8 xl:px-24 px-4 flex items-center justify-center">

            <div className="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 items-center">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                        {/*<p className="text-base text-white">1</p>*/}
                        <Icon type="trash" className="w-5 h-5" />
                    </div>
                    <p className="text-base leading-4 ms-6 md:ms-3 lg:ms-6  text-green-600">دیتاسنتر</p>
                </div>
                <div className="mx-8 sm:block hidden ">
                    <svg width="47" height="2" viewBox="0 0 47 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="47" y2="1" stroke="#059669" strokeWidth="2" />
                    </svg>
                </div>
                <div className="flex items-center sm:mt-0 mt-4">
                    <div className="w-8 h-8 bg-indigo-700 rounded-full flex items-center justify-center text-white">
                        <Icon type="pencil" className="w-5 h-5" />
                    </div>
                    <p  className="text-base leading-4 ms-6 md:ms-3 lg:ms-6 text-indigo-700">سیستم عامل</p>
                </div>
                <div className="sm:mx-4  md:mx-8 sm:block hidden">
                    <svg width="47" height="2" viewBox="0 0 47 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="47" y2="1" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="5 5" />
                    </svg>
                </div>
                <div className="flex items-center md:mt-0 mt-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border bg-slate-50 text-slate-500">
                        <Icon type="content-search" className="w-5 h-5" />
                    </div>
                    <p className="text-base leading-4 ms-6 md:ms-3 lg:ms-6 text-gray-900">منابع</p>
                </div>
                <div className="mx-8 md:mt-0 mt-4 sm:block hidden">
                    <svg width="47" height="2" viewBox="0 0 47 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="47" y2="1" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="5 5" />
                    </svg>
                </div>
                <div className="flex items-center lg:mt-0 mt-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border bg-slate-50 text-slate-500">
                        <Icon type="favorite" className="w-5 h-5" />
                    </div>
                    <p className="text-base leading-4 ms-6 md:ms-3 lg:ms-6 text-gray-900">دسترسی</p>
                </div>

            </div>
        </div>
    );
}

export default ServerStepsHorizontal;
