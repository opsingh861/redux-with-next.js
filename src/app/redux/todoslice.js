const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    todos: []
}
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
            state.todos.push(data);
        }
    }
});
export const { addTodo } = Slice.actions;
export default Slice.reducer;