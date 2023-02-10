import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;

// SPLITTING OUR CODE

// STEP 3:
// 3.1 all imports and exports!
// GO TO index.js for merge all those slices together.
// SPLITTING OUR CODE
