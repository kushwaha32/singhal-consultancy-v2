import {
  THEFIRM_SUCCESS,
  THEFIRM_FAIL,
  THEFIRM_REQUEST,
  THEFIRM_CREATE_REQUEST,
  THEFIRM_CREATE_SUCCESS,
  THEFIRM_CREATE_FAIL,
  THEFIRM_UPDATE_REQUEST,
  THEFIRM_UPDATE_SUCCESS,
  THEFIRM_UPDATE_FAIL,
  THEFIRM_UPDATE_EMPTY,
  THEFIRM_DELETE_REQUEST,
  THEFIRM_DELETE_EMPTY,
  THEFIRM_DELETE_SUCCESS,
  THEFIRM_DELETE_FAIL,
} from "../constants/thefirmConstant";

export const thefirmReducer = (state = { thefirmAll: [] }, action) => {
  switch (action.type) {
    case THEFIRM_REQUEST:
      return { loading: true, thefirmAll: [] };
    case THEFIRM_SUCCESS:
      return { loading: false, thefirmAll: action.payload };
    case THEFIRM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const thefirmCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case THEFIRM_CREATE_REQUEST:
      return { loading: true };

    case THEFIRM_CREATE_SUCCESS:
      return { loading: false, thefirm: action.payload };
    case THEFIRM_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const thefirmUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case THEFIRM_UPDATE_REQUEST:
      return { loading: true };
    case THEFIRM_UPDATE_EMPTY:
      return { loading: false, thefirmUpdate: [] };
    case THEFIRM_UPDATE_SUCCESS:
      return { loading: false, thefirmUpdate: action.payload };
    case THEFIRM_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const thefirmDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case THEFIRM_DELETE_REQUEST:
      return { delet_loading: true };
    case THEFIRM_DELETE_EMPTY:
      return { delete_loading: false, thefirmDelete: [] };
    case THEFIRM_DELETE_SUCCESS:
      return { delete_loading: false, thefirmDelete: action.payload };
    case THEFIRM_DELETE_FAIL:
      return { delete_loading: false, error: action.payload };
    default:
      return state;
  }
};
