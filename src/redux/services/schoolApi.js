import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const schoolApi = createApi({
  reducerPath: "schoolApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "/courses",
    }),
    getAllTeachers: builder.query({
      query: () => "teachers",
    }),
  }),
});

export const { useGetAllCoursesQuery, useGetAllTeachersQuery } = schoolApi;
