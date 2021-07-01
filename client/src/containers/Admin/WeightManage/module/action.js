import {
  UPDATE_WEIGHT,
  GET_LIST_WEIGHT_REQUEST,
  GET_LIST_WEIGHT_SUCCESS,
  GET_LIST_WEIGHT_FAIL,
  DELETE_WEIGHT,
  ADD_WEIGHT_REQUEST,
  ADD_WEIGHT_SUCCESS,
  ADD_WEIGHT_FAIL,
} from "./constant";
import Axios from 'axios';

export const actAddWeight = (weightFile) => {
  return dispatch => {
    dispatch(actAddWeightRequest());
    Axios({
        method: "POST",
        url: `http://localhost:8080/api/product/upload`,
        data: weightFile,
        headers: { "Content-Type": "form-data" },
    })
    .then(result =>{
        dispatch(actAddWeightSuccess(result.data));
        console.log(result.data);
    })
    .catch(err=>{
        dispatch(actAddWeightFailed(err));
    })
  }
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
  return dispatch => {
    dispatch(actGetListWeightRequest());
    Axios({
        method: "GET",
        url: `http://localhost:8080/api/product`,
    })
    .then(result =>{
        dispatch(actGetListWeightSuccess(result.data));
    })
    .catch(err=>{
        dispatch(actGetListWeightFailed(err));
    })
  }
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

export const actUpdateWeight = (updateWeight) => {
  return {
    type: UPDATE_WEIGHT,
    data: updateWeight,
  };
};

export const actDeleteWeight = (id) => {
  return {
    type: DELETE_WEIGHT,
    data: id,
  };
};
