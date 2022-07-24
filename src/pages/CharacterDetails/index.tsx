import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useGetCharacterByIdQuery } from "store/apis/characters";
import { CircularProgress, Typography } from "@mui/material";
import styles from "./CharacterDetails.module.scss";
import { LocationsList } from "components";

export const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCharacterByIdQuery(Number(id) || 0);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Navigate to="/" replace />;
  }

  if (!data) {
    return <Typography variant="h4">Empty data :(</Typography>;
  }

  const locationId = data.location.url.split("/").pop();

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={styles.details}>
        <Typography variant="h3">{data.name}</Typography>
        <ul className={styles.detailsList}>
          <li>
            <Typography variant="body2" color="text.secondary">
              Status: <b>{data.status}</b>
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              Species: <b>{data.species}</b>
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              Gender: <b>{data.gender}</b>
            </Typography>
          </li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          deserunt doloribus dolorum explicabo maiores nulla obcaecati quo
          ratione ut velit. Amet aperiam consequuntur dicta distinctio, fuga
          incidunt praesentium quam vitae.
        </p>

        <Typography classes={{ root: styles.blockTitle }} variant="h4">
          Episodes
        </Typography>

        <LocationsList ids={Number(locationId)} />
      </div>
    </div>
  );
};
