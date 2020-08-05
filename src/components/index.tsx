import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import loadrequestActions from '../store/redux/youtube/actions'
import Spinner  from './Spinner'
import Video from './Video'

import { Container, VideosList, VideoContainer, Item, Button, NoVideo } from './styles'

import { VideosState } from '../store/redux/youtube/reducer'
const { loadrequest } = loadrequestActions;

interface IHome {
    state: VideosState;
    loadrequest(): void
}

const ShowList: React.FC<IHome> = ({ state, loadrequest }) => {
    const [videoOn, setVideoOn] = useState<string>('');
    const [videoTitle, setVideoTitle] = useState<string>('');
    const [videoAt, setVideoAt] = useState<string>('');
    const [channel, setChannel] = useState<string>('')

    const { data, loading, error } = state
    
    console.log(data)

    function handleChangeVideo(title: string, id: string, at: string, channel: string){
        setVideoOn(id)
        setVideoTitle(title)
        setChannel(channel)
        setVideoAt(at)
    }

    useEffect(() => {
        loadrequest();
    }, [loadrequest])

    return (
        <>
            {loading ? (
                <div style={{height: '100vh', width: '100vw', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Spinner size={200}/>
                </div>
            ) : (
                <>
                    {error ? <p>{error}</p> : (
                        <>
                            {data ? (
                                <Container>                     
                                    <VideoContainer>
                                        
                                        {videoOn ? (
                                            <>
                                                <Video title={videoTitle} videoId={videoOn} />
                                                <h2 style={{fontSize: '17px', marginBottom: '10px', marginTop: '15px', borderBottom: 'solid #ccc 1px', paddingBottom: '20px'}}>{videoTitle}</h2>
                                                
                                                <h4>{channel}</h4>
                                                <h4>Publicado em: {videoAt}</h4>
                                            </>
                                            ) : (                                          
                                            <NoVideo />                                                                                
                                        )}
                                           
                                    </VideoContainer>
                                    <VideosList>
                                        {data.map((video: any) => (
                                            <Item>
                                                <Button onClick={() => handleChangeVideo(video.snippet.title, video.id.videoId, video.snippet.publishedAt, video.snippet.channelTitle)}>
                                                    <img src={video.snippet.thumbnails.high.url} alt={video} height={200} width={300}/>
                                                    <h3>{video.snippet.title}</h3>
                                                </Button>                                                                        
                                            </Item>
                                        ))}
                                    </VideosList>
                                </Container>
                            ): (
                                <p>Não foi possivel conectar api</p>
                            )}
                        </>
                    )}              
                </>
                
            )}
        </>
    )
}   

const mapStateToProps = (state: any) => ({
    state: state.appReducer,
})


export default connect(mapStateToProps, { loadrequest } )(ShowList)