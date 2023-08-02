import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
//it will create a store
interface userStateValue {
    username: string;
}
interface userState {
    value: userStateValue;
}
const initialState = { value: { username: " " } } as userState;
const userSlice = createSlice({
    name: "user",
    initialState: { value: { username: " " } },
    reducers: {
        login: (state: userState, action: PayloadAction<userStateValue>) => {
            //state holds previous state and action is place where we will send modified state
            state.value = action.payload;
        },
        logout: (state: userState) => {
            state.value = initialState.value;
        }
    }

});
export const { login, logout } = userSlice.actions;
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});