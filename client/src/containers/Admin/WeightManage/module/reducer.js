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

let initialState = {
  fileUploadSuccess: {},
  uploadError: {},
  listWeight: [],
  getWeightError: {},
  updateWeight: {},
  updateError: {},
  deleteWeight: {},
  deleteError: {},
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
    case UPDATE_WEIGHT_REQUEST:
      state.updateWeight = {};
      state.updateError = null;
      return { ...state };
    case UPDATE_WEIGHT_SUCCESS:
      state.updateWeight = action.data;
      state.updateError = null;
      return { ...state };
    case UPDATE_WEIGHT_FAIL:
      state.updateWeight = {};
      state.updateError = action.err;
      return { ...state };
    case DELETE_WEIGHT_REQUEST:
      state.deleteWeight = {};
      state.deleteError = null;
      return { ...state };
    case DELETE_WEIGHT_SUCCESS:
      state.deleteWeight = action.data;
      state.deleteError = null;
      return { ...state };
    case DELETE_WEIGHT_FAIL:
      state.deleteWeight = {};
      state.deleteError = action.err;
      return { ...state };
    default:
      return { ...state };
  }
};

export default weightManageReducer;
