import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./components/App";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {loadCourses} from "./actions/courseActions";

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
