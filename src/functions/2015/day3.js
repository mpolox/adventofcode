const Y2015_Day3 = (data) => {
  data = data[0];

  let coords = [];

  const newCoord = (x,y) => {
    return {
    "x": x,
    "y": y, 
    "value" : 0
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
      const item1 = {"x": 1 ,"y": 1, "value" : 0 }
      coords.push(item1);
      const item2 = {"x": 2 ,"y": 1, "value" : 0 }
      coords.push(item2);      
      const item3 = {"x": 3 ,"y": 1, "value" : 0 }
      coords.push(item3);
      const item4 = {"x": 4 ,"y": 1, "value" : 0 }
      coords.push(item4);

      addXY(3,1);
      addXY(1,1);
      addXY(5,3);
      addXY(5,3);
      addXY(5,3);            


    // let positionsY = [0,0];
    // let positionsX = [positionsY];



    // positionsX.push([0,0]);
    // //positionsX[1][0] = 92;
    // positionsX.push([0,0]);

    // positionsX[2][2] = 23;


    console.log("coords", coords);
    return("floor");
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