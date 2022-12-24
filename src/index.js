import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ~~ PROVIDINGTHE STORE ~~
// CAME FROM "store/index.js"
// STEP 1:
// This is index.js file where rendered the entire app. Highest level we can go, in our React application, to the top of our Component tree, where we render this root Component.
// 1.1 Here we can import "import { Provider } from "react-redux""
// 1.2 Now we wrap all our Component with Provider. "<Provider><App /></Provider>" We wrap entire </ App> not separate child Components.
// React Redux doesn't know that data file holds our store. Let's import our "store".
// 1.3 "import store from "./store/index"".
// 1.4 On "<Provider>", which we import from React Redux we have a store prop, which we have to set. And this one's a value, which is our Redux "store"." <Provider store={store}>"
// "{store}" - we setting this as a value, for the store prop on this "<Provider>" Component.
// Now this "store" is provided, but that doesn't change anything at the moment. But now our Component in this App, can tap into that store, can get data out of the "store". They can set up a subscription to that data. They also can dispatch actions.
// ~~ PROVIDINGTHE STORE ~~
