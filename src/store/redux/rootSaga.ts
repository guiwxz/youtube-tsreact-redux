import { all } from 'redux-saga/effects'
import { load } from './youtube/sagas'

export default function* rootSaga(){
    yield all([
        load()
    ])
}