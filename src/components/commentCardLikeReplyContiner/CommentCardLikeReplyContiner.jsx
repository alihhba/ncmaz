import {
  addNewLikedByPostId,
  removeLikedByPostId,
  selectCommentRecentLikeds,
  selectCommentRecentRemoveds,
} from "@/app/commentLikes/commentLikes";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import React from "react";
import CommentCardLikeReply from "../cards/commentCard/CommentCardLikeReply";

const CommentCardLikeReplyContainer = ({
  className = "",
  comment,
  ...args
}) => {
  const { like, id } = comment;

  const recentLikeds = useAppSelector(selectCommentRecentLikeds);
  const recentRemoveds = useAppSelector(selectCommentRecentRemoveds);
  const dispatch = useAppDispatch();

  const isLiked = () => {
    if (recentLikeds?.includes(id)) {
      return true;
    }
    if (like.isLiked && !recentRemoveds?.includes(id)) {
      return true;
    }
    return false;
  };

  const getLikeCount = () => {
    // Recent Liked
    if (recentLikeds?.includes(id)) {
      return like.count + 1;
    }
    if (like.isLiked && recentRemoveds?.includes(id)) {
      return like.count - 1;
    }
    return like.count;
  };

  const handleClickLike = () => {
    if (isLiked()) {
      dispatch(removeLikedByPostId(id));
    } else {
      dispatch(addNewLikedByPostId(id));
    }
  };

  return (
    <CommentCardLikeReply
      className={className}
      onClickLike={handleClickLike}
      commentId={id}
      isLiked={isLiked()}
      likeCount={getLikeCount()}
      {...args}
    />
  );
};

export default CommentCardLikeReplyContainer;
