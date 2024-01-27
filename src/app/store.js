import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../slice/userDetailSlice"; // Correct import statement

const store = configureStore({
    reducer: {
        app: userDetail, // Pass the reducer, not the slice itself
    }
});

export default store;
