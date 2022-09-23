import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { morphism } from "morphism";
import { teachersSchema } from "../../modules/teachers/teachersSchema";
import { courseSchema } from "../schema/courseSchema";

export const schoolApi = createApi({
  reducerPath: "schoolApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "/courses",
      transformResponse: (data) => morphism(courseSchema, data),
    }),
    getAllTeachers: builder.query({
      query: () => "teachers",
      transformResponse: (data) => morphism(teachersSchema, data),
    }),
  }),
});

export const { useGetAllCoursesQuery, useGetAllTeachersQuery } = schoolApi;
