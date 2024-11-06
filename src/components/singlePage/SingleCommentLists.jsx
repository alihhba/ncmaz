import React from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import CommentCard from "../cards/commentCard/CommentCard";

const SingleCommentLists = ({ comments }) => {
  let cmtLv1 = comments.filter((item) => !item.parentId);

  const renderCommentItemChild = (comment) => {
    return (
      <li key={comment.id}>
        <CommentCard size="normal" comment={comment} />
        {comment.children && (
          <ul className="ps-4 mt-5 space-y-5 md:ps-9">
            {comment.children.map(renderCommentItemChild)}
          </ul>
        )}
      </li>
    );
  };

  const renderCommentItem = (comment) => {
    return (
      <li key={comment.id}>
        <CommentCard comment={comment} />
        {comment.children && (
          <ul className="ps-4 mt-5 space-y-5 md:ps-11">
            {comment.children.map(renderCommentItemChild)}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul className="nc-SingleCommentLists space-y-5">
      {cmtLv1.map(renderCommentItem)}
      <ButtonPrimary className="dark:bg-primary-700 w-full">
        View full comments (+117 comments)
      </ButtonPrimary>
    </ul>
  );
};

export default SingleCommentLists;
