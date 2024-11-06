import React from "react";
import { useNavigation, useResource } from "@refinedev/core";

const useResourceAction = (mainResource) => {
    const {resource} = useResource(mainResource);
    const {createUrl, editUrl} = useNavigation();

    return {
        createUrl: () => createUrl(resource.name),
        editUrl: id => editUrl(resource.name, id),
    };
};

export default useResourceAction;