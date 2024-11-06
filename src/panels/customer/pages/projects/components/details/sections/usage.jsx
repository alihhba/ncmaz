import React from "react";
import classNames from "@/utils/classNames";
import Chart from "../charts";

const ServerUsage = ({className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Chart.RAM />
                <Chart.CPU />
                <Chart.Network />
                <Chart.IO />
            </div>
        </div>
    );
};

export default ServerUsage;