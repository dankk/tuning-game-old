export const handleSubmit = (selected, correct) => {
  console.log(selected, correct);
  const result = selected.toString() === correct.toString();
  if (result) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
};
