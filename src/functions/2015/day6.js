import { getWords } from "../common/words";

const Y2015_Day6 = (data) => {

  const newMatrix = () => {
    let matrix = [];
    for (let y = 0; y < 1000; y++) {
      let vectorX = [];
      for (let x = 0; x < 1000; x++) {
        vectorX[x] = false;      
      }      
      matrix[y] = vectorX;
    }
    return matrix;
  }    

  const Part1 = () => {
    for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
      const element = data[dataIndex];
      const words = getWords(element);
      console.log("W",words);
    }

    let myMatrix = newMatrix();
    myMatrix[0][0] = true;
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