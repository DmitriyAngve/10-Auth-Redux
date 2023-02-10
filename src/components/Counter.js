import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
// import { INCREMENT } from "../store";

import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter); // For 1 slice
  const counter = useSelector((state) => state.counter.counter); // For several slice
  // const show = useSelector((state) => state.showCounter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 10 });
    dispatch(counterActions.increase(10)); // {type:SOME_UNIQUE_IDENTIFIER, payload}
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Class based component for "Counter"
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// ~~ USING REDUX DATA IN REACT COMPONENTS ~~
// Start by outputting the current counter. For this we need to get access to our Redux store and to the data in there
// STEP: 1
// 1.1 Import Reack Hook from a React-Redux library. A custom hook made by the React-Redux team: "import { useSelector } from "react-redux"", that allows us to then automatically select a part of our state managed by the store.
// For functional Component "import { useSelector, connect } from "react-redux"". "connect" function use as a wrapper around our class Component to connect that class Component to the "store".
// 1.2 In the "Counter" Component we can get access to the data managed in our store by using use selector. "useSelector()"
// 1.3 After calling this we need to pass a function to "useSelector", a function which will be executed by React-Redux, a function which then basically determines which piece of data we wanna extract from our store.
// 1.3.1 Pass a function of which we'll receive the state managed by Redux and then we return the part of the state which we wanna extract " useSelector((state) => state.counter)" -> this function will be executed for us by React-Redux. It will then pass the Redux state, so the manage the data into this function when it executes it and then basically executes "state.counter" to retrieve the part of the state, which we need in this Component. "useSelector" overall gives us that returned value.
// 1.4 So we get a counter constant: "const counter = useSelector((state) => state.counter)" which is the counter managed by Redux.
// Then you use "useSelector", Reacr-Redux will automatically set up a subscription to the Redux "store" for "Counter" Component. So your Component will be updated and will receive the latest counter automatically whenever that data changes in the Redux "store". So it's automatically reactive and changes to the Redux "store" will cause "Counter" Component function to be re-executed.
// So you always have a latest counter.
// If you ever would unmount "Counter" Component, if it would be remove from the DOM, R-R would also automatically clear the subscription for you.
// 1.5 Use this "counter" in JSX code. "<div className={classes.value}>{counter}</div>"
// ~~ USING REDUX DATA IN REACT COMPONENTS ~~

// ~~ DISPATCHING ACTION ~~
// STEP: 1
// 1.1 Add two new butons, which allows to dispatch actions.( increment-decrement).
// Now we wanna wire up those two buttons so that they do increase or decrease the counter by one.
// Let's dispatch the action, but do it from inside the React Component?
// 1.2 For this we need another hook: "useDispatch". Let's import there.
// 1.3 Call "useDispatch" when we call it, we don't pass any argument to it, but instead, this gives us back a "dispatch" function, which you can execute.
// This "dispatch" is a function, which we can call, which will dispatch an action against our Redux "store".
// 1.4 Add two new functions in "Counter" Component which will wire up to the buttons. ("incrementHandler" amd "decrementHandler").
// 1.4.1 In "incrementHandler" we wanna use this "dispatch" function and execute it to dispatch a new action. An action is an object with a type property. Add object as a argument to the "dispatch" function call. And then the value for type should be one of the identifires we use in our Redux "store" reducer. "dispatch({ type: "increment" })"
// 1.4.2 Same for "decrement".
// Now we need to wire up those two handlers and butons in JSX cpde.
// 1.5 Add "<button onClick={incrementHandler}>Increment</button>"
// ~~ DISPATCHING ACTION ~~

