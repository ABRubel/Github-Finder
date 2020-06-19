import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import "bootstrap/dist/css/bootstrap.css";

export default class SingleUser extends Component {
   render() {
      if (this.props.loading) {
         return <Spinner />;
      }
      return <div className="container">User</div>;
   }
}
