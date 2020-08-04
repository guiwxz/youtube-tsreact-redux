import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import loadrequestActions from '../store/redux/youtube/actions'
import Video from './Video'


import './styles.css'

const { loadrequest } = loadrequestActions;

const ShowList = ({ state, loadrequest }) => {
    const [videoOn, setVideoOn] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const { data, loading, error } = state
    
    console.log(data)

    function handleChangeVideo(title, id){
        setVideoOn(id)
        setVideoTitle(title)
    }

    useEffect(() => {
        loadrequest();
    }, [loadrequest])

    return (
        <div>
            {loading ? <p>loading</p> : (
                <>
                    {error ? <p>{error}</p> : (
                        <div className='main-div'>
                            <div>
                                <Video title={videoTitle} videoId={videoOn} />
                            </div>
                            <div>
                                {data.map((video) => (
                                    <div>
                                        <button onClick={() => handleChangeVideo(video.snippet.title, video.id.videoId)}>
                                            <img src={video.snippet.thumbnails.high.url} alt={video} height={200} width={300}/>
                                            <h2>{video.snippet.title}</h2>
                                        </button>
                                        <p>{video.snippet.channelTitle}</p>
                                        <p>{video.snippet.publishedAt}</p>                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}              
                </>
                
            )}
        </div>
    )
}   

const mapStateToProps = (state) => ({
    state: state.appReducer,
})
/*

*/


export default connect(mapStateToProps, { loadrequest } )(ShowList)