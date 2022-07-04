import String from './String';

function Strings() {
  return (
    <div>
      {[...Array(6)].map(() => (
        <String />
      ))}
    </div>
  );
}

export default Strings;
