import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using your state variables
const initialState = {
  currentRent: '',
  newRent: '',
  postcode: '',
  name: '',
  lettingAgent: '',
  personalStory: '',
};

export const rentSlice = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    setCurrentRent: (state, action) => {
      state.currentRent = action.payload;
    },
    setNewRent: (state, action) => {
      state.newRent = action.payload;
    },
    setPostcode: (state, action) => {
      state.postcode = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLettingAgent: (state, action) => {
      state.lettingAgent = action.payload;
    },
    setPersonalStory: (state, action) => {
      state.personalStory = action.payload;
    },
  },
});

// Export actions
export const { setCurrentRent, setNewRent, setPostcode, setName, setLettingAgent, setPersonalStory } = rentSlice.actions;

// Export reducer
export default rentSlice.reducer;