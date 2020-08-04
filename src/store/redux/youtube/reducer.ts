import actions from './actions'
import { Reducer } from 'redux'

export interface Video {
    id: number,
    video: string
}

export interface VideosState {
    data: Video[],
    loading: boolean,
    error: boolean,
}

const INITIAL_STATE: VideosState = {
    data: [],
    loading: false,
    error: false,
}

const appReducer: Reducer<VideosState> = (state = INITIAL_STATE, action: any) => {
    switch(action.type){
        case actions.LOAD_REQUEST:
            return { ...state, loading: true }
        
        case actions.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.items }

        case actions.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }

        default:
            return { ...state };
    }
}

export default appReducer
