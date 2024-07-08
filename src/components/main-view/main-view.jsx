import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {
    const [movies, SetMovies] = useState([
        {
            id: 1,
            Title: 'Alien',
            Director: 'Ridley Scott',
            Genre:'Horror',
            ImageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Alien_movie_poster.jpg/220px-Alien_movie_poster.jpg'
        },
        {
            id: 2,
            Title: 'Aliens',
            Director: 'James Cameron',
            Genre: 'Action',
            ImageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg'
        },
        {
            id: 3,
            Title: 'The Mummy',
            Director: 'Stephen Sommers',
            Genre: 'Adventure',
            ImageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/68/The_mummy.jpg/220px-The_mummy.jpg'
        },
]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};