import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./SignIn.scss";
import { Input } from "../../../components/Input";
import { FormButton } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { actSignIn } from "./module/action";

function SignIn() {
  // Create state
  const [user, setUser] = useState({ username: "", password: "" });

  // Get state form store by using useSelector of redux
  const isOpenRegisterForm = useSelector((state) => state.signUpReducer.isOpen);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(actSignIn(user, history));
  };

  return (
    <div
      className={
        isOpenRegisterForm ? "form-panel one hidden" : "form-panel one"
      }
    >
      <Header>Login</Header>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <Input
            label="Username"
            type="text"
            name="username"
            onChange={handleOnChange}
            required="required"
          />
          {/* Password */}
          <Input
            label="Password"
            type="password"
            name="password"
            onChange={handleOnChange}
            required="required"
          />
          {/* <div className="form-group">
            <label className="form-remember">
              <input type="checkbox" />
              Remember Me
            </label>
            <a className="form-recovery" href="#df">
              Forgot Password?
            </a>
          </div> */}
          {/* Submit button */}
          <FormButton type="submit">Log In</FormButton>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
