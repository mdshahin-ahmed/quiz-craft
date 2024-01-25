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
  }),
});

export const { useAddQuizMutation } = quizApi;
