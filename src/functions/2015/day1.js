const Y2015_Day1 = (data) => {

  const Part1 = () => {
    const open = data[0].replaceAll(")", "");
    const close = data[0].replaceAll("(", "");
    const floor = open.length - close.length 

    return(floor);
  }

  const Part2 = () => {
    let floor = 0;
    let basement = 0;

    for (let i = 0; i < data[0].length; i++) {
      const element = data[0].charAt(i);
      if (element === '(') {
        floor += 1;
      } else {
        floor -= 1;
      }
      if (floor === -1 && basement === 0) {
        basement = i + 1;
      }
    }
    return basement;
  }

  const response = {
    "Day1" : Part1(),
    "Day2" : Part2()
  }

  return(response);
}

export {Y2015_Day1};