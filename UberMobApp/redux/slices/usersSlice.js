import { createSlice } from "@reduxjs/toolkit";
import { OrdersApi } from "../../apis/orderApis/orderApi";
const userOrders = createSlice({
  name: "user",
  initialState: {
    userOrders: [],
    testing: "",
    error: false,
  },
  reducers: {
    getAllOrder: (state, action) => {
      state.userOrders = action.payload;
    },
    removeOrders: (state, action) => {
        OrdersApi.deleteOrders(orderId)
        .then((res) => {
          OrdersApi.getAllOrder()
            .then((orders) => {
              setUserOrder(orders);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
       state.userOrders = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getAllOrder, loginSuccess, loginFailure } = userOrders.actions;
export default userOrders.reducer; // Note the change here from .actions to .reducer
