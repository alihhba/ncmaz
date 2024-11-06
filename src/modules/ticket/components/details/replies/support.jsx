import React from "react";
import classNames from "@/utils/classNames";
import PersianNumber from "@/utils/persianNumber";
import Icon from "@/components/Icon";

const TicketReplySupport = ({description = '', className, ...restProps}) => {
    return (
        <div className="chat__box__text-box flex items-end self-end mb-4">
            <div className="bg-primary-500 px-4 py-3 text-white rounded-s-md rounded-t-md">
                {description}
                <div className="mt-1 text-xs text-white text-opacity-80"><PersianNumber>1 دقیقه قبل</PersianNumber></div>
            </div>
            <div className="w-10 h-10 hidden sm:flex items-center justify-center relative ms-5 text-primary-600 bg-primary-50 rounded-full">
                <Icon type="headphones" className="h-5 w-5" />
            </div>
        </div>
    );
};

export default TicketReplySupport;