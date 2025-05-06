import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    deleUser: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    updateUserLoge: (state, action) => {
      state.items = state.items.map((user) =>
        user.email === action.payload ? { ...user, loge: true } : user
      );
    },
  },
});
export const { addUser, deleUser, updateUserLoge } = UserSlice.actions;
export default UserSlice.reducer;
