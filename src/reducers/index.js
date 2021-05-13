import { combineReducers } from "redux";
import { subdomainReducer } from "./subdomainReducer";

const rootReducer = combineReducers({
  subdomain: subdomainReducer,
});

export default rootReducer;
