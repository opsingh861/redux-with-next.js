const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
};

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data =
            {
                id: nanoid(),
                name: action.payload,
            }
            state.users.push(data);
            const userData = JSON.stringify(current(state.users));
            localStorage.setItem('users', userData);
        },

        removeUser: (state, action) => {
            const data = state.users.filter((user) => user.id !== action.payload);
            state.users = data;
            var storedData = localStorage.getItem('users');
            var userData = JSON.parse(storedData);
            userData = userData.filter((user) => user.id !== action.payload);
            const newData = JSON.stringify(userData);
            localStorage.setItem('users', newData);

        }
    }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
