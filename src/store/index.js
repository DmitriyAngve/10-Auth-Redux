// import { act } from "react-dom/test-utils";
import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;

// ~~ CREATE A REDUX STOREFOR REACT ~~
// STEP: 1
// 1.1 Import "import { legacy_createStore as createStore } from "redux"".
// 1.2 Add const "store" and call it like "createStore". That "createStore" wants a pointer at a Reducer Function as a parameter.
// 1.3 Set up "counterReducer", and that then is a function, which gets the existing "state" as a first argument and then the "action" was dispatched as a second.
// 1.4 Give state a default value, so then the reducer is executed for the first time, we have an initial "state". "const counterReducer = (state = { counter: 0 }, action) => {};"
// 1.5 In the function body of this "counterReducer" we wanna handle different actions (increment and decrement), and then return deffirent state snapshot. => add "ifcheck" (logic from REDUX BASICS)
// 1.6 So now we can use this "counterReducer" function and point at that function in "store" ("const store = createStore(counterReducer)"). This now creates our Redux store.
// STEP: 2
// Now I wanna connect my React app to this Redux store.
// So that the Component of that app can dispatch and listen
// 2.1 Start with exporting "export default store"
// Next we need to provide this "store" to the React app.
// 2.2 To provide Redux "store" to React app, go into "store/index.js"
// GO TO "store/index.js" --->>>
// ~~ CREATE A REDUX STOREFOR REACT ~~

// ATTACING PAYLOADS TO ACTIONS
// HELLO, I'm FROM COUNTER.js
// STEP 1:
// 1.1 Add new condition for reducer with another action.type
// 1.2 "if (action.type === "increaseby5") { return {   counter: state.counter + 5,};}" - it's HARDCODE. Instead, the action which we "dispatch" and which reaches the Reducer often needs to carry extra data.
// 1.3 "if (action.type === "increaseby") { return {   counter: state.counter + action.amount,};}"

// GO TO "Counter.js" --->>>
// ATTACING PAYLOADS TO ACTIONS
