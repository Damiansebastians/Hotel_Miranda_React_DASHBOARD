import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import bookingsReducer from './slices/bookingSlice';
import roomReducer from './slices/roomsSlice';
import usersReducer from './slices/userSlice';
import contactSlice from './slices/contactSlice';

export const store = configureStore({
    reducer: {
        loginSlice: loginReducer,
        bookingsSlice: bookingsReducer,
        roomSlice: roomReducer,
        usersSlice: usersReducer,
        contactsSlice: contactSlice 
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch