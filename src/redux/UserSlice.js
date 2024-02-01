import {createSlice} from "@reduxjs/toolkit";
import {setMemoryUser, getMemoryUser} from "../utils/MemoryUtil";

const initialState = {
    user : getMemoryUser()
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        storeUser : (state, action) => {
            state.user = action.payload;
            setMemoryUser(action.payload);
        },
        deleteUser : (state) => {
            state.user = {};
            setMemoryUser({});
        }
    },
    extraReducers : (builder) => {
    }
})

export const {storeUser, deleteUser} = userSlice.actions

export default userSlice.reducer