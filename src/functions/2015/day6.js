import { getWords } from "../common/words";
import { newMatrix } from "../common/matrix";

const Y2015_Day6 = (data) => {

  const getActions = (words) => {
    let actions = {
      "action" : words[0],
      "x1" : parseInt(words[1]),
      "y1" : parseInt(words[2]),
      "x2" : parseInt(words[4]),
      "y2" : parseInt(words[5])
    }
    if (words[0] === "turn") {
      if (words[1] === "on")
      {
        actions.action = true;
      } else {
        actions.action = false;
      }
      actions.x1 = parseInt(words[2]);
      actions.y1 = parseInt(words[3]);
      actions.x2 = parseInt(words[5]);
      actions.y2 = parseInt(words[6]);
    }
    return actions
  }

  const Part1 = () => {
    let myMatrix = newMatrix(1000,1000);
    for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
      const element = data[dataIndex];
      const words = getWords(element);
      const actions = getActions(words);

      for (let i = actions.x1; i < actions.x2+1; i++) {
        for (let j = actions.y1; j < actions.y2+1; j++) {
          if (actions.action === "toggle") {
            myMatrix[i][j] = !myMatrix[i][j];
          } else {
            myMatrix[i][j] = actions.action;
          }        
        }
      }
    }

    let onCount = 0;
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        if ( myMatrix[i][j] === true) onCount++;
      }
    }

    return(onCount);
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