import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CustomAlert from "./components/layout/CustomAlert";
import User from "./components/User/User";
import SingleUser from "./components/User/SingleUser";
import Search from "./components/User/Search";
import About from "./components/pages/About";
import axios from "axios";

export default class App extends Component {
   state = {
      users: [],
      user: {},
      loading: false,
      alert: null,
   };
   async componentDidMount() {
      this.setState({ loading: true });
      const res = await axios.get(
         `https://api.github.com/users?since=135&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
         []
      );
      this.setState({ users: res.data });
      this.setState({ loading: false });
   }
   searchUsers = async (text) => {
      this.setState({ loading: true });
      const res = await axios.get(
         `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
         []
      );
      this.setState({ users: res.data.items });
      this.setState({ loading: false });
   };
   getUser = async (username) => {
      this.setState({ loading: true });
      const res = await axios.get(
         `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data });
      this.setState({ loading: false });
   };
   clearUsers = () => {
      // setUsers([]);
      // setLoading(false);
      this.setState({ users: [] });
   };
   setAlert = (type, message) => {
      // setUsers([]);
      // setLoading(false);
      this.setState({ loading: true });
      this.setState({ alert: { type, message } });
      this.setState({ loading: false });
   };
   render() {
      const { users, user, loading } = this.state;
      return (
         <Router>
            <Switch>
               <Route
                  exact
                  path="/"
                  render={(props) => (
                     <Fragment>
                        <Navbar name="Github Finder" />
                        <CustomAlert alert={this.state.alert} />
                        <Search
                           searchUsers={this.searchUsers}
                           clearUsers={this.clearUsers}
                           showClear={
                              this.state.users.length > 0 ? true : false
                           }
                           setAlert={this.setAlert}
                        />
                        <User
                           loading={this.state.loading}
                           users={this.state.users}
                        />
                     </Fragment>
                  )}
               ></Route>
               <Route exact path="/about" component={About} />
               <Route
                  exact
                  path="/user:login"
                  render={(props) => (
                     <SingleUser
                        {...props}
                        getUser={this.getUser}
                        user={user}
                        loading={loading}
                     />
                  )}
               />
            </Switch>
         </Router>
      );
   }
}

// import React, { Fragment, useState } from "react";
// import PropTypes from "prop-types";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import CustomAlert from "./components/layout/CustomAlert";
// import User from "./components/User/User";
// import Search from "./components/User/Search";
// import About from "./components/pages/About";
// import axios from "axios";

// const App = () => {
//    const [users, setUsers] = useState([]);
//    const [user, setUser] = useState({});
//    const [repos, setRepos] = useState([]);
//    const [loading, setLoading] = useState(false);
//    const [alert, setAlert] = useState(null);

//    // Search GitHub users
//    const searchUsers = async (text) => {
//       setLoading(true);
//       const res = await axios.get(
//          `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//       );
//       setUsers(res.data.items);
//       setLoading(false);
//    };
//    // Search Single GitHub user
//    const getUsers = async (username) => {
//       setLoading(true);
//       const res = await axios.get(
//          `https://api.github.com/users/${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//       );
//       setUser(res.data);
//       setLoading(false);
//    };
//    // Get User Repos
//    const getUserRepos = async (username) => {
//       setLoading(true);
//       const res = await axios.get(
//          `https://api.github.com/users/${username}/repos?per+page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//       );
//       setRepos(res.data);
//       setLoading(false);
//    };
//    // Clear user from state
//    const clearUsers = () => {
//       setUsers([]);
//       setLoading(false);
//    };
//    return (
//       <Router>
//          <CustomAlert />
//          <Switch>
//             <Route
//                exact
//                path="/"
//                render={(props) => (
//                   <Fragment>
//                      <Navbar name="Github Finder" />
//                      <Search
//                         searchUsers={searchUsers}
//                         clearUsers={clearUsers}
//                         showClear={users.length > 0 ? true : false}
//                         setAlert={setAlert}
//                      />
//                      <User loading={loading} users={users} />
//                   </Fragment>
//                )}
//             ></Route>
//             <Route exact path="/about" component={About}></Route>
//          </Switch>
//       </Router>
//    );
// };
// User.prototype = {
//    searchUsers: PropTypes.func.isRequired,
//    clearUsers: PropTypes.func.isRequired,
//    showClear: PropTypes.bool.isRequired,
// };
// export default App;
