import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // state.counter = state.counter + action.amount;
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;

// SPLITTING OUR CODE

// COME FROM index.js
// STEP 2:
// 2.1 "import { createSlice } from "@reduxjs/toolkit";" And still need to use "Counter" in a defferent folder after => let's export it.
// 2.2 Do the same for auth.js (create new file)

// SPLITTING OUR CODE
