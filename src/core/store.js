import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import themeReducer from '../common/themeSlice';
import saga from './saga';
import personalHomepageReducer from '../features/personalHomepage/personalHomepageSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
        theme: themeReducer,
    },
    middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;