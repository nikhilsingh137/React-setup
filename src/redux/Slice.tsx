import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAbout, IHeader, IPricing, IService } from "./Article";

export const fetchHeader = createAsyncThunk("fetchHeader", async () => {
  const headerItem = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/header.json"
  );
  return headerItem.json();
});

export const fetchAbout = createAsyncThunk("fetchAbout", async () => {
  const aboutItem = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/about.json"
  );
  return aboutItem.json();
});

export const fetchService = createAsyncThunk("fetchService", async () => {
  const serviceItem = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/service.json"
  );
  return serviceItem.json();
});

export const fetchPricing = createAsyncThunk("fetchPricing", async () => {
  const pricingItem = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/pricing.json"
  );
  return pricingItem.json();
});

interface IType {
  isloading: boolean;
  headerData: IHeader | null;
  error: boolean;
  aboutItem: Array<IAbout>;
  serviceItem: IService | null;
  pricingItem: IPricing | null;
}

export const initialState: IType = {
  isloading: false,
  headerData: null,
  error: false,
  aboutItem: [],
  serviceItem: null,
  pricingItem: null,
};

const Slice = createSlice({
  name: "APi",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHeader.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchHeader.fulfilled, (state, action) => {
      state.headerData = action.payload;
    });
    builder.addCase(fetchAbout.fulfilled, (state, action) => {
      state.aboutItem = action.payload;
    });
    builder.addCase(fetchService.fulfilled, (state, action) => {
      state.serviceItem = action.payload;
    });
    builder.addCase(fetchPricing.fulfilled, (state, action) => {
      state.pricingItem = action.payload;
    });
    builder.addCase(fetchHeader.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default Slice.reducer;
