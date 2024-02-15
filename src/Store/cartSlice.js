import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState:{
        cart:[]
    },
    name:"cart",

    reducers:{
        add:(state, action)=>{
            state.cart =  [...state.cart, action.payload]
        },
        remove:(state, action)=>{
            state.cart = state.cart.filter((ele)=> ele.id !== action.payload)
        }
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer


