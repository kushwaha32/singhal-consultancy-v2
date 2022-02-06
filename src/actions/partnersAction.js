import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
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

export const getpartners = () => async (dispatch) => {
  try {
    dispatch({ type: PARTNERS_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/partners`);
    dispatch({
      type: PARTNERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PARTNERS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const createpartners = (inpuData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: PARTNERS_CREATE_REQUEST });
    const { data } = await axios.post(`${BASE_URL}/partners`, inpuData, config);
    dispatch({ type: PARTNERS_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PARTNERS_CREATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updatepartners = (inpuData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: PARTNERS_UPDATE_REQUEST });
    const { data } = await axios.put(
      `${BASE_URL}/partners/${id}`,
      inpuData,
      config
    );
    dispatch({ type: PARTNERS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PARTNERS_UPDATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updatepartnersEmpty = () => async (dispatch) => {
  dispatch({ type: PARTNERS_UPDATE_EMPTY });
};

export const deletepartners = (id) => async (dispatch) => {
  try {
    dispatch({ type: PARTNERS_DELETE_REQUEST });
    const { data } = await axios.delete(`${BASE_URL}/partners/${id}`);
    dispatch({ type: PARTNERS_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PARTNERS_DELETE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const deletepartnersEmpty = () => async (dispatch) => {
  dispatch({ type: PARTNERS_DELETE_EMPTY });
};
