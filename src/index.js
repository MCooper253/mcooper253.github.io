import React from "react";
import { Provider } from "react-redux"
import { render } from "react-dom";

import { store } from './app/Redux/store.js'
import App from "./app/Containers/App.js"
import './app/Styles/style.scss'
import { getAllMovies } from './app/Redux/thunk.js'

store.dispatch(getAllMovies())

render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
        );