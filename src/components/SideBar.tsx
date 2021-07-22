import "../styles/sidebar.scss";

import { Button } from "../components/Button";
import { IGenreResponse } from "../interfaces/IGenreResponse";

export interface IGenreResponseProps {
  genres: IGenreResponse[];
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  setSelectedGenreId,
}: IGenreResponseProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
