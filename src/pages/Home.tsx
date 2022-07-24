import React from "react";
import { useGetAllCharactersQuery } from "store/apis/characters";
import { CircularProgress, Typography, Pagination } from "@mui/material";
import { Character } from "components";
import { useAppDispatch, useAppSelector } from "store/store";
import { setPage } from "store/slices/filter";

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  const queryProps = useGetAllCharactersQuery();

  const { data, error, isFetching, refetch } = queryProps;

  React.useEffect(refetch, [filter, refetch]);

  if (isFetching) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="h4">Error when fetching characters :(</Typography>
    );
  }

  if (!data) {
    return <Typography variant="h4">No have any characters :(</Typography>;
  }

  const handleChangePage = (_: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  return (
    <>
      <Pagination
        classes={{ root: "pagination" }}
        count={data.info.pages}
        defaultPage={filter.page}
        onChange={handleChangePage}
        variant="outlined"
        color="primary"
        size="large"
      />
      <div className="characters-grid">
        {data.results.map((obj) => (
          <Character
            id={obj.id}
            name={obj.name}
            image={obj.image}
            status={obj.status}
          />
        ))}
      </div>
    </>
  );
};
