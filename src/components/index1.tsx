import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Video } from '../store/redux/youtube/reducer';
import loadrequestActions from '../store/redux/youtube/actions'
import { ApplicationState } from '../store';

const { loadrequest } = loadrequestActions;

interface StateProps {
   videos: Video[]
}

interface DispatchProps {
    dispatchloadrequest(): void
}

type Props = StateProps & DispatchProps;

const ShowList: React.FC<Props> = ({ videos, dispatchloadrequest }) =>{
    

    console.log(videos);

    useEffect(()=>{
        dispatchloadrequest();
    }, [dispatchloadrequest])

    return (
        <div>

        </div>
    )
}   

const mapStateToProps = (state: ApplicationState) => ({
    videos: state.videos.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ 
    dispatchloadrequest: loadrequest 
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(ShowList)