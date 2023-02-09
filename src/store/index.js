// import { act } from "react-dom/test-utils";
import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
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

// WORKING WITH MULTIPLE STATE PROPERTIES

// HELLO, I'm FROM COUNTER.js
// STEP 1:
// 1.1 We need add some logic for "toggleCounterHandler". We start besides having a counter, which has a value of 0, I wanna have a showCounter field. Add "showCounter: true"
// 1.2 For more readable I'll extract that and store in a constant: "const initialState = { counter: 0, showCounter: true };" and change "state = initialState".
// We still need to set th "showCounter" property to returned object in reducer function, cuz we are returning the overall state object and REDUX won't merge your changes with the existing state. It instead takes what you return and replaces the existing state with it.
// 1.3 "showCounter: state.showCounter," - return the existing showCounter value
// STEP 2:
// 2.1 Handle a new action type and check for "toggle" and set  "showCounter: !state.showCounter" and set it to the opossite of what it was before (with exclamaton mark). "counter" itself, we wanna keep the existing state "counter: state.counter"

// GO TO "Counter.js" --->>>
// WORKING WITH MULTIPLE STATE PROPERTIES
