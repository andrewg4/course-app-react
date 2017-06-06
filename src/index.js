import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./components/App";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";

const store = configureStore();
// store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
