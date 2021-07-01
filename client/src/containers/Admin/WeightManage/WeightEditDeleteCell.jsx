import React from "react";
import { ModalButton } from "../../../components/Button";
import { Input } from "../../../components/Input";
import {FaPen} from 'react-icons/fa';

function WeightEditDeleteCell({data}) {
  const handleOnClickModal = () => {};
  return (
    <div style={{"display": "flex"}}>
      <ModalButton
        buttonName={<FaPen />}
        modalName="EDIT WEIGHT FORM"
        dataBStarget="weightEditModal"
        functionButtonName="SAVE"
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
          required="required"
          disabled="disabled"/>
          {/* Username */}
          <Input 
          label="Product" 
          type="text" 
          name="product" 
          required="required"/>
          {/* Origin */}
           <Input 
           label="Origin"  
           type="text" 
           name="origin" 
           required="required"/>
          {/* Date */}
          <Input 
          label="Date"  
          type="text" 
          name="date" 
          required="required"/>
          {/* Weight */}
          <Input 
          label="Weight" 
          type="text" 
          name="weight" 
          required="required"/>
        </form>
      </div>
      </ModalButton>
      <button type="button" className="btn btn-danger mx-1">X</button>
    </div>
  );
}

export default WeightEditDeleteCell;
