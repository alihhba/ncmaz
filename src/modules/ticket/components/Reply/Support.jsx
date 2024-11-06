import React from "react";
import PersianNumber from "@/utils/persianNumber";
import Icon from "@/components/Icon";

const TicketReplySupport = ({description = '', created_at_persian: createdAtPersian = '', attachments = [], className, ...restProps}) => {
    return (
        <div className="flex items-end self-end mb-4">
            <div className="bg-primary-500 px-4 py-3 text-white rounded-s-md rounded-t-md max-w-lg">
                <div className="mb-2 text-sm text-white text-opacity-80">تیم پشتیبانی</div>
                <div>
                    {description.split('\n').map(item => (
                        <p className="text-justify leading-7 text-sm"><PersianNumber>{item}</PersianNumber></p>
                    ))}
                </div>
                <div className="mt-2 text-xs text-white text-opacity-80"><PersianNumber>{createdAtPersian}</PersianNumber></div>

                {attachments && attachments.length ? (
                    <div className="border border-white/20 rounded-md divide-y divide-primary-200 mt-2 text-sm">
                        {attachments.map(({name, url}) => (
                            <div className="flex items-center p-2">
                                <Icon type="attachment" className="h-4 w-4 me-2"/>
                                <a href={url} target="_blank">{name}</a>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center relative ms-5 text-primary-600 bg-primary-50 rounded-full">
                <Icon type="headphones" className="h-5 w-5" />
            </div>
        </div>
    );
};

export default TicketReplySupport;