import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi } from '../../apis/AuthApis/AuthorApi';

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
  state.error = action.error ? action.error.message : null;
  state.openErrorModal = action.error ? true : false;
  if (action.type === userSignUp.fulfilled.type) {
 
  }
  if (action.type === userSignIn.fulfilled.type) {
    state.userCredential = action.payload;
    state.userToken = action?.payload?.token;
  }
};

const userAuth = createSlice({
  name: 'userAuth',
  initialState: {
    userCredential: '',
    userToken: '',
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
      localStorage.removeItem('userToken'); 
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
