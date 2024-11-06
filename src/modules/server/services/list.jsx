import React from "react";

const items = [
    {
        id: 1,
        title: 'server-1',
        ram: '4 GB',
        cpu: '2 Core',
        disk: '64 GB',
        ip: '10.24.33.96',
        uptime: '630',
        status: 'power-on'
    },
    {
        id: 2,
        title: 'server-2',
        ram: '8 GB',
        cpu: '4 Core',
        disk: '128 GB',
        ip: '10.24.33.95',
        uptime: null,
        status: 'power-off'
    },
    {
        id: 3,
        title: 'server-3',
        ram: '4 GB',
        cpu: '2 Core',
        disk: '64 GB',
        ip: '10.24.33.94',
        uptime: null,
        status: 'suspended'
    },
    {
        id: 4,
        title: 'server-4',
        ram: '4 GB',
        cpu: '2 Core',
        disk: '32 GB',
        ip: '10.24.33.93',
        uptime: '740',
        status: 'power-on'
    },
    {
        id: 5,
        title: 'server-5',
        ram: '4 GB',
        cpu: '2 Core',
        disk: '64 GB',
        ip: '10.24.33.92',
        uptime: null,
        status: 'power-off'
    },
    {
        id: 6,
        title: 'server-6',
        ram: '4 GB',
        cpu: '2 Core',
        disk: '64 GB',
        ip: '10.24.33.91',
        uptime: '230',
        status: 'power-on'
    },
];

export const fetchList = () => {
    return items;
};

export const fetchCurrent = ({id}) => {
    return items.find(({id: itemId}) => itemId === parseInt(id) )
};

export const realFetchCurrent = () => {
    // const {data: dataI} = useOne({
    //     resource: 'server',
    //     id,
    //     dataProviderName: 'serverD',
    //     meta: {
    //         headers: requestHeaders,
    //     },
    //     pagination: {
    //         mode: 'off',
    //     },
    // });

    // const data = dataI?.data;
}

export const realFetch = () =>{
    // const {data} = useList({
    //     resource: 'servers',
    //     dataProviderName: 'server',
    //     meta: {
    //         headers: requestHeaders,
    //     },
    //     pagination: {
    //         mode: 'off',
    //     },
    //     queryOptions: {
    //         refetchInterval: 20000,
    //     }
    // });
    //
    // console.log(data?.data?.servers);
    //
    // const fakeItem = {
    //     id: 1,
    //     title: 'server-1',
    //     ram: '4 GB',
    //     cpu: '2 Core',
    //     disk: '64 GB',
    //     ip: '10.24.33.96',
    //     uptime: '630',
    //     status: 'power-on'
    // };
    //
    // const convertFlavor = ({ram, vcpus, disk}) => ({
    //     ram: `${ram/1024} GB`,
    //     cpu: `${vcpus} Core`,
    //     disk: `${disk} GB`,
    // });
    //
    // const getIPv4 = ({external = []}) => {
    //     return (external.find(({version}) => version === 4) || {}).addr;
    // };
    //
    // const initialItems = data?.data?.servers.map(({id, name: title, flavor, addresses, status}) => ({
    //     ...fakeItem,
    //     id,
    //     title,
    //     ...convertFlavor(flavor),
    //     ip: getIPv4(addresses),
    //     status: status === 'ACTIVE' ? 'power-on' : (status === 'SHUTOFF' ? 'power-off' : ''),
    // }));
}