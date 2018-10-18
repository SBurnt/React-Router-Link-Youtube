import React from 'react';
import { Link } from 'react-router-dom';

import './css/videoListMini.css';
import { getPrettyDateToday } from './services';

function VideoListMiniItem(props) {
  // console.log("VideoListMiniItem", props);

  let videoId = props.data.id.videoId;
  // console.log("klic", videoId);

  return (
    <div className="videoListMiniItem">
      <div id="img-block">
        <Link to={`/videos/${videoId}`}>
          <img src={props.data.snippet.thumbnails.medium.url} alt="" />
        </Link>
      </div>
      <div className="videoMiniItemInfo">
        <div>
          <div>
            <h3>{props.data.snippet.title}
            </h3>
            <div className="video-meta-block">
              {props.data.snippet.channelTitle} ۰ Опубликовано: {getPrettyDateToday(props.data.snippet.publishedAt)}
            </div>
          </div>
          <div className="description-text">
            {props.data.snippet.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoListMiniItem;