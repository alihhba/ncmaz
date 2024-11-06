import React, {useMemo} from "react";
import {ListContext} from "@/panels/customer/pages/test/component/ListContext";

const ListContainer = ({children, ...restProps}) => {

    const value = useMemo(() => ({}), []);
    const fetcher = () => {

    };

    const filters = {};

    const actions = {};

    const itemTemplate = {};

    const placeholder = {};

    const paginationType = {};


    return (
        <div {...restProps}>
            <ListContext.Provider value={value}>
                {children}
            </ListContext.Provider>
        </div>
    );
};