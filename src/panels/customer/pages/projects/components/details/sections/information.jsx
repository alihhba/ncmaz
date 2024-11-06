import React from "react";
import classNames from "@/utils/classNames";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import Sections from './index';

const Information = ({className, ...restProps}) => {
    return (
        <Placeholder.Card title="اطلاعات سرور" icon="server" className={className} bodyProps={{className: 'p-0'}} {...restProps}>
            <div className="p-6">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-4 ps-2 pe-8 py-8 flex flex-col justify-center">
                        <Icon type="chart" className="w-10 h-10 text-pending" />
                        <div
                            className="justify-start flex items-center text-slate-600 dark:text-slate-300 mt-12">
                            <div>My Total Assets</div>
                            <Icon type="exclamation-circle" className="tooltip w-4 h-4 ms-1.5"
                                            title="Total value of your sales: $158.409.416" />
                        </div>
                        <div className="flex items-center justify-start mt-4">
                            <div className="relative text-2xl font-medium ps-3 ms-0.5"><span
                                className="absolute text-xl font-medium top-0 start-0 -ms-0.5">$</span> 1,413,102.02
                            </div>
                            <a className="text-slate-500 ms-4" href="">
                                <Icon type="arrow-path" className="tooltip w-4 h-4"
                                      title="Total value of your sales: $158.409.416" />
                            </a>
                        </div>
                        <div className="mt-4 text-slate-500 text-xs">Last updated 1 hour ago</div>
                        <button className="border border-gray-300 p-2 relative justify-start rounded-full mt-12">
                            Download Reports
                            <span
                                className="w-8 h-8 absolute flex justify-center items-center bg-primary-600 text-white rounded-full end-0 top-0 bottom-0 my-auto ms-auto me-0.5">
                            <Icon type="arrow-long-end" shouldFlipBasedOnDirection className="w-4 h-4" />
                            </span>
                        </button>
                    </div>
                    <div
                        className="col-span-12 lg:col-span-8 p-8 border-t lg:border-t-0 lg:border-s border-slate-200 dark:border-darkmode-300 border-dashed">
                        {/*<ul className=" nav nav-pills w-60 border border-slate-300 dark:border-darkmode-300 border-dashed rounded-md mx-auto p-1 mb-8 "*/}
                        {/*    role="tablist">*/}
                        {/*    <li id="weekly-report-tab" className="nav-item flex-1" role="presentation">*/}
                        {/*        <button className="nav-link w-full py-1.5 px-2 active" data-tw-toggle="pill"*/}
                        {/*                data-tw-target="#weekly-report" type="button" role="tab"*/}
                        {/*                aria-controls="weekly-report" aria-selected="true"> Weekly*/}
                        {/*        </button>*/}
                        {/*    </li>*/}
                        {/*    <li id="monthly-report-tab" className="nav-item flex-1" role="presentation">*/}
                        {/*        <button className="nav-link w-full py-1.5 px-2" data-tw-toggle="pill"*/}
                        {/*                data-tw-target="#monthly-report" type="button" role="tab"*/}
                        {/*                aria-selected="false"> Monthly*/}
                        {/*        </button>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <div className="tab-content px-5 pb-5">
                            <div className="tab-pane active grid grid-cols-12 gap-y-8 gap-x-10"
                                 id="weekly-report" role="tabpanel" aria-labelledby="weekly-report-tab">
                                <div className="col-span-6 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Unpaid Loan</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">4.501</div>
                                        <div
                                            className="text-danger flex text-xs font-medium tooltip cursor-pointer ms-2"
                                            title="2% Lower than last month"> 2% <Icon type="chevron-down" className="w-3 h-3 ms-0.5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Active Partner</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">2</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Paid Installment</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">$72.000</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Disbursement</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">$54.000</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Success Payment</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">2.500</div>
                                        <div
                                            className="text-success flex text-xs font-medium tooltip cursor-pointer ms-2"
                                            title="52% Higher than last month"> 52% <Icon type="chevron-up" className="w-3 h-3 ms-0.5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Unpaid Loan</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">$72.000</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Posted Campaign</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">4.501</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Social Media</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">2</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500">Net Margin</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">$72.000</div>
                                        <div
                                            className="text-success flex text-xs font-medium tooltip cursor-pointer ms-2"
                                            title="49% Higher than last month"> 49% <Icon type="chevron-up" className="w-3 h-3 ms-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Placeholder.Card>
    );
};

export default Information;