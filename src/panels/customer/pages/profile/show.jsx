import React from "react";
import classNames from "@/utils/classNames";
import Page from "@/components/Page";
import StatusListBox from "@/pages/posts/components/actions/status";
import Icon from "@/components/Icon";
import Form from "@/components/Form";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import useResourceAction from "@/hooks/useResourceAction";
import {CustomerCompanyProfileShow} from "@/panels/customer/pages/profile/company/show";
import {useNavigate} from "react-router-dom";
import {CustomerPersonProfileShow} from "@/panels/customer/pages/profile/person/show";

export const ProfileShow = ({children, className, ...restProps}) => {

    const {createUrl, fetchList} = useResourceAction("profile");
    const navigate = useNavigate();
    const fetchedData = fetchList();
    const {data = {}} = fetchedData?.data?.data || {};

    const {type} = data || {};

    if (type === "company") {
        return (
            <CustomerCompanyProfileShow data={data} onEdit={()=>navigate(createUrl)} />
        );
    }

    if (type === "person") {
        return (
            <CustomerPersonProfileShow data={data} onEdit={()=>navigate(createUrl)} />
        );
    }

    return (
        <div />
    );

};