import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

// READING AND DISPATCHING FROM A NEW SLICE

// HELLO, I'm FROM "App.js".
// STEP 1:
// 1.1 "import { useSelector } from "react-redux";"
// 1.2 in "Header" Component create our "isAuth" property.
// 1.3 We can use "isAuth" to conditionally render or not render list items: "{isAuth && (..."
// GO TO Auth.js Component --->>> where we do authenticate.

// HELLO, I'm from Auth.js
// STEP 2:
// 2.1 For logout logic I add onClick listener on that button.
// 2.2 Create "const logoutHandler = () =>{}" and import "useDispatch" and import "authActions".
// 2.3 Then call "useDispatch" in the Component function to get access to that dispatch function. "const dispatch = useDispatch();"
// 2.4 And in the "loginHandler" we call this "dispatch()" and pass "dispatch(authActions.logout());" ".logout()" - execute this because we need object from this.
// 2.5 wire up listener.
// READING AND DISPATCHING FROM A NEW SLICE
