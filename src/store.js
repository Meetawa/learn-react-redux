import { createStore } from "redux";

import rootReducer from "./ReduxComponents/reducer/index";

const store = createStore(rootReducer);

export default store;
