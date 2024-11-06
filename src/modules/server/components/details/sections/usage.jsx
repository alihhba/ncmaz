import React from "react";
import classNames from "@/utils/classNames";
import Chart from "../charts";
import useResourceAction from "@/hooks/useResourceAction";

const ServerUsage = ({serverId, data, className, ...restProps}) => {

    return (
        <div
            className={classNames("", className)}
            {...restProps}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Chart.CPU data={data} serverId={serverId} />
                <Chart.RAM data={data} serverId={serverId} />
                <Chart.IO data={data} serverId={serverId} />
                <Chart.Network data={data} serverId={serverId} />
            </div>
        </div>
    );
};

export default ServerUsage;