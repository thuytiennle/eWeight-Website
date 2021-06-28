import React from "react";
import { Table } from "../../../components/Table";
import { columns, data } from "./data";
import { ModalButton } from "../../../components/Button";
import { Input } from "../../../components/Input";

function UserManage() {
  const handleOnClickModal = () => {};
  return (
    <div className="user-manage">
      <div style={{"display": "flex", "justifyContent": "flex-start"}}>
        <ModalButton
          buttonName="ADD NEW USER"
          buttonColor="info"
          modalName="ADD USER FORM"
          dataBStarget="userAddModal"
          functionButtonName="ADD"
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
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default UserManage;
