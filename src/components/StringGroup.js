import String from "./String";
import getStartingNotes from "../utils/noteManager";

const StringGroup = () => {
  return (
    <Container>
      {getStartingNotes().map((v, i) => (
        <String key={i} initNoteIdx={v} />
      ))}
    </Container>
  );
};

export default StringGroup;
