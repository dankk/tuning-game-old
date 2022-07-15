import String from './String';

interface StringsInterface {
  difficulty: number;
}

function Strings({ difficulty }: StringsInterface) {
  return (
    <div>
      <div>Difficulty: {difficulty}</div>
      {[...Array(6)].map((v, i) => (
        <String key={i} /> //change key
      ))}
    </div>
  );
}

export default Strings;
