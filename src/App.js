import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;

// WORKING WITH MULTIPLE SLICES
// STEP 1:
// 1.1 In "App" Component let's return more than just the counter. Let's add a "Fragment" imported from react. So we can have a couple of adjacent JSX element and also add <Header /> component here.

// 1.2 "import Header from "./components/Header";"
// 1.3 Add "<Auth />" Component with import!
// Now we so form for login. Login - it's not local state, it's wide component state. Let's use REDUX fox implement it now.

// GO TO UserProfile.js --->>>

// WORKING WITH MULTIPLE SLICES

// READING AND DISPATCHING FROM A NEW SLICE

// STEP 1:
// What we do: render "<Auth />" Component if we're not authenticated, and render <UserProfile /> if we are authenticated.
// 1.1 "import UserProfile from "./components/UserProfile"".
// And then we need to tap into our store and read a value from there. And we do that with "useSelector"
// 1.2 "import { useSelector } from "react-redux";"
// 1.3 In "App" Component function we therefore call "useSelector()", pass a function to it, function which always receive "state" as an argument, that's passed by Reac-Redux фand return "state.auth" - auth because I picked "auth" as an identifier from "./store/index.js" "const store = configureStore({reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },);" and then in "authSlice" I have this "isAuthenticated" property. "useSelector((state) => state.auth.isAuthenticated);"
// 1.4 Store it in "isAuth" value.
// 1.5 Add conditions for render to "{!isAuth && <Auth />}" and if wanna truthy: "{isAuth && <UserProfile />}"
// NOW we also go some conditional content to render in the Header
// GO TO Header.js --->>>
// READING AND DISPATCHING FROM A NEW SLICE
