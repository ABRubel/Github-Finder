import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "bootstrap/dist/css/bootstrap.css";

const useStyles = makeStyles((theme) => ({
   margin: {
      margin: theme.spacing(1),
   },
}));

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
   const classes = useStyles();
   const [text, setText] = useState("");

   const onSubmit = (e) => {
      e.preventDefault();
      if (text === "") {
         setAlert("warning", "Please Enter Something");
      } else {
         searchUsers(text);
         setText("");
      }
   };
   const onChange = (e) => {
      setText(e.target.value);
   };
   return (
      <div className="row mt-2">
         <div
            style={{ justifyContent: "center" }}
            className="offset-md-5 col-md-2 offset-md-5 col-sm-12 mb-5"
         >
            <form onSubmit={onSubmit}>
               <InputLabel htmlFor="input-with-icon-adornment">
                  Search User Name
               </InputLabel>
               <Input
                  onChange={onChange}
                  name="name"
                  id="input-with-icon-adornment"
                  startAdornment={
                     <InputAdornment position="start">
                        <AccountCircle />
                     </InputAdornment>
                  }
               />
               <br />
               <button className="btn btn-sm btn-primary">Search</button>

               {showClear && (
                  <button
                     onClick={clearUsers}
                     className="btn btn-sm btn-secondary float-right"
                  >
                     Clear
                  </button>
               )}
            </form>
         </div>
      </div>
   );
};

// Search.propTypes = {
//    searchUsers: PropTypes.func.isRequired,
//    showClear: PropTypes.func.isRequired,
//    clearUsers: PropTypes.bool.isRequired,
//    setAlert: PropTypes.func.isRequired,
// };
export default Search;
