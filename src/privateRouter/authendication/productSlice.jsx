import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    cartItems:JSON.parse(localStorage.getItem("cart")) || [],
    totalPrice:0
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addCart:(state,action)=>{
            const product = action.payload;

            const existingProduct = state.cartItems.find((item)=>item.id === product.id);
            if(existingProduct){
                existingProduct.quantity +=1;
            }
            else{
                state.cartItems.push({...product,quantity:1});
            }

            state.totalPrice=state.cartItems.reduce(
            (total,item)=>total + item.price * item.quantity,0
            );

            localStorage.setItem("cart", JSON.stringify(state.cartItems));

        },
        removeFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(item=> item.id !== action.payload);
            localStorage.setItem("cart",JSON.stringify(state.cartItems));
        },
        
        cartClear:(state,action)=>{
            state.cartItems=[];
            state.totalPrice=0;
            localStorage.removeItem("cart");
        }
    }
})

export const { addCart,cartClear,removeFromCart } = productSlice.actions;
export default productSlice.reducer;