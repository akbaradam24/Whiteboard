import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { compose, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

//REDUCER
import reducers from "../Reducer";

const persistConfig = {
  key: "root",
  storage,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducers);
if (module.hot) {
  module.hot.accept("../Reducer/index", () => {
    // This fetch the new state of the above reducers.
    const nextRootReducer = require("../Reducer/index").default;
    store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
  });
}
let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);

export { store, persistor };