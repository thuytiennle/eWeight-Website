import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "../../../components/Table";
import "./WeightManage.scss";
import { columns, data } from "./columns";
import { actAddWeight, actGetListWeight } from "./module/action";
import { Alert } from "../../../components/Alert";

function WeightManage() {
  const dispatch = useDispatch();
  //Create state
  const [file, setFile] = useState(null);

  // Get state from redux stores
  const fileUploadSuccess = useSelector(
    (state) => state.weightManageReducer.fileUploadSuccess
  );
  const uploadError = useSelector(
    (state) => state.weightManageReducer.uploadError
  );
  const listWeight = useSelector(
    (state) => state.weightManageReducer.listWeight
  );

  //ComponentDidMount
  useEffect(() => {
    dispatch(actGetListWeight());
  }, [dispatch]);


  const handleFileUpload = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  const handleSubmitFileUpload = () => {
    let formData = new FormData();
    formData.append("file", file, file.name);
    console.log(formData);
    // Push to action to call API
    dispatch(actAddWeight(formData));
  };

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
        <button className="btn btn-info" onClick={handleSubmitFileUpload}>
          Upload
        </button>
      </div>
      {/* <div className="alert alert-success">{fileUploadSuccess.status}</div> */}
      {fileUploadSuccess && fileUploadSuccess.length > 0 && (
        <Alert variant="success">{fileUploadSuccess.message}</Alert>
      )}
      {uploadError && uploadError.length > 0 && (
        <Alert variant="danger">{uploadError.message}</Alert>
      )}
      {/* if have rows */}
      {listWeight && listWeight.data && listWeight.data.rows ? <Table columns={columns} data={listWeight.data.rows} />:  <Table columns={columns} data={data} />}
    </div>
  );
}

export default WeightManage;
