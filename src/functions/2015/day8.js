const Y2015_Day8 = (data) => {

  let codeLength = 0;
  let strLenght = 0;
  let allStr = "";

  const hexCode = "\\x[a-f0-9]{2}"

  const Part1 = () => {
    for (let i = 0; i < data.length; i++) {      
      let element = data[i];
      codeLength += element.length;      
      element = element.replace(/\\x[a-f0-9]{2}/g,"X"); // xFF -> X
      element = element.replace(/\\\\/g,"Z");           // \\  -> /      
      element = element.replace(/\\"/g,"Y");            // \"  -> '
      element = element.replace(/\"/g,"");              // "   -> EMPTY

      strLenght += element.length;
      allStr += element;
    }
    console.log("T", codeLength);
    console.log("C", strLenght);
    console.log(allStr);
    return(codeLength - strLenght);
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

export {Y2015_Day8};