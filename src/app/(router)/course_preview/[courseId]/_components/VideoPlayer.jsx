import React from 'react'

const VideoPlayer = ({videoUrl, poster}) => {
  return (
    <div className='flex justify-center'>
      <video
      width={600}
      height={250}
      controls
      key={videoUrl}
      className='rounded-[7px] '
      poster={poster}
      > 
        <source src={videoUrl} type='video/mp4'/>
      </video>
    </div>
  )
}

export default VideoPlayer