export const handleSubmit = (selected, correct) => {
  console.log(selected, correct);
  if (!selected || !correct) return;
  const result = selected.toString() === correct.toString();
  if (result) {
    console.log("correct");
    return true;
  } else {
    console.log("wrong");
    return false;
  }
};
