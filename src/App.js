import React, { Component } from 'react';
import MovieItem from './Components/Movies/MovieItem';
import './App.css';



class App extends Component {


    state = {
        pictures : []

    }


    componentDidMount() {
        this._getApi();

    }

    componentWillMount() {

    }

    _getApi = () => {
        return fetch('https://api.unsplash.com/photos/?client_id=43d90a47ffc03b516322f77b497a9e7397f55db46389a658ed4bb074aa5c2c41')
            .then(res => res.json())
            .then(potato => {
                this.setState({
                    pictures : potato
                })
            })
            .catch(err => console.log(err))
    }
    _renderItems = () => {
        const photoItem =
        this.state.pictures.map((picture,i) => {
          return <MovieItem photo={picture.urls.thumb}
                            name={picture.user.name}
                            key={i}/>
        })
        return photoItem
    }
    render() {
        console.log(this.state.pictures);

    return (
      <div className="App">
          {this.state ? this._renderItems() : 'loading'}
      </div>
    );
  }
}

export default App;
