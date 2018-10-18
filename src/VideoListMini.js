import React from 'react';
import Reflux from 'reflux';

import './css/videoListMini.css';
import VideoListMiniItem from './VideoListMiniItem';
import Store from './Store';

class VideoListMini extends Reflux.Component {
	constructor(props) {
		super(props);

		this.store = Store;
		this.storeKeys = ["allVideoMini"];
	}

	render() {
		// console.log("VideoListMini", this);

		return (
			<div className="videoListMini">
				{this.state.allVideoMini.map(video => {
					// console.log("item video", video);
					return (
						<VideoListMiniItem key={video.id.videoId} data={video} />
					);
				})}
			</div>
		);
	}
}

export default VideoListMini;