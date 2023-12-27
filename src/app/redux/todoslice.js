const { createSlice } = require("@reduxjs/toolkit");

const initialState = []
const Slice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const data = {
                id: action.payload.id,
                title: action.payload.title,
                completed: false
            }
            state.push(data);
        }
    }
});
export const { addTodo } = Slice.actions;
export default Slice.reducer;