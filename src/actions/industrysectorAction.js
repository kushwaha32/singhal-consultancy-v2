import axios from "axios";
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
import { BASE_URL } from "../constants/baseUrl";

export const getindustrysector = () => async (dispatch) => {
  try {
    dispatch({ type: INDUSTRYSECTOR_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/industrySector`);
    dispatch({
      type: INDUSTRYSECTOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INDUSTRYSECTOR_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const createindustrysector = (formData) => async (dispatch) => {
  try {
    dispatch({ type: INDUSTRYSECTOR_CREATE_REQUEST });

    const { data } = await axios.post(`${BASE_URL}/industrysector`, formData);

    dispatch({ type: INDUSTRYSECTOR_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: INDUSTRYSECTOR_CREATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateindustrysector = (inpuData, id) => async (dispatch) => {
  try {
    dispatch({ type: INDUSTRYSECTOR_UPDATE_REQUEST });
    const { data } = await axios.put(
      `${BASE_URL}/industrysector/${id}`,
      inpuData
    );
    dispatch({ type: INDUSTRYSECTOR_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: INDUSTRYSECTOR_UPDATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateindustrysectorEmpty = () => async (dispatch) => {
  dispatch({ type: INDUSTRYSECTOR_UPDATE_EMPTY });
};

export const deleteindustrysector = (id) => async (dispatch) => {
  try {
    dispatch({ type: INDUSTRYSECTOR_DELETE_REQUEST });
    const { data } = await axios.delete(`${BASE_URL}/industrysector/${id}`);
    dispatch({ type: INDUSTRYSECTOR_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: INDUSTRYSECTOR_DELETE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const deleteindustrysectorEmpty = () => async (dispatch) => {
  dispatch({ type: INDUSTRYSECTOR_DELETE_EMPTY });
};
