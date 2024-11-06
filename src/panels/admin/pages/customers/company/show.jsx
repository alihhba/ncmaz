import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import useResourceAction from "@/hooks/useResourceAction";
import DescriptionList from "@/components/DescriptionList";
import {CustomerSections} from "@/panels/admin/pages/customers/sections";

export const CustomerCompanyShow = ({resource, id: providedId}) => {

    const {id: parsedId} = useParsed();
    const id = providedId || parsedId;

    return (
        <Page>
            <Page.Content>
                <CustomerSections type="company" id={id} />
            </Page.Content>
        </Page>
    );
};