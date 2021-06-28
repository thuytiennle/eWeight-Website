import React from "react";
import { Table } from "../../../components/Table";
import "./WeightManage.scss";
import { columns, data } from "./data";

function WeightManage() {
  const handleFileUpload = () => {};
  return (
    <div className="weight-manage">
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">
          Select .csv
        </label>
        <input
          type="file"
          className="form-control"
          id="inputGroupFile01"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileUpload}
        />
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default WeightManage;
