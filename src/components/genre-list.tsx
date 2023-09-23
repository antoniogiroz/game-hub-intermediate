import { useGenres } from "../hooks/use-genres";

export function GenreList() {
  const { genres, error, isLoading } = useGenres();

  return (
    <ul>
      {isLoading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
