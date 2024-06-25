import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
    name: "repo",
    initialState: {
        page: 1,
        order: "asc",
        limit: 15,
        repos: [],
        sort: "followers",
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload
        },
        setLimit:(state, action) => {
            state.limit = action.payload
        },
        setRepos: (state, action) => {
            state.repos = action.payload
        },
        setSort:(state, action) => {
            state.sort = action.payload
        }
    }
})

export  const {setPage, setOrder, setSort, setLimit, setRepos} = repoSlice.actions;
export default repoSlice.reducer