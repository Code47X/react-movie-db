import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

// Pure components do top level checking only (ie. if movies[0].title changed, it would not re-render)
class MoviesList extends PureComponent {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=83f194312c17cd03044fda8403c66cb5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await result.json();

      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
