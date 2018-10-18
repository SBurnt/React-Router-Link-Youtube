import React from 'react';

import './css/searchForm.css';
import actions from './actions';

function SearchForm() {
	return (
		<header className="header-searchForm">
			{/* https://learn-reactjs.ru/basics/forms */}
			<form onSubmit={(e) => { actions.componentDidMount(e); e.target.reset() }}>
				<input type="text" id="inputSearch"
					placeholder="Поиск видео" onChange={(e) => { actions.getInfoInput(e) }} />
				<button type="submit" id="btnSearch"></button>
			</form>
		</header>
	)
}

export default SearchForm;