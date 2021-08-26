import React from "react";
import { Provider } from "react-redux";
import App from "./app.jsx";

const Root = ({store}) => {
    debugger;
    return (
        <Provider store={store}>
            <App />
        </Provider> 
    )
    
};

export default Root;