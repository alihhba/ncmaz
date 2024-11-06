import React from "react";
import useResourceAction from "@/hooks/useResourceAction";
import {useNavigate} from "react-router-dom";
import {CustomerCompanyProfileEdit} from "@/panels/customer/pages/profile/company/form";
import {CustomerPersonProfileEdit} from "@/panels/customer/pages/profile/person/form";

export const ProfileForm = ({children, className, ...restProps}) => {
    const {createUrl, fetchList} = useResourceAction("profile");
    const navigate = useNavigate();
    const fetchedData = fetchList();
    const {data = {}} = fetchedData?.data?.data || {};

    const {type} = data || {};

    if (type === "company") {
        return (
            <CustomerCompanyProfileEdit data={data} />
        );
    }

    if (type === "person") {
        return (
            <CustomerPersonProfileEdit data={data} />
        );
    }

    return (
        <div />
    );

};