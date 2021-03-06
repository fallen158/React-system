import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeLayout from "./components/HomeLayout";

class Home extends Component {
  render() {
    return (
      <HomeLayout title="Welcome">
        <Link to="/user/list">用户列表</Link>
        <br />
        <Link to="/user/add/1">添加用户</Link>
        <br />
        <Link to="/book/add">添加图书</Link>
      </HomeLayout>
    );
  }
}

export default Home;
