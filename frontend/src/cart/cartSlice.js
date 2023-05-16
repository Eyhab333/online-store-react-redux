import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
    {
      id: 1,
      productName: "T-shirt",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elite. Sequi, perferendis beatae asperiores.",
      price: 199,
      imageLink:
        "https://res.cloudinary.com/dbtklbenn/image/upload/v1683991215/online-store/Photo_by_Yash_Parashar_on_Unsplash3_g29dsu.jpg",
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      alert('doneeeeeeeee')
    },
    increaseQuantity: (state, action) => {
      alert('doneeeeeeeee')
    },
    decreaseQuantity: (state, action) => {
      alert('doneeeeeeeee')
    },
    deleteProduct: (state, action) => {
      alert('doneeeeeeeee')
    },
  },
});

// export const vvvvvvvv = (state) => state?.cart?.id;

export const {addToCart, increaseQuantity, decreaseQuantity, deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;