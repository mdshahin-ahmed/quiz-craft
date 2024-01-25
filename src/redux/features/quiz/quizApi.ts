import { baseApi } from "../../api/baseApi";

export const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addQuiz: builder.mutation({
      query: (data) => ({
        url: "/quiz",
        method: "POST",
        body: data,
      }),
    }),
    getAllQuiz: builder.query({
      query: (moduleId) => ({
        url: `/quiz?module=${moduleId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddQuizMutation, useGetAllQuizQuery } = quizApi;