// REDUX WITH CLASS-BASED COMPONENTS
// STEP: 1
// 1.1 Let's see what it looks like this "Counter" Component if I would build it as a class-based Component. For this I'll add a class named "Counter"
// 1.2 This class need to extend the react component object: "import { Component } from "react";" like this.
// 1.3 Extends: "class Counter extends Component {}" we need to add the "constructor(){}" to initialize our state, but here don't have any state => replace "constructor(){}" with "render(){}" method which should return this JSX code.
// 1.4 Now need to add "increment" and "decrement" handler methods, a "toggleCounterHandler" and get access to our "counter". Let's add this methods.
// 1.5 Add "this" keyword to functions reffering to these methods, which are part of this case.
// STEP 2: HOW WE DO get access to REDUX with class based components?
// 2.1 In class-based components are not usable hooks. Solve - use "connect" imported from "react-redux".
// 2.2 In "export default Counter()" add "connect()(Counter)". "Connect" is a so-called higher order Component. In this "connect()(Counter)" we execute the "connect" function it then returns a new function and we execute this returned, this new function as well and to this returned function, we pass "Counter".
// We do this cuz, when we execute this, we also pass something.
// Connect also wants some arguments. It wants two arguments t be prcise, and both arguments are functions. Let's separate this functions.
// 2.3 First function is a function that maps REDUX state to props, which will be received in this component then. "const mapsStateToProps = " this funciton receives the REDUX state and then returns an object where keys will be available as props in the receiving component (Counter component), and the values of thoose keys, that is then the logic for drilling into that REDUX state. We use "counter" as key, and value is "state.counter". We pick thee "counter" valkue from the REDUX state, and bind that value to the "counter" prop.
// 2.3 After this "mapStateToProp" is the first argument we pass to connect: "export default connect(mapStateToProps)(Counter);"
// 2.4 Second argument "const mapDispatchToProps". Idead is to store "dispatch" functions in props. In the "counter" Component, we have certain props, which we can execute as a function, which will then when executed dispatch an action to the REDUX store. This function receives the "dispatch" func as an argument automatically and also return an object, where the keys are prop names which we can then use in the component.
// 2.5 Value is then another function "increment: ()=> dispatch({})" and then set up our function and action where the "type: "increment"".
// 2.6 Also do this for decrement. And add this function like argument into "connect" (just pointers! they will be executed for us by react-redux)
// When using "connect", react-redux will still set up a subscription and manage a subscribtion for you.
// 2.7 Now in "incrementHandler()" we can execute "this.props.increment" because we'll have a prop named "increment", cuz of our mappng.
// 2.8 For "decrement" too.
// 2.9 Add needed "this.props" in JSX. "this.props.counter"
// 2.10 Add ".bind(this)" to make sure for working fine. (this) - refers to the class.

// ATTACING PAYLOADS TO ACTIONS
// STEP 1:
// 1.1 For this add new button "Increase by 5".
// 1.2 Prepare our Reducer function for another action type.
// GO TO "store/index.js" --->>>

// HELLO, I'm FROM store/index.js
// STEP 2:
// 2.1 Add a new function the "increaseHandler" with " dispatch({ type: "increase", amount: 5 });"

// ATTACING PAYLOADS TO ACTIONS

// WORKING WITH MULTIPLE STATE PROPERTIES

// STEP 1:
// 1.1 Let's work with "toggleCounterHandler" here we wanna dispatch an action which changes some state in REDUX, which controls whether this counter div "<div className={classes.value}>{counter}</div>" is shown or not.
// GO TO "store/index.js" --->>> to change our Reducer

// HELLO, I'm FROM store/index.js

// STEP 3:
// 3.1 Now "dispatch" such an action with a type is toggle
// 3.2 Need to get access to this "toggle". For this use "useSelector": "const show = useSelector((state) => state.showCounter);"
// 3.3 Add render to div conditionally: "show &&<div className={classes.value}>{counter}</div>}" IF "show" changes - it start's render a component
// WORKING WITH MULTIPLE STATE PROPERTIES

// MIGRATION EVERYTHING TO REDUX TOOLKIT
// HELLO, I'm FROM store/index.js

// STEP 1:
// 1.1 import from "index.js" "import { counterActions } from "../store/index";".
// "counterActions" - that's an object which has our reducer names (increment, decrement...) as keys.
// So now if we want to dispatch an action here all we have to do is we have to access "counterActions". "dispatch(counterActions.increment());" - because "increment" is a method, which when executed creates a full action object with the type set to this automatically created unique action identifier.
// 1.2 Do this for "decrement" and "toggleCounter", but not for "increase".
// 1.3 For this method ("increase") we pass our payload data. (for example an object with any property value pairs of our choice) or just a number by wanna increase here. But how you then extract that value? Redux toolkit creates automatically object and any value you pass here: "{type:SOME_UNIQUE_IDENTIFIER, payload}" and any value you pass here. As an argument to this action method you're executing, will be stored in an extra field named "payload" - that default name.
// GO TO index.js ---> we need change amout to payload.
// MIGRATION EVERYTHING TO REDUX TOOLKIT

// WORKING WITH MULTIPLE SLICES
// STEP 3:
// Counter was broken. For counter I use "counter" as an identifier. hence in the "Counter" Component, when we wanna access the "counter" =>
// 3.1 "  const counter = useSelector((state) => state.counter.counter);" add additional ".counter" to drill. First ".counter" we make React-REDUX aware of the fact that we wanna dive into this slice in the end, into the state produced by this slicer's reducer and then in that state slice, we simply have a property named counter. (if value => .counter.value)
// 3.2 "const show = useSelector((state) => state.counter.showCounter);"
// WORKING WITH MULTIPLE SLICES
