import React, { useState } from "react";
import classNames from "@/utils/classNames";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { useModal } from "@refinedev/core";
import { ModalConfirmDelete } from "@/components/Modal/Confirm/Delete";
import useResourceAction from "@/hooks/useResourceAction";

export const ResourceButtonDelete = ({
  id,
  label = "حذف",
  children,
  className,
  ...restProps
}) => {
  const { deleteAction } = useResourceAction();

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        className={classNames(
          "w-[6.5rem] relative inline-flex -ms-px items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-400 hover:bg-gray-50 focus:z-10",
          className
        )}
        onClick={show}
        {...restProps}
      >
        {children || (
          <>
            <Icon type="trash" className="me-2.5 h-5 w-5" aria-hidden="true" />
            <span>{label}</span>
          </>
        )}
      </Button>
      <ModalConfirmDelete
        open={visible}
        onCancel={close}
        onConfirm={() => {
          deleteAction(id);
          close();
        }}
      />
    </>
  );
};

export default ResourceButtonDelete;
