import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi } from '../../apis/AuthApis/AuthorApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userSignUp = createAsyncThunk(
  'userAuth/signUp',
  async userData => {
    try {
      const userDetails = await AuthApi.SignUp(userData);
      return userDetails;
    } catch (error) {
      throw Error(error);
    }
  },
);  

export const userSignIn = createAsyncThunk(
  'userAuth/signIn',
  async userData => {
    try {
      const userLoginData = await AuthApi.SignIn(userData);
      return userLoginData;
    } catch (error) {
      throw Error(error);
    }
  },
);

const handleOrderCase = (state, action) => {
  state.loading = false;
  // Clear existing error message and modal status
  state.error = action.error ? action.error.message : null;
  state.openErrorModal = action.error ? true : false; // Set to true if there's an error, false otherwise

  if (action.type === userSignUp.fulfilled.type) {
    // Save user details upon successful sign-up
  }
  if (action.type === userSignIn.fulfilled.type) {
   AsyncStorage.setItem('userToken',action?.payload?.token)
    state.userCredential = action.payload;
    state.userToken = action?.payload?.token;
  }
};

const userAuth = createSlice({
  name: 'userAuth',
  initialState: {
    userCredential: '',
    userToken: '', // Load user token from local storage if available
    loading: false,
    error: null,
    openErrorModal: false,
    isSuccess: false,
    successMsg: '',
  },

  reducers: {
    toggleErrorModal: (state, action) => {
      state.openErrorModal = action.payload;
    },
    toggleSuccessModal: (state, action) => {
      state.isSuccess = action.payload;
    },
    onSuccess: (state, action) => {
      state.successMsg = action.payload;
    },
    onLogOut: (state) => {
      state.userToken = '';
      localStorage.removeItem('userToken'); // Remove user token from local storage on log out
    }

  },

  extraReducers: builder => {
    builder

      .addCase(userSignUp.fulfilled, handleOrderCase)
      .addCase(userSignUp.rejected, handleOrderCase)
      .addCase(userSignUp.pending, state => {
        state.loading = true;
      })
      .addCase(userSignIn.fulfilled, handleOrderCase)
      .addCase(userSignIn.rejected, handleOrderCase)
      .addCase(userSignIn.pending, state => {
        state.loading = true;
      })

  },

});

export const { toggleErrorModal, toggleSuccessModal, onSuccess, onLogOut } = userAuth.actions;
export default userAuth.reducer;
