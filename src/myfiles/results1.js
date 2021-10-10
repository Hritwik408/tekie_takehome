import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Typography,
  Chip
} 
from "@material-ui/core";

export default function Result1(props) {
  const { ship } = props;
  const renderRoles = () => {
    if (!ship) {
      return null;
    }
    return ship.roles.map((role, key) => {
      return <Chip className="roles" label={role} key={key} />;
    });
  };
  return (
    <div className="srch-cards">
      <Card className="cards">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={ship.name}
            height="200"
            image={
              ship.image
                ? ship.image
                : "https://api.spacexdata.com/v3/ships"
            }
            title={ship.name}
          />
        </CardActionArea>
        <CardActions className="card-actions">
          <div>
            <Typography variant="h5" component="h4">
              {ship.name}
            </Typography>
            <Typography variant="h5" component="h4">
              PORT : {ship.home_port}
            </Typography>
          </div>
          <Typography variant="h5" component="h6">
            Roles: {renderRoles()}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
