import {
  PARTNERS_CREATE_FAIL,
  PARTNERS_CREATE_REQUEST,
  PARTNERS_CREATE_SUCCESS,
  PARTNERS_DELETE_EMPTY,
  PARTNERS_DELETE_FAIL,
  PARTNERS_DELETE_REQUEST,
  PARTNERS_DELETE_SUCCESS,
  PARTNERS_FAIL,
  PARTNERS_REQUEST,
  PARTNERS_SUCCESS,
  PARTNERS_UPDATE_EMPTY,
  PARTNERS_UPDATE_FAIL,
  PARTNERS_UPDATE_REQUEST,
  PARTNERS_UPDATE_SUCCESS,
} from "../constants/partnersConstant";

export const partnersReducer = (state = { partnersAll: [] }, action) => {
  switch (action.type) {
    case PARTNERS_REQUEST:
      return { loading: true, partnersAll: [] };
    case PARTNERS_SUCCESS:
      return { loading: false, partnersAll: action.payload };
    case PARTNERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const partnersCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTNERS_CREATE_REQUEST:
      return { loading: true };

    case PARTNERS_CREATE_SUCCESS:
      return { loading: false, partners: action.payload };
    case PARTNERS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const partnersUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTNERS_UPDATE_REQUEST:
      return { loading: true };
    case PARTNERS_UPDATE_EMPTY:
      return { loading: false, partnersUpdate: [] };
    case PARTNERS_UPDATE_SUCCESS:
      return { loading: false, partnersUpdate: action.payload };
    case PARTNERS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const partnersDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTNERS_DELETE_REQUEST:
      return { delet_loading: true };
    case PARTNERS_DELETE_EMPTY:
      return { delete_loading: false, partnersDelete: [] };
    case PARTNERS_DELETE_SUCCESS:
      return { delete_loading: false, partnersDelete: action.payload };
    case PARTNERS_DELETE_FAIL:
      return { delete_loading: false, error: action.payload };
    default:
      return state;
  }
};
