import React from "react";
import { ModalButton } from "../../../components/Button";
import { Input } from "../../../components/Input";
import {FaPen} from 'react-icons/fa'

function UserEditDeleteCell({ data }) {
  const handleOnClickModal = () => {};
  return (
    <div style={{ display: "flex" }}>
      <ModalButton
        buttonName={<FaPen />}
        modalName="EDIT USER FORM"
        dataBStarget="userEditModal"
        functionButtonName="SAVE"
        handleOnClick={handleOnClickModal}
      >
        {/* Edit User Form */}
        <div className="form-content">
          <form>
            {/* Username */}
            <Input
              label="Username"
              type="text"
              name="username"
              required="required"
            />
            {/* Password */}
            <Input
              label="Password"
              type="password"
              name="password"
              required="required"
            />
            {/* Email */}
            <Input
              label="Email"
              type="email"
              name="email"
              required="required"
            />
          </form>
        </div>
      </ModalButton>
      <button type="button" className="btn btn-danger mx-1">
        X
      </button>
    </div>
  );
}

export default UserEditDeleteCell;
