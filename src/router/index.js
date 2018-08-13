import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Home"; // 导入App组件
import About from "../components/About"; // 导入About组件
import UserAddPage from "../components/UserAdd"


export default class routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/About" component={About} />
          <Route path="/user/add" component={UserAddPage}/>
        </div>
      </Router>
    );
  }
}
