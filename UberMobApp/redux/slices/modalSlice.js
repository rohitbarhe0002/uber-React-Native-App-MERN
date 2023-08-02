import { createSlice } from "@reduxjs/toolkit";

const orderModalSlice = createSlice({
  name: "orderModal",
  initialState: {
  isOpen:false
  },
  reducers: {
    toggleModal: (state,action) => {
      state.isOpen = action.payload;
    },
  
  },
});

export const { toggleModal } = orderModalSlice.actions;
export default orderModalSlice.reducer;
