const newMatrix = (a,b) => {
  let matrix = [];
  for (let y = 0; y < a; y++) {
    let vectorX = [];
    for (let x = 0; x < b; x++) {
      vectorX[x] = false;      
    }      
    matrix[y] = vectorX;
  }
  return matrix;
}

export {newMatrix}