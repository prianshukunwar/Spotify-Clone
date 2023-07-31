import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "761e4a3f69msh5b00ab146b2e331p1244a1jsn209c9d3fef36",
//     "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
//   },
// };

// fetch("https://spotify-scraper.p.rapidapi.com/v1/chart/tracks/top", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const spotifyScraperApi = createApi({
  reducerPath: "spotifyScraperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "761e4a3f69msh5b00ab146b2e331p1244a1jsn209c9d3fef36"
      );
      return headers;
    },
  }),   
  endpoints: (builder) => ({
    getTopTracks: builder.query({ query: () => "/chart/tracks/top" }),
  }),
});

export const { useGetTopTracksQuery } = spotifyScraperApi;
