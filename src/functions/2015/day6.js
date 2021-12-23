const Y2015_Day6 = (data) => {

  const newMatrix = () => {
    let myMatrix;
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        myMatrix[i][j] = false;
      }      
    }
    return myMatrix
  }

  const Part1 = () => {
    let myMatrix = newMatrix();
    console.log(myMatrix);
    return("TBD");
  }

  const Part2 = () => {
    return("TBD");
  }
  
  const response = {
    "Day1" : Part1(),
    "Day2" : Part2()
  }

  return(response);
}

export {Y2015_Day6};