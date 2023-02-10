// import { legacy_createStore as createStore } from "redux";
// import { act } from "react-dom/test-utils";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// REDUX
// const store = createStore(counterReducer);
// REDUX

// REDUX TOOLKIT for several reducers in "counterSlice"
// const store = configureStore({
//   reducer: { counter: counterSlice.reducer },
// });
// REDUX TOOLKIT for several reducers in "counterSlice"

// Our CASE only one REDUCER
const store = configureStore({
  reducer: counterSlice.reducer,
});
// Our CASE only one REDUCER

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

// HOW TO WORK WITH REDUX STATE CORRECTLY
// REDUX Reducer always return a brand new snapshot, a brand new state object which REDUX will use to replace its existing state with. Object which we return in the Reducer will not !!!be merged with the existing state!!!, they will overwrite the exiting state.
// NEVER MUTATE THE EXISTING "STATE" only overwrite it by returning a brand bew state object
// HOW TO WORK WITH REDUX STATE CORRECTLY

// INTRODUCING REDUX TOOLKIT
// STEP 1:
// 1.1 Add a constant which stores the identifier and export this constant: " export const INCREMENT = "increment"".
// 1.2 Replace in here and "Counter.js" with "import { INCREMENT } from "../store";"
// INTRODUCING REDUX TOOLKIT

// ADDING STATE SLICES
// STEP 1:
// 1.1 Install REDUX toolkit with "npm install @reduxjs/toolkit"
// 1.2 "import { CreateSlice } from "@reduxjs/toolkit";"
// 1.3 Now call it "createSlice({})" with object as argument (in here we are preparing a slice of our global state).
// 1.4 Every "slice" need a "name" / "name:"counter", next need to set up a "initialState" equal to that object or I therefore just point at initial state so at this constant and use that constant value as s value or we even use modern JS syntex "initialState: initialState = initialState"
// 1.5 need to add "reducers" - this again an object, a map you could to say, of all the reducers this state slice needs.
// 1.6 In "reducers" add methods with any names, add "increment(){}" method and other 3.
// 1.7 Ever method automatically receive the latest state. This methods will be called for you by REDUX and will receive the current state, also to the action, and we'll use that in a second, but we don't need the action because these methods will automatically be called for you depending on which action was triggered.
// So we don't need to write our own "ifchecks" anymore instead we'll soon be able to identify these different reducers and dispatch actions that targer these different reducers.
// In these methods (in reducers map) we now also can do something else than we did before, now we are allowed to mutate the state. (For example "state.counter++").
// With REDUX TOOLKIT we can't accidentally manipulate the existing state! Because REDUX TOOLKIT internally uses another package (called immer), which will detect code like "state.counter++" and which will automatically clone the existing state, create a new state object, keep all the state which we're not editing, and override the state, which we are editing in an immutable way.

// STEP 2:
// 2.1 For "increase(){}" we need extra data. This method don't do just receive the "state", they need "action" - add "action" as a parametr and use it un the reducer function in the reducer method: "increase(state, action) {state.counter = state.counter + action.amount;}," like as "ifcheck" below
// 2.2 for "toggleCounter" do same.
// ADDING STATE SLICES

// CONNECTING REDUX TOOLKIT STATE
// STEP 1:
// 1.1 To use "createSlice" we first of all need to use the return value of calling "createSlice" because we get back our "counterSlice" (it is slice of global state - name is up to you). The slice which is responsible for working with our counter. "const counterSlice = createSlice({..."
// 1.2 Now we wanna register this with our store. And comment our old "CounterReducer" - we don't need that anymore.
// 1.3 In "createStore" we could pass our "counterSlice.reducer". With that we get access to the reducers set up in the slice.
// 1.4 Let's import another function from reduxjs/toolkit - "configureStore" function. This function makes multiple reducers into one reducer.
// 1.5 Comment "createStore" and replace it to "const store = configureStore(counterSlice.reducer);"
// 1.6 Into "configureStore" we now pass an object: "". It's a configuration object expected by "configureStore", a configuration object where we then set a reducer property and that's an expected property by "configureStore" !!! reducer - singular and not plural, because still, no matter if we use "createStore" of "configureStore", REDUX WANTS ONE MAIN REDUCER function!!!, which is responsible for the global state.
// With "configureStore", the value for reducer can be a single reducer, so we can use "counterSlice.reducer" to use the reducer from that "counterSlice", which combines all those reducer methods to find in that slice. We can use that as a global main reducer. - this makes sense because this is the only state slice we have and therefore, the only reducer we have, but if we have multiple state slices in a bigger application then alternatively as a value for thus reducer key, we could also set an object and in that object, and in that objects we can set up any keys of our choice (any propertu names pf my choice), and the values of that properties would then be different reducer functions. So we would create a map of reducers you could say, and this map is then set as a value fore the main reducer, and behinde the scenes "configureStore" will merge all those reducers into ONE BIG REDUCER!!!

// STEP 2:
// NOW we need to dispatch actions!
// 2.1
// CONNECTING REDUX TOOLKIT STATE
