import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video)=>{
    return(
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video} />
    );

  });
  return (
    <ul className="col-md4 list-group">
        {videoItems}
    </ul>
  );
};
/*
import VideoListItem from './video_list_item';

const VideoList = (props)=>{
  const VideoItems = props.videos.map(
      (video) => {
      return <VideoListItem key={video.etag} video={video}  />
  });
  return (
    <ul className="col-md4 list-group">
      {VideoItems}
    </ul>
  );
};

export default VideoList;
*/
export default VideoList;
