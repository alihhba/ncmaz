import React from "react";
import classNames from "@/utils/classNames";
import Chart from "../charts";

const ServerRebuild = ({className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            Rebuild
        </div>
    );
};

export default ServerRebuild;