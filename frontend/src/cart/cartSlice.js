import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [],
  selectedProductsID: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productAndQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productAndQuantity);
      state.selectedProductsID.push(action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const increasedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increasedProduct.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const decreasedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      decreasedProduct.quantity -= 1;
      if (decreasedProduct.quantity === 0) {
        const newarr =  state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        })
        state.selectedProducts = newarr;

        const newarrID =  state.selectedProductsID.filter((item) => {
          return item.id !== action.payload.id;
        })
        state.selectedProductsID = newarrID;
      }
    },
    deleteProduct: (state, action) => {
      const newarr2 =  state.selectedProducts.filter((item) => {
        return item !== action.payload.id;
      })
      state.selectedProducts = newarr2;

      
    }
  },
});

// export const vvvvvvvv = (state) => state?.cart?.id;

export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
