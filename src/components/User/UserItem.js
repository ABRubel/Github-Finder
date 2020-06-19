import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.css";

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 140,
   },
});

export default function UserItem(props) {
   const classes = useStyles();
   const { login, avatar_url, html_url } = props.user;
   return (
      <div className="col-md-4 col-sm-12">
         <Card className={classes.root}>
            <CardActionArea>
               <CardMedia
                  className={classes.media}
                  image={avatar_url}
                  title="Contemplative Reptile"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {login}
                  </Typography>
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Link to={`/user/${login}`}>Share</Link>
            </CardActions>
         </Card>
      </div>
   );
}
