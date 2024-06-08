import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GeneralState {
    postList: Array<any>
    charaterDetail: Object
}

const initialState: GeneralState = {
    postList: [],
    charaterDetail: {}
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        updatePostList: (state, action: PayloadAction<Array<any>>) => {
            state.postList = action.payload
        },
        removePostById: (state, action: PayloadAction<Number>) => {
            state.postList = state.postList.filter((item: any) => item.id != action.payload)
        },
    },
})

export const { updatePostList, removePostById } = generalSlice.actions

export default generalSlice.reducer