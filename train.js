function moveLetter(word) {
  if (word.length <= 1) {
    return word;
  }
  return word.slice(1).concat(word[0]);
}

const modifiedArray = moveLetter(["s", "e", "l", "e", "c", "t", "o", "r"]);
console.log(modifiedArray);
