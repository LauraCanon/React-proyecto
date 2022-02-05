import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlicer/userSlice';
import serviceList from './userSlicer/serviceListSlicer';
import cityList from './userSlicer/cityListSlicer';
import serviceCollab from './userSlicer/searchServiceSlicer';

const store = configureStore({
  reducer: {
    user: userSlice,
    service: serviceList,
    city: cityList,
    collabService: serviceCollab,
  },
});

export default store;
