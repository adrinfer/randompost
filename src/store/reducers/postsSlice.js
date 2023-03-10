import { createSlice } from '@reduxjs/toolkit'


const initialState = [{ a: 'as' }]

const postSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addPost (state, action) {
            state.push(action.payload)
        }
    }
})

export const { addPost } = postSlice.actions

export default postSlice.reducer