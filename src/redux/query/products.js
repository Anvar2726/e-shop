import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINT } from "../../constants";
import { getUrl } from "../../utils";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: ENDPOINT }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ params, category, search }) => ({
        url: getUrl({ category, search }),
        params,
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
