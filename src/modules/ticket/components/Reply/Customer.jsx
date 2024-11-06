import React from "react";
import PersianNumber from "@/utils/persianNumber";
import Icon from "@/components/Icon";

const TicketReplyCustomer = ({
                                 id,
                                 description = '',
                                 created_at_persian: createdAtPersian = '',
                                 attachments = [],
    sender: customer = {},
                                 className,
                                 ...restProps
                             }) => {

    const {name: customerName} = customer || {};

    return (
        <div className="flex items-end float-start mb-4">
            <div
                className="w-10 h-10 flex flex-shrink-0 items-center justify-center relative me-5 text-slate-500 bg-slate-200 rounded-full">
                <Icon type="user" className="h-5 w-5"/>
            </div>
            <div className="bg-slate-100 px-4 py-3 text-slate-500 rounded-e-md rounded-t-md max-w-lg">
                <div className="mb-2 text-xs text-slate-500"><PersianNumber>{customerName}</PersianNumber></div>
                <div>
                    {description.split('\n').map(item => (
                        <p className="text-justify leading-7 text-sm"><PersianNumber>{item}</PersianNumber></p>
                    ))}
                </div>
                <div className="mt-2 text-xs text-slate-500"><PersianNumber>{createdAtPersian}</PersianNumber></div>

                {attachments && attachments.length ? (
                    <div className="border rounded-md divide-y divide-slate-200 mt-2 text-sm">
                        {attachments.map(({name, url}) => (
                            <div className="flex items-center p-2">
                                <Icon type="attachment" className="h-4 w-4 me-2"/>
                                <a href={url} target="_blank">{name}</a>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
            {/*<div className="hidden sm:block dropdown ms-3 my-auto">*/}
            {/*    <a href="javascript:;" className="dropdown-toggle w-4 h-4 text-slate-500" aria-expanded="false"*/}
            {/*       data-tw-toggle="dropdown">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
            {/*             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*             iconName="more-vertical" data-lucide="more-vertical"*/}
            {/*             className="lucide lucide-more-vertical w-4 h-4">*/}
            {/*            <circle cx="12" cy="12" r="1" />*/}
            {/*            <circle cx="12" cy="5" r="1" />*/}
            {/*            <circle cx="12" cy="19" r="1" />*/}
            {/*        </svg>*/}
            {/*    </a>*/}
            {/*    <div className="dropdown-menu w-40">*/}
            {/*        <ul className="dropdown-content">*/}
            {/*            <li>*/}
            {/*                <a href="" className="dropdown-item">*/}
            {/*                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
            {/*                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
            {/*                         strokeLinejoin="round" iconName="corner-up-start" data-lucide="corner-up-start"*/}
            {/*                         className="lucide lucide-corner-up-start w-4 h-4 me-2">*/}
            {/*                        <polyline points="9 14 4 9 9 4" />*/}
            {/*                        <path d="M20 20v-7a4 4 0 00-4-4H4" />*/}
            {/*                    </svg>*/}
            {/*                    Reply </a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="" className="dropdown-item">*/}
            {/*                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
            {/*                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
            {/*                         strokeLinejoin="round" iconName="trash" data-lucide="trash"*/}
            {/*                         className="lucide lucide-trash w-4 h-4 me-2">*/}
            {/*                        <polyline points="3 6 5 6 21 6" />*/}
            {/*                        <path*/}
            {/*                            d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />*/}
            {/*                    </svg>*/}
            {/*                    Delete </a>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default TicketReplyCustomer;