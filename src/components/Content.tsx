import "../styles/content.scss";

import { MovieCard } from "../components/MovieCard";
import { IMovieResponse } from "../interfaces/IMovieResponse";
import { IGenreResponse } from "../interfaces/IGenreResponse";

export interface IGenreResponseProps {
  selectedGenre: IGenreResponse;
  movies: IMovieResponse[];
}

export function Content({ selectedGenre, movies }: IGenreResponseProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
