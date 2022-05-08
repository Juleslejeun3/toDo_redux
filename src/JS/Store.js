import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice";

export default configureStore({
 reducer: {
  task: taskSlice,
 },
});