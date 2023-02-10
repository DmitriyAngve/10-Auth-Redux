import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;

// WORKING WITH MULTIPLE SLICES
// HELLO, I'm FROM App.js!!!
//
// STEP 2:
// Make sure if I click the button we set the user to authenticated, if we click the Logout button, I wanna set the user to not authenticated. And our ".store/index.js" we can add a brand new state, a brand new piece of data.

// GO TO .store/index.js file --->>>

// 2.1
// WORKING WITH MULTIPLE SLICES
