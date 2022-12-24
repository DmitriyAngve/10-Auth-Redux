import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
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
// SO you always have a latest counter.
// ~~ USING REDUX DATA IN REACT COMPONENTS ~~
