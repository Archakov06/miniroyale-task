import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./Character.module.scss";
import { Link } from "react-router-dom";

interface CharacterProps {
  id: number;
  name: string;
  image: string;
  status: string;
}

export const Character: React.FC<CharacterProps> = ({
  id,
  name,
  image,
  status,
}) => {
  return (
    <div className={styles.root}>
      <Card>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.length > 20 ? name.substring(0, 20) + "..." : name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Статус: {status}
          </Typography>
        </CardContent>
        <CardActions>
          <Link className={styles.linkMore} to={`/character/${id}`}>
            <Button variant="outlined" size="small">
              More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
