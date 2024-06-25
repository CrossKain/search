import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const repoApi = createApi({
    reducerPath: "repoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com/search/users",
        
    }),
    endpoints: (builder) => ({
        getRepos: builder.query({
            query: ({user, limit=10, order="asc", sort="repositories", page=1}) => 
                `?q=${user}&per_page=${limit}&order=${order}&sort=${sort}&page=${page}`  
        })
    })


})

export const {useLazyGetReposQuery, useGetReposQuery} = repoApi