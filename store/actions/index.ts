import { Action, AnyAction, Dispatch, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { DataState, setData } from "../dataSlice"

export const fetchData = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const responseApi = await axios.get('http://localhost:3000/api/data')
        dispatch(setData({
            speakers: responseApi.data['speakers'],
            schedule: responseApi.data['schedule'],
            partners: responseApi.data['partners']
        }))
    } catch (error) {
        dispatch(setData({
            speakers: [],
            schedule: [],
            partners: []
        }))
    }
}