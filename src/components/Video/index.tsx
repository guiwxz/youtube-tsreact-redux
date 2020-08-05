import React from 'react'

interface Props {
    title: string;
    videoId: string;
}

const Video: React.FC<Props> = ({ title, videoId }) => {

    return (
        <>
            <iframe 
                title={title}
                width="630" 
                height="350"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            />        
        </>
    )
}

export default Video;