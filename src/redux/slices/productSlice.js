import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: null, // ✅ Ensure we store a single product
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => { // ✅ New action for a single product
      state.product = action.payload;
    },
  },
});

export const { setProducts, setProduct } = productSlice.actions;
export default productSlice.reducer;
