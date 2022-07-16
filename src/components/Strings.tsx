import String from './String';
import { v4 } from 'uuid';

interface StringsInterface {
  difficulty: number;
}

function Strings({ difficulty }: StringsInterface) {
  return (
    <div>
      <div>Difficulty: {difficulty}</div>
      {[...Array(6)].map((v, i) => (
        <String key={v4()} index={i} />
      ))}
    </div>
  );
}

export default Strings;
