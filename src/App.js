import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
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
