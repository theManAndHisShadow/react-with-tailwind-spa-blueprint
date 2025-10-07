import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // object with reducers
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;