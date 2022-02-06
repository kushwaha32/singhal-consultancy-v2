import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
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

export const getinformationtechnology = () => async (dispatch) => {
  try {
    dispatch({ type: INFORMATIONTECHNOLOGY_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/informationTechnology`);
    dispatch({
      type: INFORMATIONTECHNOLOGY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INFORMATIONTECHNOLOGY_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const createinformationtechnology = (inpuData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: INFORMATIONTECHNOLOGY_CREATE_REQUEST });
    const { data } = await axios.post(
      `${BASE_URL}/informationTechnology`,
      inpuData,
      config
    );
    dispatch({ type: INFORMATIONTECHNOLOGY_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: INFORMATIONTECHNOLOGY_CREATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateinformationtechnology =
  (inpuData, id) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      dispatch({ type: INFORMATIONTECHNOLOGY_UPDATE_REQUEST });
      const { data } = await axios.put(
        `${BASE_URL}/informationTechnology/${id}`,
        inpuData,
        config
      );
      dispatch({ type: INFORMATIONTECHNOLOGY_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: INFORMATIONTECHNOLOGY_UPDATE_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.message,
      });
    }
  };

export const updateinformationtechnologyEmpty = () => async (dispatch) => {
  dispatch({ type: INFORMATIONTECHNOLOGY_UPDATE_EMPTY });
};

export const deleteinformationtechnology = (id) => async (dispatch) => {
  try {
    dispatch({ type: INFORMATIONTECHNOLOGY_DELETE_REQUEST });
    const { data } = await axios.delete(
      `${BASE_URL}/informationTechnology/${id}`
    );
    dispatch({ type: INFORMATIONTECHNOLOGY_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: INFORMATIONTECHNOLOGY_DELETE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const deleteinformationtechnologyEmpty = () => async (dispatch) => {
  dispatch({ type: INFORMATIONTECHNOLOGY_DELETE_EMPTY });
};
