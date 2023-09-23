import { useGenres } from "../hooks/use-genres";

export function GenreList() {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {isLoading && <li>Loading...</li>}

      {error && <li>{error}</li>}

      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
