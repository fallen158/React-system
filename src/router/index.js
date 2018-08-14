import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Home"; // 导入App组件
import UserAddPage from "../components/UserAdd";
import UserList from "../components/UserList";
import BookAdd from "../components/BookAdd";
export default class routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/user/add/:id" component={UserAddPage} />
          <Route path="/user/list" component={UserList} />
          <Route path="/book/add" component={BookAdd}></Route>
        </div>
      </Router>
    );
  }
}
