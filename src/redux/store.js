	// Here, the redux store is created
import {createStore} from "redux";
import pointsReducer from "./points/pointsReducer"

const store = createStore(pointsReducer);
export default store;

