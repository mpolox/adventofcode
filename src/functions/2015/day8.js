const Y2015_Day8 = (data) => {

  let codeLength = 0;
  let strLenght = 0;

  const Part1 = () => {
    for (let i = 0; i < data.length; i++) {      
      let element = data[i];
      codeLength += element.length;      
      element = element.replace(/\\x[a-f0-9]{2}/g,"X"); // xFF -> X
      element = element.replace(/\\\\/g,"Z");           // \\  -> /      
      element = element.replace(/\\"/g,"Y");            // \"  -> '
      element = element.replace(/"/g,"");              // "   -> EMPTY
      strLenght += element.length;
    }
    return(codeLength - strLenght);
  }

  const Part2 = () => {
    codeLength = 0;
    strLenght = 0;
    for (let i = 0; i < data.length; i++) {      
      let element = data[i];
      codeLength += element.length;      
      element = "X" + element.substring(1,element.length-1) + "X";
      element = element.replace(/\\/g,"ZZ");           // \  -> ZZ
      element = element.replace(/"/g,"WW");            // "  -> WW
      element = element.replace(/X/g,"YYY");           // X  -> YYY
      strLenght += element.length;
    }    
    return(strLenght - codeLength);
  }
  
  const response = {
    "Day1" : Part1(),
    "Day2" : Part2()
  }

  return(response);
}

export {Y2015_Day8};