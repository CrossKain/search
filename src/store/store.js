import { configureStore } from "@reduxjs/toolkit";
import { repoApi } from "./api/repoApi";
import repoSlice from "./slices/repoSlice";

export const store = configureStore({
    reducer: {
        [repoApi.reducerPath]: repoApi.reducer,
        repo: repoSlice,
        
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(repoApi.middleware)


    
}) 