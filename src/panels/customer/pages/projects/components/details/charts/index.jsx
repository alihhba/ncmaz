import React from "react";
import classNames from "@/utils/classNames";
import ChartRAM from "./ram";
import ChartCPU from "./cpu";
import ChartIO from "./io";
import ChartNetwork from "./network";

const Chart = ({children, className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            {children}
        </div>
    );
};

Chart.RAM = ChartRAM;
Chart.CPU = ChartCPU;
Chart.IO = ChartIO;
Chart.Network = ChartNetwork;

export default Chart;