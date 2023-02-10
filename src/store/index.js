// import { legacy_createStore as createStore } from "redux";
// import { act } from "react-dom/test-utils";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       // state.counter = state.counter + action.amount;
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },

//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

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

// Our CASE only one REDUCER
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// Our CASE only one REDUCER

// REDUX TOOLKIT for several reducers in "counterSlice"
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
// REDUX TOOLKIT for several reducers in "counterSlice"

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
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

// NOW we need to dispatch actions!
// CONNECTING REDUX TOOLKIT STATE

// MIGRATION EVERYTHING TO REDUX TOOLKIT

// STEP 1:
// For dispatching actions "createSlice" has got us covered. It automatically creates unique actions identifiers for our reducers. To get hold of these actions identifiers, we can use our "counterSlice" and access "counterSlice.actions" - that is then an object full of keys, where the key names "increment", "decrement" and so on... from "createSlice" function.
// Now we can access those keys on this actions object. And with that we don't access the reducer methods to find up there but instead we get methods created automatically by Redux Toolkit, which will called will create action objects for us. For example: method "toggleCounter" of "counterSlice.actions.toggleCounter" will create action object for us. Therefore these methods are called action creators and they will create action objects for us where these objects already have a type property with a unique identifier per action. Automatically created behind the scenes. We don't have to worry about action identifiers. We can tap into this actions key into this actions object on our "createSlice" and  execute these action creator methods which with their name match our reducer methods to dispatch actions, which will they ultimately trigger those defferent reducer methods
// Don't have to worry  about creating action objects on our own and about coming up with unique identifiers and about avoiding typos.
// STEP 1:
// 1.1 Store "export const counterActions = counSlicer.actions" into variable. and export this counter actions!
// By doing this we can then go to the component where we need the actions in this case to "Counter.js" file

// GO TO "Counter.js" --->>>

// HELLO, I'm FROM COUNTER.js
// STEP 2:
// 2.1 "state.counter = state.counter + action.payload;" - action.amout change to action.payload, because that is the name off the property, which will hold any extra data you might be dispatching
// MIGRATION EVERYTHING TO REDUX TOOLKIT

// WORKING WITH MULTIPLE SLICES

// STEP 2:
// Add to "const initialState = { counter: 0, showCounter: true, isAuthenticated: false };" new argument, and set is to "false" and add a new reducer (login for example) but it no sense. This "counterSlice" focusess on the counter-related state and actions. And we should create a brand new "slice" for authentication state
// 2.1 Rename "initialState" to "initialCounterState" because we will have one more "initialState". And set the "initialState" property in this "counterSlice" to the value stored in "initialCounterState" (" initialState: initialCounterState,")
// 2.2 Add a new slice below the other slice. we can call "createSlice" again to create another slice. And this slice also needs an object to be configured.
// 2.3 Let's configure this "createSlice" with "name", "initialState" (create new variable for that) /// "const initialAuthState = {  isAuthenticated: false,};"
// 2.4 "initialState: initialAuthState" - add
// 2.5 Then we need to register our reducers. These reducers methods, which can change this state. With 2 methods: "login" and "logout" both method receive current state as an argument automatically provided by REDUX, and we can then mutate this state, even though we technically shouldn't, but under the hood, our code will be transformed to actually not mutate the original state, so it safe to do that here.
// 2.6 We can set "state.isAuthenticated=true" in the "login" state. and "false" in "logout".
// 2.7 store this slice into constant.
// 2.8 And now we wanna add that to our Redux store, so you still only call "configureStore" once! This does not change. And this "store" only has one root reducer, but this reducer actually does not just take a reducer funtion as an argument but also an object which acts as a map of reducers, where you can then have any key names of your choice, and point at your different reducers. "reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },"
// This two reducerss will then automatically be merged together into one main reducer which is exposed to this store.
// 2.9 Now "export const authActions = authSlice.actions;"
// Let's use it in our different components.
// Counter was broken. For counter I use "counter" as an identifier. hence in the "Counter" Component, when we wanna access the "counter" =>
// GP TO Counter.js --- >>>
// WORKING WITH MULTIPLE SLICES

// SPLITTING OUR CODE

// In REDUX make sense to put every slice into its own file.
// STEP 1:
// 1.1 Remove "initialStateCounterState" and "slice" and add in counter.js file

// GO TO counter.js

// SPLITTING OUR CODE
