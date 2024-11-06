import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import NcModal from "@/components/Modal/NcModal";

import React, { useEffect, useRef } from "react";

const ModalDeleteComment = ({ commentId, show, onCloseModalDeleteComment }) => {
  const textareaRef = useRef(null);

  const handleClickSubmitForm = () => {
    console.log({ commentId });
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element = textareaRef.current;
        if (element) {
          element.focus();
        }
      }, 400);
    }
  }, [show]);

  const renderContent = () => {
    return (
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Delete comment
        </h3>
        <span className="text-sm">
          Are you sure you want to delete this comment? You cannot undo this
          action.
        </span>
        <div className="mt-4 gap-x-3">
          <ButtonPrimary onClick={handleClickSubmitForm} type="submit">
            Delete
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalDeleteComment}>
            Cancel
          </ButtonSecondary>
        </div>
      </form>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalDeleteComment}
      contentExtraClass="max-w-screen-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalDeleteComment;
