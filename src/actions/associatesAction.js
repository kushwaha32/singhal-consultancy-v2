import axios from "axios";
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
import { BASE_URL } from "../constants/baseUrl";

export const getassociates = () => async (dispatch) => {
  try {
    dispatch({ type: ASSOCIATES_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/associates`);
    dispatch({
      type: ASSOCIATES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ASSOCIATES_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const createassociates = (inpuData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: ASSOCIATES_CREATE_REQUEST });
    const { data } = await axios.post(
      `${BASE_URL}/associates`,
      inpuData,
      config
    );
    dispatch({ type: ASSOCIATES_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ASSOCIATES_CREATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateassociates = (inpuData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: ASSOCIATES_UPDATE_REQUEST });
    const { data } = await axios.put(
      `${BASE_URL}/associates/${id}`,
      inpuData,
      config
    );
    dispatch({ type: ASSOCIATES_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ASSOCIATES_UPDATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateassociatesEmpty = () => async (dispatch) => {
  dispatch({ type: ASSOCIATES_UPDATE_EMPTY });
};

export const deleteassociates = (id) => async (dispatch) => {
  try {
    dispatch({ type: ASSOCIATES_DELETE_REQUEST });
    const { data } = await axios.delete(`${BASE_URL}/associates/${id}`);
    dispatch({ type: ASSOCIATES_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ASSOCIATES_DELETE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const deleteassociatesEmpty = () => async (dispatch) => {
  dispatch({ type: ASSOCIATES_DELETE_EMPTY });
};
