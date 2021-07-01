import {
  UPDATE_WEIGHT,
  GET_LIST_WEIGHT_REQUEST,
  GET_LIST_WEIGHT_SUCCESS,
  GET_LIST_WEIGHT_FAIL,
  ADD_WEIGHT_REQUEST,
  ADD_WEIGHT_SUCCESS,
  ADD_WEIGHT_FAIL,
  DELETE_WEIGHT,
} from "./constant";

let initialState = {
  fileUploadSuccess: {},
  uploadError: null,
  listWeight: {},
  getWeightError: null,
};

const weightManageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEIGHT_REQUEST:
      state.fileUploadSuccess = {};
      state.uploadError = null;
      return { ...state };
    case ADD_WEIGHT_SUCCESS:
      state.fileUploadSuccess = action.data;
      state.uploadError = null;
      return { ...state };
    case ADD_WEIGHT_FAIL:
      state.fileUploadSuccess = {};
      state.uploadError = action.err;
      return { ...state };
    case GET_LIST_WEIGHT_REQUEST:
      state.listWeight = {};
      state.getWeightError = null;
      return { ...state };
    case GET_LIST_WEIGHT_SUCCESS:
      state.listWeight = action.data;
      state.getWeightError = null;
      return { ...state };
    case GET_LIST_WEIGHT_FAIL:
      state.listWeight = {};
      state.getWeightError = action.err;
      return { ...state };
    case UPDATE_WEIGHT:
      return { ...state };
    case DELETE_WEIGHT:
      return { ...state };
    default:
      return { ...state };
  }
};

export default weightManageReducer;
