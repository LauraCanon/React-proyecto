import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlicer/userSlice';
import serviceList from './userSlicer/serviceListSlicer';
import cityList from './userSlicer/cityListSlicer';
import serviceCollab from './userSlicer/searchServiceSlicer';
import fileUserSlicer from './userSlicer/fileUserSlicer';
import citys from './userSlicer/citysSlicer';
import regisCollab from './userSlicer/collabSlicer';
import listColServ from './userSlicer/listServiceCollab';
import listRequestsService from './userSlicer/getServiceSlicer';
import paymentSlicer from './userSlicer/paymentSlicer';
import createServiceSlicer from './userSlicer/createServiceSlicer';
import scheduleServiceSlicer from './userSlicer/scheduleServiceSlicer';

const store = configureStore({
  reducer: {
    user: userSlice,
    service: serviceList,
    createService: createServiceSlicer,
    city: cityList,
    collabService: serviceCollab,
    file: fileUserSlicer,
    ciudad: citys,
    collab: regisCollab,
    listCollabServ: listColServ,
    listRequestsService: listRequestsService,
    payment: paymentSlicer,
    scheduleService: scheduleServiceSlicer,
  },
});

export default store;
