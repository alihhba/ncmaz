import React from "react";
import DataList from "@/modules/ticket/common/data-list";
import findItemBy from "@/utils/findItemBy";
import services from "@/modules/ticket/metadata/services";

const TicketService = ({data, children, className, ...restProps}) => {

    const {
        service_type: serviceTypeSlug = '',
        service_id: serviceId,
        service = {},
    } = data || {};

    const serviceType = findItemBy({source: services, key: 'slug', value: serviceTypeSlug});

    const items = [
        {slug: 'service_type', label: 'نوع سرویس', value: serviceType.label, icon: 'square-2x2'},
    ];

    if (serviceTypeSlug === "server" && service) {
        const {name, flavor, image} = service || {};
        const {name: flavorName} = flavor || {};
        const {name: imageName} = image || {};
        items.push(
            {slug: 'name', label: 'نام', value: name, icon: 'server'},
            {slug: 'flavor', label: 'Flavor', value: flavorName, icon: 'flavor'},
            {slug: 'image', label: 'سیستم عامل', value: imageName, icon: 'image'},
            // {slug: 'cpu', label: 'پردازنده', value: '8GB', icon: 'cpu'},
            // {slug: 'ram', label: 'رم', value: '8GB', icon: 'ram'},
            // {slug: 'network', label: 'شبکه', value: '1Gbps', icon: 'network'},
            // {slug: 'disk', label: 'دیسک', value: '64GB SSD', icon: 'hard-drive'},
        )
    }

    if(serviceTypeSlug === "project" && service){
        const {name, quota} = service || {};
        const {name: quotaName} = quota || {};

        items.push(
            {slug: 'name', label: 'نام', value: name, icon: 'layer-group'},
            {slug: 'quota', label: 'Quota', value: quotaName, icon: 'quota'},
        );
    }

    return (
        <DataList
            className={className}
            {...restProps}
            items={items}
        />
    );
};

export default TicketService;