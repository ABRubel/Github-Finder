import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../layout/Navbar";

const About = (props) => {
   return (
      <Fragment>
         <Navbar name="Github Finder" />
         <h1>Md. Abdur Rahaman</h1>
         <h3>EWU</h3>
      </Fragment>
   );
};

export default About;
