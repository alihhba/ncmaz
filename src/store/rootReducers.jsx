import bookmarkReducer from "./bookMarks/BookMarksSlice";
import postLikesReducer from "@/app/postLikes/PostLikes";
// import commentLikesReducer from "./commentLikes/commentLikes";
// import darkmodeReducer from "./darkmode/darkmode";
// import pagesReducer from "./pages/pages";
import mediaRunningReducer from "@/app/mediaRunning/mediaRunning";

const rootReducers = {
  bookmark: bookmarkReducer,
  postLike: postLikesReducer,
  //   darkmode: darkmodeReducer,
  //   commentLikes: commentLikesReducer,
  //   pages: pagesReducer,
  mediaRunning: mediaRunningReducer,
};

export default rootReducers;
