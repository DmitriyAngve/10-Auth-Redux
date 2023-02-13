# Redux-first-project

My first project using Redux and Redux Toolkit.

Nothing special, just self-practice and demonstration of using Redux-Redux Toolkit in React ecosystem.

In this simply App I demostrate how easy to manage state and reducers and actions when using Redux Toolkit instead of having to set up everything on your own.
Using core Redux concepts (using "configureStore" for creating of Central Data Store and argument as reducers, mergeing reducers and other core concepts...)
How to use Redux manage data, e.c.: using "useSelector" in components to read data from Redux managed state.
How to use "useDispatch" to get access to dispatch function which I use to dispatch actions which then leads to Redux state being changed.
I learn ho to pass extra data to actions.
Also learn how I would connect a class-based component to Redux (left in the comments).

In this project, I tried to lay a solid foundation for deep diving into Redux.

------------------------------
# Application features: 
1. Several buttons with different logic: increment increase count by 1, with decrement. Button for increasing count by 10 (unlike of inc and dec buttons this button need action). Button "toggle" for hiding Counter.
2. Dummy login form and header for logout. Without filling form, without validation, only change state if we click the login and logout.

# npm install @reduxjs/toolkit
# npm run start

Thanks for reading this entire post.
