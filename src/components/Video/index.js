import React from 'react'


const Video = ({ title, videoId }) => {

    return (
        <div>
            <iframe
                title={title}
                width="560" 
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            />
        </div>
    )
}

export default Video;