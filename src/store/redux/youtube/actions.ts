import { Video } from './reducer'

const actions = {
    LOAD_REQUEST: 'LOAD_REQUEST',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_FAILURE: 'LOAD_FAILURE',

    loadrequest: () => ({
        type: actions.LOAD_REQUEST
    }),

    loadsuccess: (payload: Video) => ({
        type: actions.LOAD_SUCCESS,
        payload
    }),

    loadfailure: () => ({
        type: actions.LOAD_FAILURE
    })
}

export default actions;


/*
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { VideosState } from '../store/redux/youtube/reducer';
import loadrequestActions from '../store/redux/youtube/actions'
import { ApplicationState } from '../store';

const { loadrequest } = loadrequestActions;

interface StateProps {
   state: VideosState
}

interface DispatchProps {
    dispatchloadrequest(): void
}

type Props = StateProps & DispatchProps

const ShowList: React.FC<Props> = ({ state, dispatchloadrequest }) =>{
    const {data, loading, error} = state;

    console.log(state);

    useEffect(()=>{
        dispatchloadrequest();
    })

    return (
        <div>

        </div>
    )
}   

const mapStateToProps = (state: ApplicationState) => ({
    state: state.videos.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ 
    dispatchloadrequest: loadrequest 
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(ShowList)
*/