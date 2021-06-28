import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actOpenRegisterForm } from "./SignUp/module/action";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import {Header} from "../../components/Header";
import "./HomePage.scss";

// Pass ref from father component (Homepage) to children one (SignUp) to dom
// const SignUpWithRef = React.forwardRef((ref)=> (<SignUp ref={ref}/>));

function HomePage() {
  // Create ref
  const formRef = useRef();

  // Get state form store by using useSelector of redux
  const isOpenRegisterForm = useSelector((state) => state.signUpReducer.isOpen);

  // Use for dispatch action to store
  const dispatch = useDispatch();

  return (
    <div className="form-cover">
      <Header id="logo"><span id="sub-logo">E</span>Weight</Header>
      <div
        style={{ height: isOpenRegisterForm ? 590 : 470 }}
        ref={formRef}
        className="form"
      >
        <div
          className={isOpenRegisterForm ? "form-toggle visible" : "form-toggle"}
          onClick={() => dispatch(actOpenRegisterForm(false))}
        ></div>
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}

export default HomePage;
