import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts")
    ? JSON.parse(localStorage.getItem("selectedProducts"))
    : [],
  selectedProductsID: localStorage.getItem("selectedProductsID")
    ? JSON.parse(localStorage.getItem("selectedProductsID"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productAndQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productAndQuantity);
      state.selectedProductsID.push(action.payload.id);

      localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts));
      localStorage.setItem("selectedProductsID", JSON.stringify(state.selectedProductsID));
    },









    increaseQuantity: (state, action) => {
      const increasedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      increasedProduct.quantity += 1;

      localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts));
    },






    decreaseQuantity: (state, action) => {
      const decreasedProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      decreasedProduct.quantity -= 1;
      if (decreasedProduct.quantity === 0) {
        const newarr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });

        const newarrID = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.selectedProducts = newarr;
        state.selectedProductsID = newarrID;

        localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts));
      localStorage.setItem("selectedProductsID", JSON.stringify(state.selectedProductsID));
      }
    },










    deleteProduct: (state, action) => {
      const newarr2 = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      const newarr22 = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.selectedProducts = newarr2;
      state.selectedProductsID = newarr22;

      localStorage.setItem("selectedProducts", JSON.stringify(state.selectedProducts));
      localStorage.setItem("selectedProductsID", JSON.stringify(state.selectedProductsID));
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
