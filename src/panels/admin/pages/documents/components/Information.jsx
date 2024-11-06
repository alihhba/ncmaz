import React from "react";
import DescriptionList from "@/components/DescriptionList/index.jsx";
import PersianNumber from "@/utils/persianNumber.jsx";
import Placeholder from "@/components/Placeholder/index.jsx";
import useResourceAction from "@/hooks/useResourceAction.jsx";
import {useParsed} from "@refinedev/core";

const DocumentInformation = ({resource = 'documents', id: providedId}) => {

    const {fetchCurrent} = useResourceAction(resource);
    const {id: parsedId} = useParsed();

    const id = providedId || parsedId;

    const document = fetchCurrent({id});

    const {
        title = '',
        created_at_persian: createdAtPersian = '',
        updated_at_persian: updatedAtPersian = '',
    } = document || {};

    return (
        <Placeholder.Card
            title="مشخصات سند"
            icon="clipboard"
        >
            <DescriptionList>

                <DescriptionList.Item title="عنوان">
                    {title}
                </DescriptionList.Item>

                <DescriptionList.Item title="تاریخ ایجاد" style={{direction: 'ltr'}}>
                    <PersianNumber>{createdAtPersian}</PersianNumber>
                </DescriptionList.Item>

                <DescriptionList.Item title="آخرین به روز رسانی" style={{direction: 'ltr'}}>
                    <PersianNumber>{updatedAtPersian}</PersianNumber>
                </DescriptionList.Item>

            </DescriptionList>
        </Placeholder.Card>
    );
}

export default DocumentInformation;