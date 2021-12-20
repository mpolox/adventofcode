const Y2015_Day3 = (data) => {
  data = data[0];

  let coords = [];

  const newCoord = (x,y) => {
    return {
    "x": x,
    "y": y, 
    "value" : 1
    }
  }

  const addXY = (x,y) => {
    let myXY = coords.find((coord) => (coord.x === x && coord.y === y));
    if (myXY) {
      myXY.value += 1;
    } else {
      coords.push(newCoord(x,y));
    }    
  }

  const Part1 = () => {
    coords.push(newCoord(0,0));
    let x = 0
    let y = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      switch (element) {
        case "<":
          x -= 1;
          break;
        case ">":
          x += 1
          break;
        case "v":
          y += 1          
          break;      
        default:
          y -= 1;
          break;
      }
      addXY(x,y);
    }

    return(coords.length);
  }

  const Part2 = () => {
    return "basement";
  }

  const response = {
    "Day1" : Part1(),
    "Day2" : Part2()
  }

  return(response);
}

export {Y2015_Day3};