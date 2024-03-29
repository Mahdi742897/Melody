import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "92c0f76cb4msh2abf5890478ce16p1b973fjsn63d8f54525b1"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPopularSongs: builder.query({
      query: () => "charts/track?locale=en-US&pageSize=20&startFrom=0",
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `shazam-songs/get-details?id=${songid}&locale=en-US`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `shazam-songs/list-similarities?id=track-similarities-id-${songid}&locale=en-US`,
    }),
    GetArtistDetail: builder.query({
      query: ({ artistid }) => `artists/get-details?id=${artistid}&l=en-US`,
    }),
  }),
});

export const {
  useGetAllPopularSongsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailQuery,
} = shazamApi;
