import React from "react";
import List from "@/modules/server/common/list";

export const Type = () => {
    return <div>
        title
    </div>
};

Type.Header = () => (
    <List.Header.Data.Text className="ps-8">عنوان</List.Header.Data.Text>
)

Type.Body = ({department}) => (
    <List.Item.Data.Text>
        {department}
    </List.Item.Data.Text>
);