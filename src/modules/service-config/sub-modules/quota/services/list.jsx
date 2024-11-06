import React from "react";
import item from "@/modules/ticket/common/data-list/item";

const items = [
    {
        id: 1,
        name: "پلن یک",
        cpu: 12,
        ram: 20,
        disk: 224,
        price: 187,
        is_plan: false,
        status: "active",
        created_at: "2023-07-15T07:37:59.000000Z",
        updated_at: "2023-07-15T07:37:59.000000Z",
        created_at_persian: "1402/04/24 - 07:37",
        updated_at_persian: "1402/04/24 - 07:37",
        price_monthly: 134640
    },
    {
        id: 2,
        name: "پلن دو",
        cpu: 16,
        ram: 14,
        disk: 160,
        price: 89,
        is_plan: true,
        status: "disabled",
        created_at: "2023-07-15T07:37:59.000000Z",
        updated_at: "2023-07-15T07:37:59.000000Z",
        created_at_persian: "1402/04/24 - 07:37",
        updated_at_persian: "1402/04/24 - 07:37",
        price_monthly: 64080
    },
];

export const fetchList = () => {
    return items;

    // import fetchList for this resource.
};

export const fetchCurrent = ({id}) => {
    return items.find(({id: itemId}) => itemId === parseInt(id) )
};