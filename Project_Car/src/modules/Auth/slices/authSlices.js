import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInAPI } from "../../../apis/user";

export const signin = createAsyncThunk("auth/signin", async (values) => {
  try {
    const data = await signInAPI(values);
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state, action) => {
      return { ...state, isLoading: true, error: null };
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      return { ...state, isLoading: false, currentUser: action.payload };
    });
    builder.addCase(signin.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    });
  },
});

export default authSlice.reducer;
