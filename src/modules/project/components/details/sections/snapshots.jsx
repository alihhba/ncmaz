import React from "react";
import classNames from "@/utils/classNames";
import Chart from "../charts";

const ServerSnapshots = ({className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            Snapshots
        </div>
    );
};

export default ServerSnapshots;