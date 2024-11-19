import useGeneres, { Genre } from "../hooks/useGeneres";

const GeneresList = () => {
  const { genres, error, isLoading } = useGeneres();
  return (
    <ul>
      {genres.map((genere: Genre) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};

export default GeneresList;
