import React from "react";
import Page from "@/components/Page";
import Placeholder from "@/components/Placeholder";
import {useParsed} from "@refinedev/core";
import PersianNumber from "@/utils/persianNumber";
import classNames from "@/utils/classNames";
import useResourceAction from "@/hooks/useResourceAction";
import DescriptionList from "@/components/DescriptionList";
import {CustomerPersonInformation} from "@/panels/admin/pages/customers/person/components/Information";
import {CustomerSections} from "@/panels/admin/pages/customers/sections";

export const CustomerPersonShow = ({resource, id: providedId}) => {

    const {id: parsedId} = useParsed();
    const id = providedId || parsedId;

    return (
        <Page>
            <Page.Content>
                <CustomerSections type="person" id={id} />
            </Page.Content>
        </Page>
    );
};