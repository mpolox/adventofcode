import { getOnlyWordsLower, getWords } from "../common/words";

const Y2015_Day7 = (data) => {

  const addtem = (id,value) => {     
    return {
      "id" : id,
      "value" : value
    }
  }

  let allRegisters = [addtem("xxx",0)];

  const doFill = (words) => {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const exist = allRegisters.find(element => element.id === word);
      if (!exist) {
        allRegisters.push(addtem(word,0));
      }      
    }    
  }

  const doOperation = (words) => {
    const found = words.find(element => (element === "NOT") || (element === "OR") || (element === "AND") || (element === "RSHIFT") || (element === "LSHIFT"))
    let operator = 0;
    let operator2 = 0;
    let position = 0;
    let value = 0;
    let number = 0;
    let container = allRegisters.find(item => item.id === words[words.length-1]);
    switch (found) {
      case "LSHIFT":
        operator = allRegisters.find(item => item.id === words[0]);
        position = parseInt(words[2]);
        value = operator.value << position;
        container.value = value;
        break;
      case "RSHIFT":
        operator = allRegisters.find(item => item.id === words[0]);
        position = parseInt(words[2]);
        value = operator.value >> position;
        container.value = value;
        break;
      case "OR":
        operator = allRegisters.find(item => item.id === words[0]);
        operator2 = allRegisters.find(item => item.id === words[2]);
        if (Number.isInteger(parseInt(words[0]))) {
          number = parseInt(words[0])
          value = number | operator2.value;
        } else {
          value = operator2.value | operator.value;
        }
        container.value = value;
        break;
      case "AND":
        operator = allRegisters.find(item => item.id === words[0]);
        operator2 = allRegisters.find(item => item.id === words[2]);
        if (Number.isInteger(parseInt(words[0]))) {
          number = parseInt(words[0])
          value = number & operator2.value;
        } else {
          value = operator2.value & operator.value;
        }
        container.value = value;
        break; 
      case "NOT":
        operator = allRegisters.find(item => item.id === words[1]);
        console.log("OP",operator.value.toString(2));
        value = ~(operator.value);
        container.value = value;
        console.log("VAL",container.value.toString(2));

        break;
      default:
        number = parseInt(words[0]);
        container.value = number;
        break;
    }
    
  }


  const Part1 = () => {
    for (let i = 0; i < data.length; i++) {
      const words = getOnlyWordsLower(data[i]);
      doFill(words);
    }
    for (let i = 0; i < data.length; i++) {
      const words = getWords(data[i]);
      doOperation(words);
    }

    console.log("---->", allRegisters);
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

export {Y2015_Day7};