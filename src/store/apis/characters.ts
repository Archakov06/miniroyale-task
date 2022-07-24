import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../constants";
import { RootState } from "../store";
import { setPage, setTotalCount } from "../slices/filter";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<ResponseDetails<Character[]>, void>({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const state = queryApi.getState();
        const { searchValue, page, totalCount } = (state as RootState).filter;

        const response = (await baseQuery(
          `/character?name=${searchValue}&page=${page}`
        )) as any;

        if (response.data.info.count !== totalCount) {
          queryApi.dispatch(setTotalCount(response.data.info.count));
          queryApi.dispatch(setPage(1));
        }

        return response;
      },
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const {
  useGetAllCharactersQuery,
  useGetCharacterByIdQuery,
  useLazyGetAllCharactersQuery,
} = charactersApi;
