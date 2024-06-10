import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin` }),
    tagTypes: ["admin"],
    endpoints: (builder) => {
        return {
            checkAdmin: builder.mutation({
                query: data => {
                    return {
                        url: "/checkAdmin",
                        method: "POST",
                        body: data
                    }
                },
                providesTags: ["admin"],

            }),

            addProject: builder.mutation({
                query: data => {
                    return {
                        url: "/addProject",
                        method: "POST",
                        body: data
                    }
                },
                providesTags: ["admin"],

            }),
            getProject: builder.query({
                query: () => {
                    return {
                        url: "/getProject",
                        method: "GET",

                    }
                },
                invalidatesTags: ["admin"],
                transformResponse: data => data.result


            }),



        }
    }
})

export const { useCheckAdminMutation, useAddProjectMutation, useGetProjectQuery } = adminApi
