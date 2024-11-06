import React from "react";
import {useDelete, useList, useNavigation, useResource} from "@refinedev/core";

const useFetchList = ({
                          resource,
                          pagination: {page: currentPage = 1} = {},
                          filters = [],
                          sorters = [],
                          ...restFetchListProps
                      }) => {
    const result = useList({
        resource,
        pagination: {
            mode: 'off',
        },
        filters: [
            {
                field: 'page',
                value: currentPage,
                operator: 'eq'
            },
            ...filters
        ],
        sorters,
        ...restFetchListProps
    });

    console.log(filters);

    const {data} = result || {};
    const items = data?.data?.data || [];
    const pagination = data?.data?.meta || {};

    return {
        ...result,
        items,
        pagination,
    };
};

export default useFetchList;