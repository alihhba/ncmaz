import React from "react";
import classNames from "@/utils/classNames";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import Sections from './index';
import statuses from "@/modules/server/components/statuses";
import {useParsed} from "@refinedev/core";
import Link from "@/components/Link";
import {ReactSVG} from "react-svg";
import {DeleteAction} from '../actions/Delete';
import {SnapshotAction} from "../actions/Snapshot";
import {ConsoleAction} from "@/modules/server/components/details/actions/Console";
import {RebuildAction} from "@/modules/server/components/details/actions/Rebuild";
import {RestartAction} from "@/modules/server/components/details/actions/Restart";
import {SuspendAction} from "@/modules/server/components/details/actions/Suspend";
import {UnsuspendAction} from "@/modules/server/components/details/actions/Unsuspend";
import {PowerAction} from "@/modules/server/components/details/actions/Power";

const Information = ({data = {}, className, baseUrl: providedBaseUrl, ...restProps}) => {
    const {id} = useParsed();
    const baseUrl = providedBaseUrl || `/servers/${id}`
    // console.log(data);
    //
    // const {name: title, status: statusM, flavor = {}, addresses = {}} = data || {};
    // const {name: flavorName, ram, disk, vcpus: cpu} = flavor || {};
    // const {external: externalAddresses} = addresses || {};
    // console.log(externalAddresses);
    // const ipv4s = (externalAddresses || []).filter(({version})=>version === 4).map(({addr}) => addr);
    // const ipv6s = (externalAddresses || []).filter(({version})=>version === 6).map(({addr}) => addr);
    // console.log(ipv4s);
    //
    // const statusSlug = statusM === 'ACTIVE' ? 'power-on' : (statusM === 'SHUTOFF' ? 'power-off' : '')
    // const status = statuses.find(({slug}) => slug === statusSlug) || {};

    const {
        name = '',
        flavor = {},
        image = {},
        payment_plan: paymentPlan = '',
        used_bandwidth: usedBandwidth,
        status: statusSlug,
        is_abused: isAbused,
        is_suspended: isSuspended,
        datacenter = '',
        ipv4_public: ipv4Public,
        ipv4_private: ipv4Private,
        ipv6_public: ipv6Public,
        ipv6_private: ipv6Private,
        bandwidth,
    } = data || {};

    const {
        name: flavorName = '',
        ram,
        cpu,
        disk,
        disk_type: diskType = '',
    } = flavor || {};

    const {logo: imageLogo} = image || {};

    const ipv4s = [ipv4Public];
    const ipv6s = [ipv6Public];

    const status = statuses.find(({slug}) => slug === statusSlug) || {};

    return (
        <Placeholder.Card title="اطلاعات سرور" icon="server" className={className}
                          bodyProps={{className: 'p-0'}} {...restProps}
                          meta={(
                              <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
                                  <div className="flex items-center">

                                      {!isSuspended ? (<SuspendAction id={id} data={data} />) : (!isAbused ? (<UnsuspendAction id={id} data={data} />) : null)}
                                      <PowerAction id={id} data={data} />
                                      <RestartAction id={id} data={data}/>
                                      <ConsoleAction baseUrl={baseUrl} />
                                      <SnapshotAction baseUrl={baseUrl} />
                                      <RebuildAction baseUrl={baseUrl} />
                                      <DeleteAction id={id} data={data}/>
                                  </div>
                              </div>
                          )}
        >
            <div className="p-6">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-3 ps-2 pe-8 py-8 flex flex-col justify-center">
                        <ReactSVG src={imageLogo && imageLogo.url} className="w-10 h-10 text-primary-600"/>

                        <div className="flex items-center justify-start gap-2 mt-4">
                            <div className="relative text-2xl font-medium ">{name}</div>
                            {isAbused ? <Icon type="exclamation-triangle" className="h-6 w-6 text-orange-600"/> : null}
                            {/*<a className="text-slate-500 ms-4" href="">*/}
                            {/*    <Icon type="arrow-path" className="tooltip w-4 h-4"*/}
                            {/*          title="Total value of your sales: $158.409.416" />*/}
                            {/*</a>*/}
                        </div>
                        <div
                            className={classNames(" mt-5 text-center items-center justify-center w-20 inline-flex rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset", status.background, status.color, status.border)}>
                            {status.label} {isAbused ? '-abuse' : null}
                        </div>

                        {/*<div className="mt-4 text-slate-500 text-xs">Last updated 1 hour ago</div>*/}

                        {/*<button className="border border-gray-300 p-2 relative justify-start rounded-full mt-12">*/}
                        {/*    Download Reports*/}
                        {/*    <span*/}
                        {/*        className="w-8 h-8 absolute flex justify-center items-center bg-primary-600 text-white rounded-full end-0 top-0 bottom-0 my-auto ms-auto me-0.5">*/}
                        {/*    <Icon type="arrow-long-end" shouldFlipBasedOnDirection className="w-4 h-4" />*/}
                        {/*    </span>*/}
                        {/*</button>*/}
                    </div>
                    <div
                        className="col-span-12 lg:col-span-9 p-8 border-t lg:border-t-0 lg:border-s border-slate-200 dark:border-darkmode-300 border-dashed">
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
                                    <div className="text-slate-500 text-sm">Flavor</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">{flavorName}</div>
                                        {/*<div*/}
                                        {/*    className="text-danger flex text-xs font-medium tooltip cursor-pointer ms-2"*/}
                                        {/*    title="2% Lower than last month"> 2% <Icon type="chevron-down" className="w-3 h-3 ms-0.5" />*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">دیتاسنتر</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base">{datacenter}</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">پهنای باند</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base" style={{direction: 'ltr'}}>{bandwidth}</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">حافظه</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base" style={{direction: 'ltr'}}>{ram} GB</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">پردازنده</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base" style={{direction: 'ltr'}}>{cpu} Core</div>
                                        {/*<div*/}
                                        {/*    className="text-success flex text-xs font-medium tooltip cursor-pointer ms-2"*/}
                                        {/*    title="52% Higher than last month"> 52% <Icon type="chevron-up" className="w-3 h-3 ms-0.5" />*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">دیسک</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base"
                                             style={{direction: 'ltr'}}>{disk} GB {diskType.toUpperCase()}</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">ترافیک مصرفی</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div className="text-base flex items-center">
                                            <div style={{direction: 'ltr'}}
                                                 className="flex-shrink-0">{usedBandwidth} GB
                                            </div>
                                            <div
                                                className="flex items-center gap-2 ms-1 text-sm text-gray-600 flex-shrink-0">
                                                <div>( باقیمانده</div>
                                                <div style={{direction: 'ltr'}}>{10000 - usedBandwidth} GB</div>
                                                <div>)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">IPv4 (Public)</div>
                                    <div className="mt-1.5 flex items-center">
                                        {/*<div className="text-base">{ipv4s.length ? ipv4s.join(" - ") : '-'}</div>*/}
                                        <div className="text-base">{ipv4Public}</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">IPv4 (Private)</div>
                                    <div className="mt-1.5 flex items-center">
                                        {/*<div className="text-base">{ipv4s.length ? ipv4s.join(" - ") : '-'}</div>*/}
                                        <div className="text-base">{ipv4Private}</div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">IPv6 (Public)</div>
                                    <div className="mt-1.5 flex items-center">
                                        {/*<div className="text-base">{ipv6s.length ? ipv6s.join(" - ") : '-'}</div>*/}
                                        <div className="text-base truncate">{ipv6Public}</div>
                                        {/*<div*/}
                                        {/*    className="text-success flex text-xs font-medium tooltip cursor-pointer ms-2"*/}
                                        {/*    title="49% Higher than last month"> 49% <Icon type="chevron-up" className="w-3 h-3 ms-0.5" />*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 md:col-span-4">
                                    <div className="text-sm text-slate-500">IPv6 (Private)</div>
                                    <div className="mt-1.5 flex items-center">
                                        {/*<div className="text-base">{ipv6s.length ? ipv6s.join(" - ") : '-'}</div>*/}
                                        <div className="text-base truncate">{ipv6Private}</div>
                                        {/*<div*/}
                                        {/*    className="text-success flex text-xs font-medium tooltip cursor-pointer ms-2"*/}
                                        {/*    title="49% Higher than last month"> 49% <Icon type="chevron-up" className="w-3 h-3 ms-0.5" />*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-6 md:col-span-4">
                                    <div className="text-slate-500 text-sm">پلن فعلی</div>
                                    <div className="mt-1.5 flex items-center">
                                        <div
                                            className="text-base">{paymentPlan === "monthly" ? "ماهانه" : paymentPlan}</div>
                                        {/*<div*/}
                                        {/*    className="text-danger flex text-xs font-medium tooltip cursor-pointer ms-2"*/}
                                        {/*    title="2% Lower than last month"> 2% <Icon type="chevron-down" className="w-3 h-3 ms-0.5" />*/}
                                        {/*</div>*/}
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