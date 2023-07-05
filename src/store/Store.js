import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './slices/roomsSlice';
import loginReducer from './slices/loginSlice';

export const store = configureStore({
    reducer: {
        roomSlice: roomReducer,
        loginSlice: loginReducer
        // bookingsSlice: bookingsReducer,
        // usersSlice : usersReducer,
    },
});