import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

const configureStore = (perloadedState = {}) => {
    return createStore(rootReducer, perloadedState)
}

export default configureStore;
