require("./main.scss");
import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoApp from "./reducers";


let store = createStore(todoApp, {
    todoList: [
        {key: 1, id: 1, text: "Learn React", status: 1},
        {key: 2, id: 2, text: "Learn Redux", status: 0},
        {key: 3, id: 3, text: "Reduxify this app", status: 0},
        {key: 4, id: 4, text: "Learn React Native", status: 0}
    ],
    todoInputValue: ""
}, window.devToolsExtension ? window.devToolsExtension() : undefined);

render (
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("react-app")
);
