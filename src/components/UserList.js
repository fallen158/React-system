import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:3000/user")
      .then(res => res.json())
      .then(res => {
        this.setState({
          userList: res
        });
      });
  }
  render() {
    return (
      <div>
        <header>
          <h1>用户列表</h1>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>用户ID</th>
                <th>用户名</th>
                <th>性别</th>
                <th>年龄</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default UserList;
