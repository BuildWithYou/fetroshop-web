import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProfileState {
    isEdit: boolean;
    image: string;
    name: string;
    dob: string | null | undefined;
    gender: string;
    phoneNumber: string;
    email: string;
}

const initialState: ProfileState = {
    isEdit: false,
    image: "",
    name: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    email: ""
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        toggleEdit: (state) => {
            state.isEdit = !state.isEdit;
        },
        setImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setDob: (state, action: PayloadAction<string>) => {
            state.dob = action.payload;
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});

export const {
    toggleEdit,
    setDob,
    setEmail,
    setGender,
    setImage,
    setName,
    setPhoneNumber
} = profileSlice.actions;

export default profileSlice.reducer;