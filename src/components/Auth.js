import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

// READING AND DISPATCHING FROM A NEW SLICE

// STEP 2:
// 2.1 Add to <form> "onSubmit" listener and add a new function in the Auth Component "const loginHandler =(event)=>{}" where we get default "event" and use "event.preventDefaul()" to make sure Browser doesn't send a HTTP request
// 2.2 Wired up listener and function
// 2.3 After this I wanna dispatch that Login action. We wanna import "authAction" and use "dispatch"/// "import { useDispatch } from "react-redux";" /// "import { authActions } from "../store/index";"\
// 2.4 In "Auth" Component add "const dispatch = useDispatch();"
// 2.5 And in the "loginHandler" we use this "dispatch(authActions.login());" We execute ".login()" because this is action creator returning the actual action object which should be dispatched.
// GO TO Header.js --- >>>
// READING AND DISPATCHING FROM A NEW SLICE
