import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  export const spotifyAPI = createApi({
    reducerPath: 'spotifyAPI',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://spotify81.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '584bbf5b31msh520aba2d896c368p1568bcjsnd3af5edc2181');
        return headers;
      }
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/top_200_tracks' }),
    }),
  })

  export const {
    useGetTopChartsQuery,
  } = spotifyAPI;