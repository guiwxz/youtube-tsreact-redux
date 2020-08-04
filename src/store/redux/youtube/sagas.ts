import actions from './actions';
import { put, call, takeLatest } from 'redux-saga/effects'
import * as api from '../../api'

export function* load(){
    yield takeLatest(actions.LOAD_REQUEST, function*( ){
        
        try{                 
            const response = yield call(api.getChannelVideos, 'UCSfwM5u0Kce6Cce8_S72olg');   
            
            yield put({
                type: actions.LOAD_SUCCESS,
                payload: response
            })
        }
        catch(e){
            yield put({
                type: actions.LOAD_FAILURE,
                payload: e.message
            })
        }
    })
}
