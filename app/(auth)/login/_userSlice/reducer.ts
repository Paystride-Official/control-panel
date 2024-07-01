import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { User } from "@/types/types";
import { getItemFromStorage } from "@/Utils/localStorage";

// Define a type for the slice state
interface inintialState {
  user: User | undefined;
}

// Define the initial state using that type
const initialState: inintialState = {
  user: getItemFromStorage("user-info") || {
    id: "",
    name: "",
    email: "",
    business_name: "",
    phone_number: "",
    role: "",
    merchant_id: null,
    referred_by: null,
    otp: "",
    email_verified_at: null,
    created_at: "",
    updated_at: "",
    isLiteUser: false,
    customerID: null,
    customerCode: null,
  },
};

export const counterSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updataUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { updataUser } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
