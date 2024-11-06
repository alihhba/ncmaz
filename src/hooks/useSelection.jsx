import React from "react";

const useSelection = (mainResource) => {
    const {resource} = useResource(mainResource);
    const {createUrl, editUrl} = useNavigation();

    const deleteAction = (resourceName, resourceId) => {
        console.log(`deleted ${resourceName} - ${resourceId}.`);
    }

    return {
        // createUrl: () => createUrl(resource.name),
        createUrl: createUrl(resource.name),
        editUrl: id => editUrl(resource.name, id),
        deleteAction: id => deleteAction(resource.name, id)
    };
};

export default useSelection;