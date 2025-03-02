import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false, 
    user:null // Ensure it's 'loading' (not 'loding')
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser:(state,action)=>{
      state.user=action.payload;
    }
  },
});

export const { setLoading  , setUser} = authSlice.actions;
export default authSlice.reducer;
