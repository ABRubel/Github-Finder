import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      "& > * + *": {
         marginLeft: theme.spacing(2),
      },
   },
}));

export default function Spinner() {
   const classes = useStyles();

   return (
      <div
         className={classes.root}
         className="mt-5"
         style={{ display: "flex", justifyContent: "center" }}
      >
         <CircularProgress />
      </div>
   );
}
