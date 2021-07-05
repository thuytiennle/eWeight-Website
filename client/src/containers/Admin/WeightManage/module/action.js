import {
  UPDATE_WEIGHT_REQUEST,
  UPDATE_WEIGHT_SUCCESS,
  UPDATE_WEIGHT_FAIL,
  GET_LIST_WEIGHT_REQUEST,
  GET_LIST_WEIGHT_SUCCESS,
  GET_LIST_WEIGHT_FAIL,
  DELETE_WEIGHT_REQUEST,
  DELETE_WEIGHT_SUCCESS,
  DELETE_WEIGHT_FAIL,
  ADD_WEIGHT_REQUEST,
  ADD_WEIGHT_SUCCESS,
  ADD_WEIGHT_FAIL,
} from "./constant";
import Axios from "axios";

export const actAddWeight = (weightFile) => {
  return async (dispatch) => {
    dispatch(actAddWeightRequest());
    try{
      const uploadFile = await Axios({
        method: "post",
        url: `http://localhost:8080/api/product/upload`,
        data: weightFile ? weightFile : null,
        headers: { "Content-Type": "form-data" },
      })
  
      dispatch(actAddWeightSuccess(uploadFile.data));

      // Get list Weight
      const listWeight = await Axios({
        method: "GET",
        url: `http://localhost:8080/api/product`,
      });
      // Push value to store
      dispatch(actGetListWeightSuccess(listWeight.data));

    }catch(err){
      dispatch(actAddWeightFailed(err));
    }
  };
};

export const actAddWeightRequest = () => {
  return {
    type: ADD_WEIGHT_REQUEST,
  };
};

export const actAddWeightSuccess = (data) => {
  return {
    type: ADD_WEIGHT_SUCCESS,
    data,
  };
};

export const actAddWeightFailed = (err) => {
  return {
    type: ADD_WEIGHT_FAIL,
    err,
  };
};

export const actGetListWeight = () => {
  return (dispatch) => {
    dispatch(actGetListWeightRequest());
    Axios({
      method: "GET",
      url: `http://localhost:8080/api/product`,
    })
      .then((result) => {
        dispatch(actGetListWeightSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetListWeightFailed(err));
      });
  };
};

export const actGetListWeightRequest = () => {
  return {
    type: GET_LIST_WEIGHT_REQUEST,
  };
};

export const actGetListWeightSuccess = (data) => {
  return {
    type: GET_LIST_WEIGHT_SUCCESS,
    data,
  };
};

export const actGetListWeightFailed = (err) => {
  return {
    type: GET_LIST_WEIGHT_FAIL,
    err,
  };
};

export const actUpdateWeight = (product) => {
  return async (dispatch) => {
    dispatch(actUpdateWeightRequest());
    try {
      // Update first
      const updateResult = await Axios({
        method: "PUT",
        url: `http://localhost:8080/api/product/${product.id}`,
        data: product,
      });
      // Push value to store
      dispatch(actUpdateWeightSuccess(updateResult.data));
      // Get list Weight
      const listWeight = await Axios({
        method: "GET",
        url: `http://localhost:8080/api/product`,
      });
      // Push value to store
      dispatch(actGetListWeightSuccess(listWeight.data));
    } catch (err) {
      dispatch(actUpdateWeightFailed(err));
    }
  };
};

export const actUpdateWeightRequest = () => {
  return {
    type: UPDATE_WEIGHT_REQUEST,
  };
};

export const actUpdateWeightSuccess = (data) => {
  return {
    type: UPDATE_WEIGHT_SUCCESS,
    data,
  };
};

export const actUpdateWeightFailed = (err) => {
  return {
    type: UPDATE_WEIGHT_FAIL,
    err,
  };
};

export const actDeleteWeight = (id) => {
  return async (dispatch) => {
    dispatch(actDeleteWeightRequest());
    try {
      // Update first
      const deleteResult = await Axios({
        method: "DELETE",
        url: `http://localhost:8080/api/product/${id}`
      });
      // Push value to store
      dispatch(actDeleteWeightSuccess(deleteResult.data));
      // Get list Weight
      const listWeight = await Axios({
        method: "GET",
        url: `http://localhost:8080/api/product`,
      });
      // Push value to store
      dispatch(actGetListWeightSuccess(listWeight.data));
    } catch (err) {
      dispatch(actDeleteWeightFailed(err));
    }
  };
};

export const actDeleteWeightRequest = () => {
  return {
    type: DELETE_WEIGHT_REQUEST,
  };
};

export const actDeleteWeightSuccess = (data) => {
  return {
    type: DELETE_WEIGHT_SUCCESS,
    data,
  };
};

export const actDeleteWeightFailed = (err) => {
  return {
    type: DELETE_WEIGHT_FAIL,
    err,
  };
};
