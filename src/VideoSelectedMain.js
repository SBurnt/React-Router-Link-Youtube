import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router-dom';

import Store from './Store';
import './css/videoSelectedMain.css';

class VideoSelectedMain extends Reflux.Component {
	constructor(props) {
		// console.log("propsVideoSelectedMain", props);
		super(props);

		this.store = Store;
		this.storeKeys = ["allVideoMini"]; // выбираем определенные данные из хранилища
	}

	render() {
		// console.log("this.props", this.props);
		// console.log("this.props.match.params.videoId", this.state.allVideoMini, this.props.match.params.videoId);

		// взять параметр из строки адреса
		let videoIdFromUrl = this.props.match.params.videoId;
		// console.log("videoIdFromUrl", videoIdFromUrl);

		// найти необходимое видеоID среди всех
		let currentVideo = this.state.allVideoMini.filter(video => {
			return video.id.videoId === videoIdFromUrl;
		});
		// console.log("currentVideo", currentVideo);

		if (this.state.allVideoMini === 0) {
			return (<h2>Видео не существует</h2>);
		}

		let video = currentVideo[0];
		// console.log("video35", video);

		let videoIdMini = "https://www.youtube.com/embed/" + video.id.videoId;

		return (
			<div className="videoSelectedMain">
				<header className="header-videoSelectedMain">
					<Link to='/'>Назад на главную</Link>
					<button onClick={() => { this.props.history.goBack() }}>Назад на предыд страницу</button>
				</header>
				<div>
					<iframe src={videoIdMini} allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
			</div>
		);
	}
}

export default VideoSelectedMain;