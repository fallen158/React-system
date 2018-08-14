import React, { Component } from "react";
import HomeLayout from "./HomeLayout";

class BookAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      owner_id: 0
    };
  }
  handleValueChange(filed, value, type = "string") {
    if (type === "number") {
      value = +value;
    }

    this.setState({
      [filed]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state));
    fetch("http://localhost:3000/book", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if(res.id){
            alert('添加图书成功')
        }
      });
  }
  render() {
    const { name, price, owner_id } = this.state;

    return (
      <HomeLayout title="添加图书">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>书名: </label>
          <input
            type="text"
            value={name}
            onChange={e => this.handleValueChange("name", e.target.value)}
          />
          <br />
          <label>价格: </label>
          <input
            type="number"
            value={price}
            onChange={e =>
              this.handleValueChange("price", e.target.value, "number")
            }
          />
          <br />
          <label>所有者: </label>
          <input
            type="text"
            vaue={owner_id}
            onChange={e => this.handleValueChange("owner_id", e.target.value)}
          />
          <br />
          <input type="submit" />
        </form>
      </HomeLayout>
    );
  }
}

export default BookAdd;
