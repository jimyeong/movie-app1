import React from 'react';
import './movieItem.scss';
import PropTypes from 'prop-types';
import ReactLinesEllipsis from 'react-lines-ellipsis';

function MovieItem ({title, poster, genres, summary}){
        return (
            <div className="movie">
                <div className="movie__columns">
                    <MoviePoster poster={poster} alt={title} title={title}/>
                </div>
                <div className="movie__columns">
                    <h1 className="movie__title">{title}</h1>
                    <p className="movie__txt1">
                        {
                            genres.map((genre,i) => {
                                return (
                                    <GenreItem genres={genre} key={i}/>
                                )
                            })
                        }
                    </p>
                        <ReactLinesEllipsis
                            text={summary}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                            component='p'
                            className='movie__summary'

                        />
                </div>
            </div>
        )
}
export default MovieItem;

function GenreItem({genres}) {
    return(
        <span className="moives__genre">{genres}</span>
    )
}


function MoviePoster({ title, poster}) {
    return(
        <img src={poster} alt={title} title={title}/>
    )

}

MovieItem.PropTypes ={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};
GenreItem.PropTypes ={
    genres: PropTypes.string.isRequired
};