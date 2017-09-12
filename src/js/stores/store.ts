import {createStore, applyMiddleware} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

declare var window : any;

const middleWare = applyMiddleware(thunk, logger);

export default createStore(rootReducer, typeof window === "object" && typeof window.devToolsExtension !== "undefined"
    ? window.devToolsExtension()
    : f => f, middleWare);
