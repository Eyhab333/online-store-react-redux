
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://online-store-react-redux.onrender.com' }),
  endpoints: (builder) => ({
    getproductsByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://online-store-react-redux.onrender.com' }),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})

export const { useGetproductsByNameQuery } = productsApi
export const { useGetproductByNameQuery } = productApi