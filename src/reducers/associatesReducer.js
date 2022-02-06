import {
  ASSOCIATES_CREATE_FAIL,
  ASSOCIATES_CREATE_REQUEST,
  ASSOCIATES_CREATE_SUCCESS,
  ASSOCIATES_DELETE_EMPTY,
  ASSOCIATES_DELETE_FAIL,
  ASSOCIATES_DELETE_REQUEST,
  ASSOCIATES_DELETE_SUCCESS,
  ASSOCIATES_FAIL,
  ASSOCIATES_REQUEST,
  ASSOCIATES_SUCCESS,
  ASSOCIATES_UPDATE_EMPTY,
  ASSOCIATES_UPDATE_FAIL,
  ASSOCIATES_UPDATE_REQUEST,
  ASSOCIATES_UPDATE_SUCCESS,
} from "../constants/associatesConstant";

export const associatesReducer = (state = { associatesAll: [] }, action) => {
  switch (action.type) {
    case ASSOCIATES_REQUEST:
      return { loading: true, associatesAll: [] };
    case ASSOCIATES_SUCCESS:
      return { loading: false, associatesAll: action.payload };
    case ASSOCIATES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const associatesCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSOCIATES_CREATE_REQUEST:
      return { loading: true };

    case ASSOCIATES_CREATE_SUCCESS:
      return { loading: false, associates: action.payload };
    case ASSOCIATES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const associatesUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSOCIATES_UPDATE_REQUEST:
      return { loading: true };
    case ASSOCIATES_UPDATE_EMPTY:
      return { loading: false, associatesUpdate: [] };
    case ASSOCIATES_UPDATE_SUCCESS:
      return { loading: false, associatesUpdate: action.payload };
    case ASSOCIATES_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const associatesDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSOCIATES_DELETE_REQUEST:
      return { delet_loading: true };
    case ASSOCIATES_DELETE_EMPTY:
      return { delete_loading: false, associatesDelete: [] };
    case ASSOCIATES_DELETE_SUCCESS:
      return { delete_loading: false, associatesDelete: action.payload };
    case ASSOCIATES_DELETE_FAIL:
      return { delete_loading: false, error: action.payload };
    default:
      return state;
  }
};
