import React from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import Item from "./item";

const DataList = ({items = [], children, className, ...restProps}) => {

    return (
        <Placeholder.Card className={className} bodyProps={{className: "py-1 px-6"}} {...restProps}>
            <div className="divide-y divide-slate-200/60">
                {items.map(({slug, ...restItemProps}) => (
                    <Item key={slug} slug={slug} {...restItemProps} />
                ))}
            </div>
            {children}
        </Placeholder.Card>
    );
};

export default DataList;