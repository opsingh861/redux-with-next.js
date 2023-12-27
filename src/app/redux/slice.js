

const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    apiUser: [],
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
};

export const fetchApiUser = createAsyncThunk("fetchApiUser", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
});


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
    },
    extraReducers :(builder) => {
        builder.addCase(fetchApiUser.fulfilled, (state, action) => {
            state.apiUser = action.payload;
        });
    }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
