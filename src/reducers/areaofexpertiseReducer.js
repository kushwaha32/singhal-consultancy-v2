import {
  AREAOFEXPERTISE_SUCCESS,
  AREAOFEXPERTISE_FAIL,
  AREAOFEXPERTISE_REQUEST,
  AREAOFEXPERTISE_CREATE_REQUEST,
  AREAOFEXPERTISE_CREATE_SUCCESS,
  AREAOFEXPERTISE_CREATE_FAIL,
  AREAOFEXPERTISE_UPDATE_REQUEST,
  AREAOFEXPERTISE_UPDATE_SUCCESS,
  AREAOFEXPERTISE_UPDATE_FAIL,
  AREAOFEXPERTISE_UPDATE_EMPTY,
  AREAOFEXPERTISE_DELETE_REQUEST,
  AREAOFEXPERTISE_DELETE_EMPTY,
  AREAOFEXPERTISE_DELETE_SUCCESS,
  AREAOFEXPERTISE_DELETE_FAIL,
} from "../constants/areaofexpertiseConstant";

export const areaofexpertiseReducer = (
  state = { areaofexpertiseAll: [] },
  action
) => {
  switch (action.type) {
    case AREAOFEXPERTISE_REQUEST:
      return { loading: true, areaofexpertiseAll: [] };
    case AREAOFEXPERTISE_SUCCESS:
      return { loading: false, areaofexpertiseAll: action.payload };
    case AREAOFEXPERTISE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const areaofexpertiseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case AREAOFEXPERTISE_CREATE_REQUEST:
      return { loading: true };

    case AREAOFEXPERTISE_CREATE_SUCCESS:
      return { loading: false, areaofexpertise: action.payload };
    case AREAOFEXPERTISE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const areaofexpertiseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case AREAOFEXPERTISE_UPDATE_REQUEST:
      return { loading: true };
    case AREAOFEXPERTISE_UPDATE_EMPTY:
      return { loading: false, areaofexpertiseUpdate: [] };
    case AREAOFEXPERTISE_UPDATE_SUCCESS:
      return { loading: false, areaofexpertiseUpdate: action.payload };
    case AREAOFEXPERTISE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const areaofexpertiseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case AREAOFEXPERTISE_DELETE_REQUEST:
      return { delet_loading: true };
    case AREAOFEXPERTISE_DELETE_EMPTY:
      return { delete_loading: false, areaofexpertiseDelete: [] };
    case AREAOFEXPERTISE_DELETE_SUCCESS:
      return {
        delete_loading: false,
        areaofexpertiseDelete: action.payload,
      };
    case AREAOFEXPERTISE_DELETE_FAIL:
      return { delete_loading: false, error: action.payload };
    default:
      return state;
  }
};
