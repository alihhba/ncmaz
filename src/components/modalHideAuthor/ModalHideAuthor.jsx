import React, { useEffect, useRef } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import NcModal from "../Modal/NcModal";

const ModalHideAuthor = ({ auhthor, show, onCloseModalHideAuthor }) => {
  const textareaRef = useRef(null);

  const handleClickSubmitForm = () => {
    console.log({ auhthor: auhthor.id });
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
        <h3 className="text-lg font-semibold text-neutral-900">
          Hide stories from {auhthor.displayName}
        </h3>
        <span className="text-sm">
          We will hide all articles from <strong>{auhthor.displayName}</strong>.
          You will no longer see their articles?
        </span>
        <div className="mt-4 gap-x-3">
          <ButtonPrimary onClick={handleClickSubmitForm} type="submit">
            Hide
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalHideAuthor}>
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
      onCloseModal={onCloseModalHideAuthor}
      contentExtraClass="max-w-screen-sm"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalHideAuthor;
