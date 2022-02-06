import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  thefirmCreateReducer,
  thefirmDeleteReducer,
  thefirmReducer,
  thefirmUpdateReducer,
} from "./reducers/thefirmReducers";
import { adminLoginReducer } from "./reducers/adminLoginReducer";
import {
  areaofexpertiseCreateReducer,
  areaofexpertiseDeleteReducer,
  areaofexpertiseReducer,
  areaofexpertiseUpdateReducer,
} from "./reducers/areaofexpertiseReducer";
import {
  industrysectorCreateReducer,
  industrysectorDeleteReducer,
  industrysectorReducer,
  industrysectorUpdateReducer,
} from "./reducers/industrysectorReducer";
import {
  partnersCreateReducer,
  partnersDeleteReducer,
  partnersReducer,
  partnersUpdateReducer,
} from "./reducers/partnersReducers";
import {
  associatesCreateReducer,
  associatesDeleteReducer,
  associatesReducer,
  associatesUpdateReducer,
} from "./reducers/associatesReducer";
import {
  informationtechnologyCreateReducer,
  informationtechnologyDeleteReducer,
  informationtechnologyReducer,
  informationtechnologyUpdateReducer,
} from "./reducers/informationtechnologyReducer";

const reducer = combineReducers({
  thefirmData: thefirmReducer,
  thefirmCreate: thefirmCreateReducer,
  thefirmUpdate: thefirmUpdateReducer,
  thefirmDelete: thefirmDeleteReducer,

  areaofexpertiseData: areaofexpertiseReducer,
  areaofexpertiseCreate: areaofexpertiseCreateReducer,
  areaofexpertiseUpdate: areaofexpertiseUpdateReducer,
  areaofexpertiseDelete: areaofexpertiseDeleteReducer,

  industrysectorData: industrysectorReducer,
  industrysectorCreate: industrysectorCreateReducer,
  industrysectorUpdate: industrysectorUpdateReducer,
  industrysectorDelete: industrysectorDeleteReducer,

  partnersData: partnersReducer,
  partnersCreate: partnersCreateReducer,
  partnersUpdate: partnersUpdateReducer,
  partnersDelete: partnersDeleteReducer,

  associatesData: associatesReducer,
  associatesCreate: associatesCreateReducer,
  associatesUpdate: associatesUpdateReducer,
  associatesDelete: associatesDeleteReducer,

  informationtechnologyData: informationtechnologyReducer,
  informationtechnologyCreate: informationtechnologyCreateReducer,
  informationtechnologyUpdate: informationtechnologyUpdateReducer,
  informationtechnologyDelete: informationtechnologyDeleteReducer,

  adminLogin: adminLoginReducer,
});

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
