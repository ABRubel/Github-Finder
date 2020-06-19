import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import "bootstrap/dist/css/bootstrap.css";

export default class User extends Component {
   render() {
      if (this.props.loading) {
         return <Spinner />;
      }
      return (
         <div className="container">
            <div className="row mt-2">
               {this.props.users.map((user) => (
                  <UserItem key={user.id} user={user} />
               ))}
            </div>
         </div>
      );
   }
}

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import UserItem from "./UserItem";
// import Spinner from "../layout/Spinner";
// import "bootstrap/dist/css/bootstrap.css";

// const User = ({ users, loading, getUser, getRepos, repos, match }) => {
//    useEffect(() => {
//       getUser(match.params.login);
//       getRepos(match.params.login);
//    }, []);
//    if (loading) {
//       return <Spinner />;
//    }
//    return (
//       <div className="container">
//          <div className="row mt-2">
//             {users.map((user) => (
//                <UserItem key={user.id} user={user} />
//             ))}
//          </div>
//       </div>
//    );
// };
// User.propTypes = {
//    loading: PropTypes.bool,
//    user: PropTypes.object.isRequired,
//    repos: PropTypes.array.isRequired,
//    getUser: PropTypes.func.isRequired,
//    getRepos: PropTypes.func.isRequired,
// };
// export default User;
