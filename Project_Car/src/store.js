import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/Auth/redux/reducers/counterReducer";
import authReducer from "./modules/Auth/slices/authSlices";
import busTicketReducer from "./modules/Auth/redux/reducers/busTicketReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    busTicket: busTicketReducer,
  },
});
export default store;
