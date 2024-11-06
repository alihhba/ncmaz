import React, {useEffect, useState} from "react";
import classNames from "@/utils/classNames";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import Sections from './index';
import PersianNumber from "@/utils/persianNumber";

const Information = ({className, data, ...restProps}) => {

    const {
        name = '',
        quota = {},
        used_ram: usedRam = 0,
        used_cpu: usedCpu = 0,
        used_disk: usedDisk = 0,
        servers_count: serversCount,
    } = data || {};


    const {
        name: quotaName = '',
        ram,
        cpu,
        disk,
        price = '',
    } = quota || {};

    const [stats, setStats] = useState([]);

    useEffect(() => {
        setStats([...[
            {id: 1, name: 'حافظه', stat: serversCount ? usedRam : 0, icon: "ram", allocated: ram, used: serversCount ? (Math.ceil((usedRam * ram) / 100)|| 0) : 0, unit: 'GB'},
            {id: 2, name: 'پردازنده', stat: serversCount ? usedCpu : 0, icon: "cpu", allocated: cpu, used: serversCount ? (Math.ceil((usedCpu * cpu) / 100)|| 0) : 0, unit: 'Core'},
            {id: 3, name: 'دیسک', stat: serversCount ? usedDisk : 0, icon: "hard-drive", allocated: disk, used: serversCount ? (Math.ceil((usedDisk * disk) / 100)|| 0) : 0, unit: 'GB'},
        ]]);

    }, [data]);

    return (
        <div className={className}>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Placeholder.Card
                    title="اطلاعات پروژه"
                    icon="layer-group"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div>{name}</div>
                            <div className="text-sm text-gray-600">({quotaName})</div>
                        </div>

                        <div className="text-sm text-slate-500">
                            <PersianNumber withSeparator>{price}</PersianNumber> تومان (ماهانه)
                        </div>
                    </div>
                </Placeholder.Card>

                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg bg-white px-4 py-5 border sm:px-6 sm:pt-6"
                    >
                        <dt className="flex items-start">
                            <div className="rounded-md p-4 bg-primary-50 text-primary-600">
                                <Icon type={item.icon} className="h-6 w-6" aria-hidden="true"/>
                            </div>
                            <div className="ms-4 flex-1">
                                <p className="truncate text-sm font-medium text-slate-500">{item.name}</p>
                                <p className="text-2xl font-semibold text-primary-500 pt-2">
                                    <PersianNumber>{`${item.stat}%`}</PersianNumber></p>
                            </div>
                        </dt>
                        <dd className=" items-baseline">
                            {/*<p className="text-2xl font-semibold text-gray-900"><PersianNumber>{`${item.stat}%`}</PersianNumber></p>*/}
                            <div className="flex justify-end items-center pb-1 pt-1">
                                <p className="text-xs font-bold text-gray-400"
                                   style={{direction: 'ltr'}}>{item.used}/{item.allocated} {item.unit}</p>
                            </div>
                            <div className="h-1 bg-gray-200 rounded" style={{direction: 'ltr'}}>
                                <div className="bg-primary-600 h-1 rounded relative" style={{width: `${item.stat}%`}}/>
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Information;