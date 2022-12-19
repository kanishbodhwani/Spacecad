import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../global/interfaces";


interface UserState {
    user: User;
}

const initialState: UserState = {
    user: null as any
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        }
    }
})


export const { setUser } = userSlice.actions;
export default userSlice.reducer;

