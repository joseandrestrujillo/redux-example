import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface DataState {
    speakers: Array<string>,
    schedule: Array<string>,
    partners: Array<string>
}

const initialState: DataState = {
    speakers: [],
    schedule: [],
    partners: []
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataState>) => {   
        return action.payload;
    }
  }
})

export const { setData } = dataSlice.actions

export const selectData = (state: RootState) => state.data

export default dataSlice.reducer