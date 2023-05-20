const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  array.splice(array.indexOf(item), 1);
  console.log(array);
}

removeElement(array, 1);
