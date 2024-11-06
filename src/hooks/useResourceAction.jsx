import React from "react";
import { useDelete, useNavigation, useResource } from "@refinedev/core";
import fetchList from "@/hooks/useFetchList";
import fetchCurrent from "@/hooks/useFetchCurrent";

const useResourceAction = (mainResource) => {
  const { resource } = useResource(mainResource ?? undefined);
  const { show, createUrl, editUrl, showUrl } = useNavigation();

  const { mutate: deleteRecord } = useDelete();

  const deleteAction = (resourceName, resourceId, args = {}) => {
    deleteRecord(
      {
        resource: resourceName,
        id: resourceId,
      },
      args
    );
  };

  return {
    show: (id) => {
      show(resource.identifier || resource.name, id);
    },
    createUrl: createUrl(resource.identifier || resource.name),
    showUrl: (id, args) =>
      showUrl(resource.identifier || resource.name, id, args || {}),
    editUrl: (id) => editUrl(resource.identifier || resource.name, id),
    deleteAction: ({ id, ...args }) => deleteAction(resource.name, id, args),
    fetchList: (props) => fetchList({ resource: resource.name, ...props }),
    fetchCurrent: (props) =>
      fetchCurrent({ resource: resource.name, ...props }),
  };
};

export default useResourceAction;
