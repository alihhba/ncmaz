import React from "react";
import classNames from "@/utils/classNames";
import Chart from "../charts";
import Placeholder from "@/components/Placeholder";
import {SnapshotList} from "@/panels/customer/pages/snapshots";

const ServerSnapshots = ({className, ...restProps}) => {
    return (
        <div
            className={classNames("", className)}
        >
            <SnapshotList {...restProps} />
        </div>
    );
};

export default ServerSnapshots;