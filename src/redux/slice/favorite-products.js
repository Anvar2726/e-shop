import { createSlice } from "@reduxjs/toolkit"
import { ESHOP_FAVORITE } from "../../constants";
import { toast } from "react-toastify";


const toastSettings = { autoClose: 3000 };

const initialState = {
  favoriteProducts: JSON.parse(localStorage.getItem(ESHOP_FAVORITE)) || [],
};

export const favoriteProductsSlice = createSlice({
    name: "favoriteProducts",
    initialState,
    reducers:{
        addToFavorite: (state, {payload}) => {
            const isInFavorite = state.favoriteProducts.find((product) => product.id === payload.id);
            if(isInFavorite){
                toast.warning("Product removed from favorites", toastSettings);
                state.favoriteProducts = state.favoriteProducts.filter((product) => product.id !== payload.id);
            }else{
                toast.success("Product added to favorites", toastSettings);
                state.favoriteProducts.push(payload);
            }
            localStorage.setItem(ESHOP_FAVORITE, JSON.stringify(state.favoriteProducts));
        }
    }
})


export const { addToFavorite } = favoriteProductsSlice.actions;

export default favoriteProductsSlice.reducer;