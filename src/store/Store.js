import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import bookingsReducer from './slices/bookingSlice';
import roomReducer from './slices/roomsSlice';
import usersReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        loginSlice: loginReducer,
        bookingsSlice: bookingsReducer,
        roomSlice: roomReducer,
        usersSlice: usersReducer,
    },
});