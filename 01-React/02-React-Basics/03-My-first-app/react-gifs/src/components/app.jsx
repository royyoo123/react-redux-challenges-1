import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import giphy from 'giphy-api';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifs: [],
			selectedGifId: "HKl5QYQF5aOdO"
		}
	}

	search = (query) => {
		giphy('of2zxVURwAIu4NdxnoMH0fMc2vNqueKz').search({
			q: query,
			rating: 'g',
			limit: 10
		}, (err,res) => {
			this.setState({
				gifs: res.data
			})
		})
	}
	render() {
		const gifs = [
			{ id: "HKl5QYQF5aOdO" },
			{ id: "3ohzdIrmkBVi08uouc" }
		];
		return (
			<div>
				<div className="left-scene">
					<SearchBar searchFunction={this.search}/>
					<div className="selected-gif">
						
							<Gif id={this.state.selectedGifId} />
						
					</div>
				</div>
				<div className="right-scene">
					<GifList gifs={this.state.gifs} />
				</div>
			</div>
		)
	}
}

export default App;