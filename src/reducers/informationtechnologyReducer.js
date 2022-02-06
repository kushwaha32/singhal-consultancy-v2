import {
  INFORMATIONTECHNOLOGY_CREATE_FAIL,
  INFORMATIONTECHNOLOGY_CREATE_REQUEST,
  INFORMATIONTECHNOLOGY_CREATE_SUCCESS,
  INFORMATIONTECHNOLOGY_DELETE_EMPTY,
  INFORMATIONTECHNOLOGY_DELETE_FAIL,
  INFORMATIONTECHNOLOGY_DELETE_REQUEST,
  INFORMATIONTECHNOLOGY_DELETE_SUCCESS,
  INFORMATIONTECHNOLOGY_FAIL,
  INFORMATIONTECHNOLOGY_REQUEST,
  INFORMATIONTECHNOLOGY_SUCCESS,
  INFORMATIONTECHNOLOGY_UPDATE_EMPTY,
  INFORMATIONTECHNOLOGY_UPDATE_FAIL,
  INFORMATIONTECHNOLOGY_UPDATE_REQUEST,
  INFORMATIONTECHNOLOGY_UPDATE_SUCCESS,
} from "../constants/informationtechnologyConstant";

export const informationtechnologyReducer = (
  state = { informationtechnologyAll: [] },
  action
) => {
  switch (action.type) {
    case INFORMATIONTECHNOLOGY_REQUEST:
      return { loading: true, informationtechnologyAll: [] };
    case INFORMATIONTECHNOLOGY_SUCCESS:
      return { loading: false, informationtechnologyAll: action.payload };
    case INFORMATIONTECHNOLOGY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const informationtechnologyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case INFORMATIONTECHNOLOGY_CREATE_REQUEST:
      return { loading: true };

    case INFORMATIONTECHNOLOGY_CREATE_SUCCESS:
      return { loading: false, informationtechnology: action.payload };
    case INFORMATIONTECHNOLOGY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const informationtechnologyUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case INFORMATIONTECHNOLOGY_UPDATE_REQUEST:
      return { loading: true };
    case INFORMATIONTECHNOLOGY_UPDATE_EMPTY:
      return { loading: false, informationtechnologyUpdate: [] };
    case INFORMATIONTECHNOLOGY_UPDATE_SUCCESS:
      return { loading: false, informationtechnologyUpdate: action.payload };
    case INFORMATIONTECHNOLOGY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const informationtechnologyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case INFORMATIONTECHNOLOGY_DELETE_REQUEST:
      return { delet_loading: true };
    case INFORMATIONTECHNOLOGY_DELETE_EMPTY:
      return { delete_loading: false, informationtechnologyDelete: [] };
    case INFORMATIONTECHNOLOGY_DELETE_SUCCESS:
      return {
        delete_loading: false,
        informationtechnologyDelete: action.payload,
      };
    case INFORMATIONTECHNOLOGY_DELETE_FAIL:
      return { delete_loading: false, error: action.payload };
    default:
      return state;
  }
};
