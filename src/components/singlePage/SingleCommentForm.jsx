import React from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import Textarea from "../textArea/TextArea";

const SingleCommentForm = ({
  className = "mt-5",
  commentId,
  onClickSubmit,
  onClickCancel,
  textareaRef,
  defaultValue = "",
  rows = 4,
}) => {
  return (
    <form action="#" className={`nc-SingleCommentForm ${className}`}>
      <Textarea
        placeholder="Add to discussion"
        ref={textareaRef}
        required={true}
        defaultValue={defaultValue}
        rows={rows}
      />
      <div className="mt-2  flex items-center gap-3">
        <ButtonPrimary onClick={() => onClickSubmit(commentId)} type="submit">
          Submit
        </ButtonPrimary>
        <ButtonSecondary type="button" onClick={() => onClickCancel(commentId)}>
          Cancel
        </ButtonSecondary>
      </div>
    </form>
  );
};

export default SingleCommentForm;
