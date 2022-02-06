import {
  THEFIRM_REQUEST,
  THEFIRM_FAIL,
  THEFIRM_SUCCESS,
  THEFIRM_CREATE_REQUEST,
  THEFIRM_CREATE_SUCCESS,
  THEFIRM_CREATE_FAIL,
  THEFIRM_UPDATE_REQUEST,
  THEFIRM_UPDATE_SUCCESS,
  THEFIRM_UPDATE_FAIL,
  THEFIRM_UPDATE_EMPTY,
  THEFIRM_DELETE_REQUEST,
  THEFIRM_DELETE_SUCCESS,
  THEFIRM_DELETE_FAIL,
  THEFIRM_DELETE_EMPTY,
} from "../constants/thefirmConstant";
import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";

export const getThefirm = () => async (dispatch) => {
  try {
    dispatch({ type: THEFIRM_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/thefirm`);
    dispatch({
      type: THEFIRM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: THEFIRM_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const createThefirm = (inpuData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: THEFIRM_CREATE_REQUEST });
    const { data } = await axios.post(`${BASE_URL}/thefirm`, inpuData, config);
    dispatch({ type: THEFIRM_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: THEFIRM_CREATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateThefirm = (inpuData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: THEFIRM_UPDATE_REQUEST });
    const { data } = await axios.put(
      `${BASE_URL}/thefirm/${id}`,
      inpuData,
      config
    );
    dispatch({ type: THEFIRM_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: THEFIRM_UPDATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateThefirmEmpty = () => async (dispatch) => {
  dispatch({ type: THEFIRM_UPDATE_EMPTY });
};

export const deleteThefirm = (id) => async (dispatch) => {
  try {
    dispatch({ type: THEFIRM_DELETE_REQUEST });
    const { data } = await axios.delete(`${BASE_URL}/thefirm/${id}`);
    dispatch({ type: THEFIRM_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: THEFIRM_DELETE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const deleteThefirmEmpty = () => async (dispatch) => {
  dispatch({ type: THEFIRM_DELETE_EMPTY });
};
