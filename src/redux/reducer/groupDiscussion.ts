import { createSlice } from '@reduxjs/toolkit';

export const groupDiscussionSlice = createSlice({
    name: 'groupDiscussionData',
    initialState: {
        groupDiscussionData: [],
    },
    reducers: {
        setDiscussionData(state, action) {
            const data = action.payload;
            return { ...state, groupDiscussionData: data };
        },
        removeDiscussionData(state, action) {
            return { ...state, groupDiscussionData: [] };
        },
    },
});



export const { setDiscussionData, removeDiscussionData } = groupDiscussionSlice.actions;

export default groupDiscussionSlice.reducer;
