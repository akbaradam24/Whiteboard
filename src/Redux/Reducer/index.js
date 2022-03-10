import { combineReducers } from "redux";

//Import reducernya disini
import { teamReducer } from "./TeamReducer";
import { boardReducer } from "./BoardReducer";
import { getAuthRegister } from "./UserReducer";
import { getTasks } from "./TasksReducer";
import { getProfile } from "./ProfileReducer";
import { listReducer } from "./ListReducer";
import { cardReducer } from "./CardReducer";

const reducers = combineReducers({
  //Masukan Reducer yang telah diimport kesini
  teamReducer,
  boardReducer,
  getAuthRegister,
  getTasks,
  getProfile,
  listReducer,
  cardReducer,
});

export default reducers;
