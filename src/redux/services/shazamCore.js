import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'



    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery : fetchBaseQuery({
            baseUrl:"https://shazam-core.p.rapidapi.com/v1",
            prepareHeaders : (headers) => {
                headers.set('X-RapidAPI-Key','aa22b74ff4mshec59e023df5e009p1ebde3jsncb79673d1716')

                return headers;
            },
        }),
        endpoints : (builder) => ({
            getSongsByGenre : builder.query({query : (genre) =>`/charts/genre-world?genre_code=${genre}`}),
            getTopCharts : builder.query({query : () => '/charts/world'}),
            getSongDetails : builder.query({query : ({songid}) => `/tracks/details?track_id=${songid}`}),
            getSongRelated : builder.query({query : ({songid}) => `/tracks/related?track_id=${songid}`}),
            getArtistDetails : builder.query({query : (artistId) => `/artists/details?artist_id=${artistId}`}),
            getSongsByCountry : builder.query({query : (CountryCode) => `/charts/country?country_code=${CountryCode}`}),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
            
        })

    });

    export const  {
        useGetTopChartsQuery,
        useGetSongsByGenreQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreApi;