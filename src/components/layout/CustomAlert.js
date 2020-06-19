import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
      "& > * + *": {
         marginTop: theme.spacing(2),
      },
   },
}));

export default function CustomAlert({ alert }) {
   const classes = useStyles();
   return (
      alert !== null && (
         <div className={classes.root}>
            <Alert severity={alert.type}>{alert.message}</Alert>
         </div>
      )
   );
}
