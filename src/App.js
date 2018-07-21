import React, { Component } from 'react';
import MovieItem from './Components/Movies/MovieItem';
import './App.css';



class App extends Component {
    state ={

    };

    componentDidMount() {
        this._getArray()
    }
    componentWillMount(){

    }
    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
            .then( res => res.json())
            .then(json => json.data.movies)
            .catch(err => {
                console.log(err)
            })
    }
    _getArray = async () => {
        const movies = await this._callApi();
        this.setState({
            movies
        })
    };

    _renderItems = () => {

        const movieItem = this.state.movies.map((movie,i) => {
            return (<MovieItem title={movie.title}
                               poster={movie.medium_cover_image}
                               genres={movie.genres}
                               summary={movie.summary}
                               key={i}
            />)
        });
        return movieItem

    }

    render() {
        console.log(this.state.movies)
    return (
      <div className="App">
          {this.state.movies ? this._renderItems() : 'loading'}
      </div>
    );
  }
}

export default App;
