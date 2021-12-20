const Y2015_Day2 = (data) => {

  const boxDimensions = (myBox) => {
    const giftDimensions =myBox.split("x");
    const l = parseInt(giftDimensions[0]);
    const w = parseInt(giftDimensions[1]);
    const h = parseInt(giftDimensions[2]);
    const giftDimInt = [l,w,h];

    //order the array
    giftDimInt.sort(function(a, b) {
      return a - b;
    })    
    
    return {
      "l": l,
      "w": w,
      "h": h,
      "orderedDimensions" : giftDimInt
    }

  }

  const Part1 = () => {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      const {l,w,h,orderedDimensions} = boxDimensions(data[i]);     
      const result = ((2*l*w)+(2*w*h)+(2*h*l)) + (orderedDimensions[0] * orderedDimensions[1])
      sum += result;
      }

    return(sum);
  }

  const Part2 = () => {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      const {orderedDimensions} = boxDimensions(data[i]);
      const sides = orderedDimensions[0] + orderedDimensions[0] + orderedDimensions[1] + orderedDimensions[1];
      const bow = orderedDimensions[0] * orderedDimensions[1] * orderedDimensions[2];
      const result = sides + bow;
      sum += result;
      }

    return(sum);    
  }

  const response = {
    "Day1" : Part1(),
    "Day2" : Part2()
  }

  return(response);
}

export {Y2015_Day2};