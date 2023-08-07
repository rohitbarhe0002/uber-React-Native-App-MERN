import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {OrdersApi} from '../../apis/orderApis/orderApi';

export const createOrder = createAsyncThunk(
  'userOrders/createOrder',
  async userData => {
    try {
      await OrdersApi.createOrder(userData);
      const updatedOrders = await OrdersApi.getAllOrder();
      return updatedOrders;
    } catch (error) {
      throw Error(error);
    }
  },
);

export const fetchAllOrder = createAsyncThunk(
  'userOrders/fetchAllOrder',
  async () => {
    try {
      const orders = await OrdersApi.getAllOrder();
      return orders;
    } catch (error) {
      throw Error(error);
    }
  },
);

export const removeOrder = createAsyncThunk(
  'userOrders/removeOrder',
  async orderId => {
    try {
      await OrdersApi.deleteOrders(orderId);
      const updatedOrders = await OrdersApi.getAllOrder();
      return updatedOrders;
    } catch (error) {
      throw Error(error);
    }
  },
);

export const updateOrder = createAsyncThunk(
  'userOrders/updateOrder',
  async (orderId,userUpdateItem) => {
    try {
      await OrdersApi.updateOrder(orderId,userUpdateItem);
      
      const updatedOrders = await OrdersApi.getAllOrder();
      return updatedOrders;
    } catch (error) {
      throw Error(error);
    }
  },
);


const handleOrderCase = (state, action) => {
  state.loading = false;
  state.userOrders = action.payload;
  state.error = action.error ? action.error.message : null;
  state.openErrorModal = action.error ? true : false; // Set to true if there's an error, false otherwise

  if (action.type === removeOrder.fulfilled.type) {
    state.isSuccess = true;
    state.successMsg = "item is removed successfully";
    state.openErrorModal = false;
  } else if (action.type === fetchAllOrder.fulfilled.type) {
    state.isSuccess = true;
    state.openErrorModal = false;
    state.successMsg = "data is successfully fetched";
    state.apiResponse = null;
  } else {
    state.isSuccess = false;
    state.successMsg = "";
    state.apiResponse = null;
    state.openErrorModal = action.error ? true : false;
  }
};

const userOrders = createSlice({
  name: 'userOrders',
  initialState: {
    userOrders: [],
    loading: false,
    error: null,
    openErrorModal:false,
    isSuccess:false,
    successMsg:'',
  },

  reducers: {
    toggleErrorModal: (state,action) => {
      state.openErrorModal = action.payload;
    },
    toggleSuccessModal: (state,action) => {
      state.isSuccess = action.payload;
    },
   onSuccess: (state,action) => {
      state.successMsg = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllOrder.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAllOrder.fulfilled, (state, action) => {
        handleOrderCase(state, action);
      })
      .addCase(fetchAllOrder.rejected, (state, action) => {
        handleOrderCase(state, action);
      })
      .addCase(removeOrder.pending, state => {
        state.loading = true;
      })
      .addCase(removeOrder.fulfilled, (state, action) => {
        handleOrderCase(state, action);
      })
      .addCase(removeOrder.rejected, (state, action) => {
        handleOrderCase(state, action);
      })
      .addCase(createOrder.pending, state => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        handleOrderCase(state, action);
      })
      .addCase(createOrder.rejected, (state, action) => {
        handleOrderCase(state, action);
      })
      .addCase(updateOrder.pending, state => {
        state.loading = true;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        handleOrderCase(state, action);
      })
      .addCase(updateOrder.rejected, (state, action) => {
        handleOrderCase(state, action);
      });
  },
  
});

export const { toggleErrorModal,toggleSuccessModal,onSuccess } = userOrders.actions;
export default userOrders.reducer;
