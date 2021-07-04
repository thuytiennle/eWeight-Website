import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalButton } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { FaPen } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { actUpdateWeight, actDeleteWeight } from "./module/action";

function WeightEditDeleteCell({ data }) {
  // Dispatch
  const dispatch = useDispatch();

  let dateParts = data.importDate.split("/");

  //Parse string to date
  const [startDate, setStartDate] = useState(
    new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
  );
  const [product, setProduct] = useState({
    id: data.id,
    name: data.name,
    sku: data.sku,
    origin: data.origin,
    importDate: data.importDate,
    weight: data.weight,
  });

  const handleSaveEditForm = () => {
    // Call API to update weight
    dispatch(actUpdateWeight(product));
  };

  const handleDatePick = (date) => {
    setStartDate(date);
    // Format Date to dd/mm/yyyy string
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let importDate = dd + "/" + mm + "/" + yyyy;
    setProduct({
      ...product,
      importDate
    })
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <ModalButton
        buttonName={<FaPen />}
        modalName="EDIT WEIGHT FORM"
        dataBStarget={`weightEditModal-${data.id}`}
        functionButtonName="SAVE"
        handleSaveEditForm={handleSaveEditForm}
        // handleOnClick={handleOnClickModal}
      >
        {/* Edit Weight Form */}
        <div className="form-content">
          {/* ID */}
          <Input
            label="ID"
            type="text"
            name="id"
            disabled="disabled"
            onChange={handleOnChange}
            value={product.id}
          />
          {/* Product name */}
          <Input
            label="Product"
            type="text"
            name="name"
            onChange={handleOnChange}
            value={product.name}
          />
          {/* SKU */}
          <Input
            label="SKU"
            type="text"
            name="sku"
            onChange={handleOnChange}
            value={product.sku}
          />
          {/* Origin */}
          <Input
            label="Origin"
            type="text"
            name="origin"
            onChange={handleOnChange}
            value={product.origin}
          />
          {/* Date */}
          <div className="date-group">
            <label className="date-label" htmlFor="DATE">
              DATE
            </label>
            <DatePicker
              name="importDate"
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={handleDatePick}
              className="date-picker"
            />
          </div>
          {/* Weight */}
          <Input
            label="Weight"
            type="text"
            name="weight"
            onChange={handleOnChange}
            value={product.weight}
          />
        </div>
      </ModalButton>
      <button type="button" className="btn btn-danger mx-1" onClick={()=>{dispatch(actDeleteWeight(data.id))}}>
        X
      </button>
    </div>
  );
}

export default WeightEditDeleteCell;
