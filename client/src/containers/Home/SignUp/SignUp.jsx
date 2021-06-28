import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {actOpenRegisterForm} from './module/action';
import './SignUp.scss';
import {Input} from '../../../components/Input';
import {FormButton} from '../../../components/Button';
import {Header} from '../../../components/Header';

function SignUp() {
  // Get state form store by using useSelector of redux
  const isOpenRegisterForm = useSelector(
    (state) => state.signUpReducer.isOpen,
  );
  
  
  // Use for dispatch action to store
  const dispatch = useDispatch();
  return (
    <div className={isOpenRegisterForm?"form-panel two active":"form-panel two"} onClick={()=>dispatch(actOpenRegisterForm(true))}>
      <Header headerClass="headerTwo">Register</Header>
      <div className="form-content">
        <form>
          {/* Username */}
          <Input 
          label="Username" 
          labelClass="labelTwo" 
          inputClass="inputTwo" 
          type="text" 
          id="username" 
          name="username" 
          required="required"/>
          {/* Password */}
           <Input 
           label="Password"  
           labelClass="labelTwo" 
           inputClass="inputTwo" 
           type="password" 
           id="password" 
           name="password" 
           required="required"/>
          {/* Confirm Password */}
          <Input 
          label="Confirm Password"  
          labelClass="labelTwo" 
          inputClass="inputTwo" 
          type="password" 
          id="cpassword" 
          name="cpassword" 
          required="required"/>
          {/* Email */}
          <Input 
          label="Email" 
          labelClass="labelTwo" 
          inputClass="inputTwo" 
          type="email" id="email" 
          name="email" 
          required="required"/>
          {/* Submit button */}
           <FormButton buttonClass="buttonTwo" type="submit">Register</FormButton>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
