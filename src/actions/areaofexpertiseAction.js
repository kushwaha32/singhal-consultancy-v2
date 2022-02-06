import axios from "axios";
import {
  AREAOFEXPERTISE_CREATE_FAIL,
  AREAOFEXPERTISE_CREATE_REQUEST,
  AREAOFEXPERTISE_CREATE_SUCCESS,
  AREAOFEXPERTISE_DELETE_EMPTY,
  AREAOFEXPERTISE_DELETE_FAIL,
  AREAOFEXPERTISE_DELETE_REQUEST,
  AREAOFEXPERTISE_DELETE_SUCCESS,
  AREAOFEXPERTISE_FAIL,
  AREAOFEXPERTISE_REQUEST,
  AREAOFEXPERTISE_SUCCESS,
  AREAOFEXPERTISE_UPDATE_EMPTY,
  AREAOFEXPERTISE_UPDATE_FAIL,
  AREAOFEXPERTISE_UPDATE_REQUEST,
  AREAOFEXPERTISE_UPDATE_SUCCESS,
} from "../constants/areaofexpertiseConstant";
import { BASE_URL } from "../constants/baseUrl";

export const getareaofexpertise = () => async (dispatch) => {
  try {
    dispatch({ type: AREAOFEXPERTISE_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/areaofexpertise`);
    dispatch({
      type: AREAOFEXPERTISE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AREAOFEXPERTISE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const createareaofexpertise = (formData) => async (dispatch) => {
  try {
    dispatch({ type: AREAOFEXPERTISE_CREATE_REQUEST });

    const { data } = await axios.post(`${BASE_URL}/areaOfExpertise`, formData);

    dispatch({ type: AREAOFEXPERTISE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AREAOFEXPERTISE_CREATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateareaofexpertise = (inpuData, id) => async (dispatch) => {
  try {
    dispatch({ type: AREAOFEXPERTISE_UPDATE_REQUEST });
    const { data } = await axios.put(
      `${BASE_URL}/areaOfExpertise/${id}`,
      inpuData
    );
    dispatch({ type: AREAOFEXPERTISE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AREAOFEXPERTISE_UPDATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateareaofexpertiseEmpty = () => async (dispatch) => {
  dispatch({ type: AREAOFEXPERTISE_UPDATE_EMPTY });
};

export const deleteareaofexpertise = (id) => async (dispatch) => {
  try {
    dispatch({ type: AREAOFEXPERTISE_DELETE_REQUEST });
    const { data } = await axios.delete(`${BASE_URL}/areaOfExpertise/${id}`);
    dispatch({ type: AREAOFEXPERTISE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AREAOFEXPERTISE_DELETE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const deleteareaofexpertiseEmpty = () => async (dispatch) => {
  dispatch({ type: AREAOFEXPERTISE_DELETE_EMPTY });
};
