import React from "react";
import { useState } from "react";
import axios from "axios";

function Leftside() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
        alert("service error");
      });
  };
  return (
    <div>
      <form style={{ marginLeft: "50px", marginTop: "100px" }}>
        <h2 style={{ marginLeft: "300px" }}>Welcome Back</h2>
        <p style={{ marginLeft: "330px" }}>sub-titles goes here</p>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleEmail}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>
        <br />

        <button
          type="submit"
          class="btn btn-primary"
          style={{ width: "800px" }}
          onClick={handleApi}
        >
          Login
        </button>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
      </form>
    </div>
  );
}

export default Leftside;
