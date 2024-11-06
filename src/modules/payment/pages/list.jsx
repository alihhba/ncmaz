import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import Icon from "@/components/Icon";
import useResourceAction from "@/hooks/useResourceAction";
import ResourceButton from "@/components/ResourceButton";
import {ServerListItem} from "@/modules/server/components/listItem";
import useSelectedItems from "@/hooks/useSelectedItems";
import PersianNumber from "@/utils/persianNumber";

export const PaymentList = ({children}) => {

    return (
        <>
            <div>Payment</div>
            {children}
        </>
    )
};