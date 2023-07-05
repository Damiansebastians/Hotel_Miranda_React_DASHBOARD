import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './slices/roomsSlice';

export const store = configureStore({
    reducer: {
        roomSlice: roomReducer,
        // bookingsSlice: bookingsReducer,
        // usersSlice : usersReducer,
    },
});