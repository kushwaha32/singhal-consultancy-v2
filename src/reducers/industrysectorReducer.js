import {
  INDUSTRYSECTOR_CREATE_FAIL,
  INDUSTRYSECTOR_CREATE_REQUEST,
  INDUSTRYSECTOR_CREATE_SUCCESS,
  INDUSTRYSECTOR_DELETE_EMPTY,
  INDUSTRYSECTOR_DELETE_FAIL,
  INDUSTRYSECTOR_DELETE_REQUEST,
  INDUSTRYSECTOR_DELETE_SUCCESS,
  INDUSTRYSECTOR_FAIL,
  INDUSTRYSECTOR_REQUEST,
  INDUSTRYSECTOR_SUCCESS,
  INDUSTRYSECTOR_UPDATE_EMPTY,
  INDUSTRYSECTOR_UPDATE_FAIL,
  INDUSTRYSECTOR_UPDATE_REQUEST,
  INDUSTRYSECTOR_UPDATE_SUCCESS,
} from "../constants/industrysectorConstant";

export const industrysectorReducer = (
  state = { industrysectorAll: [] },
  action
) => {
  switch (action.type) {
    case INDUSTRYSECTOR_REQUEST:
      return { loading: true, industrysectorAll: [] };
    case INDUSTRYSECTOR_SUCCESS:
      return { loading: false, industrysectorAll: action.payload };
    case INDUSTRYSECTOR_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const industrysectorCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case INDUSTRYSECTOR_CREATE_REQUEST:
      return { loading: true };

    case INDUSTRYSECTOR_CREATE_SUCCESS:
      return { loading: false, industrysector: action.payload };
    case INDUSTRYSECTOR_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const industrysectorUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case INDUSTRYSECTOR_UPDATE_REQUEST:
      return { loading: true };
    case INDUSTRYSECTOR_UPDATE_EMPTY:
      return { loading: false, industrysectorUpdate: [] };
    case INDUSTRYSECTOR_UPDATE_SUCCESS:
      return { loading: false, industrysectorUpdate: action.payload };
    case INDUSTRYSECTOR_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const industrysectorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case INDUSTRYSECTOR_DELETE_REQUEST:
      return { delet_loading: true };
    case INDUSTRYSECTOR_DELETE_EMPTY:
      return { delete_loading: false, industrysectorDelete: [] };
    case INDUSTRYSECTOR_DELETE_SUCCESS:
      return {
        delete_loading: false,
        industrysectorDelete: action.payload,
      };
    case INDUSTRYSECTOR_DELETE_FAIL:
      return { delete_loading: false, error: action.payload };
    default:
      return state;
  }
};
