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

  const addXY = ({x,y}) => {
    //find that XY position on saved coordenates
    let myXY = coords.find((coord) => (coord.x === x && coord.y === y));
    if (myXY) {
      myXY.value += 1;
    } else {
      coords.push(newCoord(x,y));
    }    
  }

  const getCoords = (element, position) => {

    switch (element) {
      case "<":
        position.x -= 1;
        break;
      case ">":
        position.x += 1
        break;
      case "v":
        position.y += 1          
        break;      
      default:
        position.y -= 1;
        break;
    }
    return position;
  }

  const Part1 = () => {
    coords = [];
    coords.push(newCoord(0,0));
    let santaPosition = { "x" : 0, "y" : 0  }

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      santaPosition = getCoords(element,santaPosition);
      addXY(santaPosition);
    }

    return(coords.length);
  }

  const Part2 = () => {
    coords = [];
    coords.push(newCoord(0,0));
    let santaPosition = { "x" : 0, "y" : 0 }
    let robotPosition = { "x" : 0, "y" : 0 }

    for (let i = 0; i < data.length; i++) {
      const isOdd = i % 2;
      const element = data[i];
      if (isOdd) { 
        santaPosition = getCoords(element,santaPosition);
        addXY(santaPosition); 
      }
      else { 
        robotPosition = getCoords(element,robotPosition);
        addXY(robotPosition); 
      }
    }
    return(coords.length);    
  }

  const response = {
    "Day1" : Part1(),
    "Day2" : Part2()
  }

  return(response);
}

export {Y2015_Day3};