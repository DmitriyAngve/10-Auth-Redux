import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

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
