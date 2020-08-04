import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { VideosState } from './redux/youtube/reducer';

import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga'

export interface ApplicationState {
    videos: VideosState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;