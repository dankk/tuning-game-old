interface StringInterface {
  index: number;
}

function String({ index }: StringInterface) {
  return <div>string: {index}</div>;
}

export default String;
