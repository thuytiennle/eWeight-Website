import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "../../../components/Table";
import "./WeightManage.scss";
import { columns } from "./columns";
import { actAddWeight, actGetListWeight } from "./module/action";
import { useAlert } from "react-alert";
import {FaDownload} from 'react-icons/fa';
import ExcelJS  from 'exceljs';
import saveAs from "file-saver";

const isEmptyObject = (object) =>{
  return Object.keys(object).length === 0 && object.constructor === Object;
}


function WeightManage() {
  const dispatch = useDispatch();
  const alert  = useAlert();
  //Create state
  const [file, setFile] = useState(null);

  // Get state from redux stores
  const listWeight = useSelector(
    (state) => state.weightManageReducer.listWeight
  );
  const fileUploadSuccess = useSelector(
    (state) => state.weightManageReducer.fileUploadSuccess
  );
  const uploadError = useSelector(
    (state) => state.weightManageReducer.uploadError
  );
  const updateWeight = useSelector(
    (state) => state.weightManageReducer.updateWeight
  );
  const updateError = useSelector(
    (state) => state.weightManageReducer.updateError
  );
  const deleteWeight = useSelector(
    (state) => state.weightManageReducer.deleteWeight
  );
  const deleteError = useSelector(
    (state) => state.weightManageReducer.deleteError
  );

  //ComponentDidMount
  useEffect(() => {
    dispatch(actGetListWeight());
  }, [dispatch]);

  // Component update Alert
  useEffect(() => {
    if(fileUploadSuccess && !isEmptyObject(fileUploadSuccess)){
      alert.success("Upload file successfully!");
    }
  }, [fileUploadSuccess, alert])

  useEffect(() => {
    if(uploadError && !isEmptyObject(uploadError)){
      alert.error(`Upload file failed! ${uploadError.message}`);
    }
  }, [uploadError, alert])

  useEffect(() => {
    if(updateWeight && !isEmptyObject(updateWeight)){
      alert.success("Update successfully!");
    }
  }, [updateWeight, alert])

  useEffect(() => {
    if(updateError && !isEmptyObject(updateError)){
      alert.error(`Update failed! ${updateError.message}`);
    }
  }, [updateError, alert])

  useEffect(() => {
    if(deleteWeight && !isEmptyObject(deleteWeight)){
      alert.success("Delete successfully!");
    }
  }, [deleteWeight, alert])

  useEffect(() => {
    if(deleteError && !isEmptyObject(deleteError)){
      alert.error(`Upload file failed! ${deleteError.message}`);
    }
  }, [deleteError, alert])
  //==========================================================//


  const handleFileUpload = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  const handleSubmitFileUpload = () => {
    let formData = new FormData();
    formData.append("file", file);
    // Push to action to call API
    dispatch(actAddWeight(formData));
  };
  // console.log(rows);

  // Excel download click
  const handleDownloadClick = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');

    worksheet.columns = [
      { header: 'Product Id', key: 'id', width: 15 },
      { header: 'Product Name', key: 'name', width: 30 },
      { header: 'SKU', key: 'sku', width: 15 },
      { header: 'Origin', key: 'origin', width: 30 },
      { header: 'Date', key: 'importDate', width: 15 },
      { header: 'Weight', key: 'weight', width: 15 },
      { header: 'QR Code', key: 'qrCode', width: 50 },
    ];

    // If listWeight.data.rows has element
    if(listWeight && listWeight.data && listWeight.data.rows && listWeight.data.rows.length> 0){
      listWeight.data.rows.forEach((row, index) => {
        let copyRow = {...row};
        delete copyRow.qrCode;
        worksheet.addRow(copyRow);
        const imageId = workbook.addImage({
          base64: row.qrCode,
          extension: 'png',
        });
        worksheet.addImage(imageId, {
          tl: { col: 6.1, row: index + 1.1 },
          ext: { width: 100, height: 100 }
        });
      });
      // Change worksheet row height 
      for(let i=2; i <= listWeight.data.rows.length+1; i++){
        worksheet.getRow(i).height = 110;
      }
    };

    workbook.xlsx.writeBuffer().then(function(buffer) {
      saveAs(new Blob([buffer], { type: "application/octet-stream" }), "WeightData.xlsx");
    });

  }


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
      <div style={{"display":"flex", "justifyContent": "flex-end"}}>
        <div className="btn" onClick={handleDownloadClick}><FaDownload fontSize="1.2rem"/></div> 
      </div>
      {/* if have rows */}
      {listWeight && listWeight.data && (
        <Table columns={columns} data={listWeight.data.rows} />
      )}
    </div>
  );
}

export default WeightManage;
