import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=83f194312c17cd03044fda8403c66cb5&language=en-US`);
      const movie = await result.json();

      this.setState({
        movie, // shorthand for movie: movie assigning
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state; // shorthand for const movie = this.state.movie (90% sure)
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt="{movie.title}" />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
