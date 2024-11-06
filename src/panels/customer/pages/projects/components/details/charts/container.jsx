import React from "react";
import classNames from "@/utils/classNames";
import Select from "@/components/Form/Item/Select";
import Placeholder from "@/components/Placeholder";

const ChartContainer = ({title, icon, meta, children, className, ...restProps}) => {
    return (
        <Placeholder.Card
            title={title}
            icon={icon}
            meta={meta}
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </Placeholder.Card>
    );
};

export default ChartContainer;