import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";

import door_popup_reducer from "./reducer/Toolpage/door_popup_reducer";
import {
  get_tools_data_reducer,
  get_tools_s_data_reducer,
} from "./reducer/Home/get_tools_data_reducer";

const reducer = combineReducers({
  door_popup_reducer,
  get_tools_data_reducer,
  get_tools_s_data_reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const persistor = persistStore(store);

export { store, persistor };
