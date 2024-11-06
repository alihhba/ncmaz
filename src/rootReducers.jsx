import bookmarkReducer from "@/store/bookMarks/BookMarksSlice";
import postLikesReducer from "./app/postLikes/postLikes";
import commentLikesReducer from "@/app/commentLikes/commentLikes";
// import darkmodeReducer from "./darkmode/darkmode";
// import pagesReducer from "./pages/pages";
// import mediaRunningReducer from "./mediaRunning/mediaRunning";

const rootReducers = {
  bookmark: bookmarkReducer,
  postLike: postLikesReducer,
  // darkmode: darkmodeReducer,
  commentLikes: commentLikesReducer,
  // pages: pagesReducer,
  // mediaRunning: mediaRunningReducer,
};

export default rootReducers;
