import React, { useState } from "react";
import { ModalButton } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { FaPen } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function WeightEditDeleteCell({ data }) {
  let dateParts = data.importDate.split("/");

  //Parse string to date
  const [startDate, setStartDate] = useState(new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]));
  const [product, setProduct] = useState({
    id: data.id,
    name: data.name,
    sku: data.sku,
    origin: data.origin,
    importDate: data.importDate,
    weight: data.weight,
  });

  const handClickPopUpModal = () =>{
    // // Reset product value
    // setProduct({

    // });
  }

  const handleOnClickModal = (event) => {
    event.preventDefault();
    // Format Date to dd/mm/yyyy string
    let dd = startDate.getDate();
    let mm = startDate.getMonth() + 1;
    let yyyy = startDate.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let date = dd + '/' + mm + '/' + yyyy;

    setProduct({
      ...product,
      importDate: date,
    });
    console.log(product);
  };

  const handleDatePick = (date) => {
    // console.log(date);
    setStartDate(date);
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
        handClickPopUpModal = {handClickPopUpModal}
        handleOnClick={handleOnClickModal}
      >
        {/* Edit Weight Form */}
        <div className="form-content">
          <form>
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
          </form>
        </div>
      </ModalButton>
      <button type="button" className="btn btn-danger mx-1">
        X
      </button>
    </div>
  );
}

export default WeightEditDeleteCell;
