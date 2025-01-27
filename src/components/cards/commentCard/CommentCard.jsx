import Avatar from "@/components/avatar/Avatar";
import CommentCardLikeReplyContainer from "@/components/commentCardLikeReplyContiner/CommentCardLikeReplyContiner";
import DropDown from "@/components/dropDown/Dropdown";
import ModalReportItem from "@/components/modalReportItem/ModalReportItem";
import SingleCommentForm from "@/components/singlePage/SingleCommentForm";
import twFocusClass from "@/utils/twFocusClass";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ModalEditComment from "./ModalEditComment";
import ModalDeleteComment from "./ModalDeleteComment";

const CommentCard = ({ className = "", comment, size = "large" }) => {
  const { author, id, date, parentId, content } = comment;
  const actions = [
    { id: "edit", name: "Edit", icon: "las la-edit" },
    { id: "reply", name: "Reply", icon: "las la-reply" },
    { id: "report", name: "Report abuse", icon: "las la-flag" },
    { id: "delete", name: "Delete", icon: "las la-trash-alt" },
  ];

  const textareaRef = useRef(null);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openReplyForm = () => {
    setIsReplying(true);
    setTimeout(() => {
      textareaRef.current && textareaRef.current.focus();
    }, 100);
  };
  const closeReplyForm = () => {
    setIsReplying(false);
  };

  const openModalEditComment = () => setIsEditting(true);
  const closeModalEditComment = () => setIsEditting(false);

  const openModalReportComment = () => setIsReporting(true);
  const closeModalReportComment = () => setIsReporting(false);

  const openModalDeleteComment = () => setIsDeleting(true);
  const closeModalDeleteComment = () => setIsDeleting(false);

  const hanldeClickDropDown = (item) => {
    if (item.id === "reply") {
      return openReplyForm();
    }
    if (item.id === "edit") {
      return openModalEditComment();
    }
    if (item.id === "report") {
      return openModalReportComment();
    }
    if (item.id === "delete") {
      return openModalDeleteComment();
    }
    return;
  };

  const renderCommentForm = () => {
    return (
      <SingleCommentForm
        textareaRef={textareaRef}
        onClickSubmit={(id) => {
          console.log(id);
        }}
        onClickCancel={closeReplyForm}
        className="flex-grow"
        commentId={id}
      />
    );
  };

  return (
    <>
      <div
        className={`nc-CommentCard flex ${className}`}
        data-nc-id="CommentCard"
        data-comment-id={id}
        data-comment-parent-id={parentId}
      >
        <Avatar
          imgUrl={author.avatar}
          userName={author.displayName}
          sizeClass={`h-6 w-6 text-base ${
            size === "large" ? "sm:text-lg sm:h-8 sm:w-8" : ""
          }`}
          radius="rounded-full"
          containerClassName="mt-4"
        />
        <div className="flex-grow flex flex-col p-4 ms-2 text-sm border border-neutral-200 rounded-xl sm:ms-3 sm:text-base dark:border-neutral-700">
          {/* AUTHOR INFOR */}
          <div className="relative flex items-center pe-6">
            <div className="absolute -right-3 -top-3">
              <DropDown
                className={`p-2 text-neutral-500 flex items-center justify-center rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 sm:hover:bg-neutral-100 dark:hover:bg-neutral-800 ${twFocusClass()}`}
                data={actions}
                onClick={hanldeClickDropDown}
              />
            </div>
            <Link
              className="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
              to={author.href}
            >
              {author.displayName}
            </Link>
            <span className="mx-2">·</span>
            <span className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
              {date}
            </span>
          </div>

          {/* CONTENT */}
          <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
            {content}
          </span>

          {/* ACTION LIKE REPLY */}
          {isReplying ? (
            renderCommentForm()
          ) : (
            <CommentCardLikeReplyContainer
              onClickReply={openReplyForm}
              comment={comment}
            />
          )}
        </div>
      </div>

      <ModalEditComment
        show={isEditting}
        comment={comment}
        onCloseModalEditComment={closeModalEditComment}
      />
      <ModalReportItem
        show={isReporting}
        id={comment.id}
        onCloseModalReportItem={closeModalReportComment}
      />
      <ModalDeleteComment
        show={isDeleting}
        commentId={comment.id}
        onCloseModalDeleteComment={closeModalDeleteComment}
      />
    </>
  );
};

export default CommentCard;
