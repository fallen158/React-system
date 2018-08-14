import React, { Component } from "react";
import HomeLayout from "./HomeLayout";
class UserAdd extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: {
          vaild: false,
          value: "",
          error: ""
        },
        age: {
          vaild: false,
          value: "",
          error: ""
        },
        gender: {
          vaild: false,
          value: "",
          error: ""
        }
      }
    };
  }
  handleSumbit(e) {
    e.preventDefault();

    const {
      form: { name, age, gender }
    } = this.state;
    if (name.valid === false || age.vaild === false || gender.vaild === false) {
      alert("请输入正确消息后重试");
      return;
    }

    fetch("http://localhost:3000/user", {
      method: "post",
      body: JSON.stringify({
        name: name.value,
        age: age.value,
        gender: gender.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.id) {
          alert("添加用户成功");
          this.props.history.push("/user/list");
          return;
        } else {
          alert("添加失败");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleValueChange(field, value, type = "string") {
    if (type === "number") {
      value = +value;
    }

    const { form } = this.state;
    const newFieldObj = { value, vaild: true, error: "" };
    switch (field) {
      case "name":
        if (value.length > 4) {
          newFieldObj.error = "请输入1~100之间的数字";
          newFieldObj.vaild = false;
        }
        break;
      case "age":
        if (value > 100 || value <= 0) {
          newFieldObj.error = "请输入用户名";
          newFieldObj.vaild = false;
        }
        break;
      case "gender":
        if (!value) {
          newFieldObj.error = "请选择性别";
          newFieldObj.vaild = false;
        }
        break;
      default:
        break;
    }
    this.setState({
      form: {
        ...form,
        [field]: newFieldObj
      }
    });
  }
  render() {
    const {
      form: { name, age, gender }
    } = this.state;
    return (
      <HomeLayout title="添加用户">
        <form onSubmit={e => this.handleSumbit(e)}>
          <div className="row">
            <label>用户名：</label>
            <input
              type="text"
              value={name.value}
              onChange={e => this.handleValueChange("name", e.target.value)}
            />
            {!name.vaild && <span>{name.error}</span>}
          </div>
          <div className="row">
            <label>年龄：</label>
            <input
              type="number"
              value={age.value}
              onChange={e =>
                this.handleValueChange("age", e.target.value, "number")
              }
            />
            {!age.vaild && <span>{age.error}</span>}
          </div>
          <div className="row">
            <label>性别：</label>
            <select
              value={gender.value}
              onChange={e => this.handleValueChange("gender", e.target.value)}
            >
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
            {!gender.vaild && <span>{gender.error}</span>}
          </div>
          <input type="submit" value="提交" />
        </form>
      </HomeLayout>
    );
  }
}

export default UserAdd;
