import Reflux from 'reflux';
import axios from "axios";

import actions from './actions';

class Store extends Reflux.Store {
	constructor(props) {
		super(props);
		this.state = {
			allVideoMini: [],
			selected: '',
			searchInput: '',
		}
		// подключение всех действий к хранилищу данных
		this.listenables = actions;
	}

	onGetInfoInput(e) {
		let value = e.target.value;
		this.setState({ searchInput: value })
	}

	onSelectVideoMini(video) {
		console.log("Видео выбрано", video);
		this.setState({ selected: video })
	}

	componentWillMount() {
		console.log("компонента БУДЕТ вмонтирована");
	}

	onComponentDidMount(e) {
		e.preventDefault();
		// console.log("компонента УЖЕ вмонтирована", this.state);
		// ajax для получения данных, чтобы их можно было использовать в компоненте

		// const searchInput = this.state;

		// Math.random().toString(36).slice(-5);
		// Math.random().toString(36).substr(2, 5);

		axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBcpMgRXgZ04YDspTwhV0k81OMOB-I8Ypw&q=" + this.state.searchInput + "&type=video")
			.then((result) => {
				// console.log("axios", result);
				this.setState({ allVideoMini: result.data.items });
			});
	}

	componentDidUpdate() {
		console.log("компонента УЖЕ обновлена");
		// ajax на обновление информации в БД (back-end)
	}
}

export default Store;
