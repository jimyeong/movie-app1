import React from 'react';
import './movieItem.scss';

class MovieItem extends React.Component{
    render(){
        return (
            <div>

                <h1>{this.props.name}</h1>
                <img src={this.props.photo} alt="poster"/>

            </div>
        )
    }



}
export default MovieItem;