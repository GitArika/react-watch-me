import { useEffect, useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { api } from "./services/api";

import "./styles/global.scss";

import { IMovieResponse } from "./interfaces/IMovieResponse";
import { IGenreResponse } from "./interfaces/IGenreResponse";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<IGenreResponse[]>([]);

  const [movies, setMovies] = useState<IMovieResponse[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponse>(
    {} as IGenreResponse
  );

  useEffect(() => {
    api.get<IGenreResponse[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<IMovieResponse[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api.get<IGenreResponse>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content selectedGenre={selectedGenre} movies={movies} />
    </div>
  );
}
