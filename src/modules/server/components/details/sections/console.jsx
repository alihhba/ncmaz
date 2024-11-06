import React from "react";
import classNames from "@/utils/classNames";
import Chart from "../charts";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";

const ServerConsole = ({data, className, ...restProps}) => {
    const {status, console} = data || {};
    const isAvailable = status === "on";

    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {/*<div className="bg-gray-800 text-slate-200 min-h-[20rem] rounded-lg p-5 text-left leading-8" style={{direction: 'ltr'}}>*/}
            {/*    /user/home: /*/}
            {/*</div>*/}
            <Placeholder.Card
                title="کنسول"
                icon="terminal"
                meta={isAvailable ? (
                    <a
                        target="_blank"
                        href={console}
                        className="flex ms-2 justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-md font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                        نمایش در تب جدید
                    </a>
                ): null}
            >
                {isAvailable ? (
                    <iframe src={console} className="w-full min-h-[20rem] rounded-lg" />
                ) : (
                    <div className="flex items-center justify-center gap-2 py-4 bg-slate-100">
                        <Icon type="exclamation-circle" className="h-6 w-6 text-blue-600" />
                        <div className="text-sm text-slate-700 leading-4">لطفا ابتدا سرور را روشن نمایید.</div>
                    </div>
                )}
            </Placeholder.Card>
        </div>
    );
};

export default ServerConsole;