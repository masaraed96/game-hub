import useGeneres, { Genre } from "../hooks/useGeneres";

const GeneresList = () => {
  const { data, error, isLoading } = useGeneres();
  return (
    <ul>
      {data.map((genere: Genre) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};

export default GeneresList;
