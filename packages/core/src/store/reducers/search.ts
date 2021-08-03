import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialSearchState = {
  filteredData: any[];
  searchInput: string;
};

const initialState: InitialSearchState = {
  filteredData: [],
  searchInput: ''
};

export const saveUserInput = createAsyncThunk<string, string>('search/saveUserInput', async (userInput: string) => {
  return userInput;
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveFilteredData(state, { payload }: PayloadAction<any[]>) {
      state.filteredData = payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(saveUserInput.fulfilled, (state, { payload }) => {
      state.searchInput = payload;
    });
  }
});

export const { saveFilteredData } = searchSlice.actions;

export default searchSlice.reducer;
