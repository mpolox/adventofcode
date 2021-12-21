import md5 from 'md5';

const Y2015_Day4 = (data) => {
  data = data[0];

  const Part1 = () => {
    let i = 0;
    while (true) {
      i++;
      const key = md5(data + i);
      if (key.startsWith("00000")) {
        break;
      }
    }
    return(i);
  }

  const Part2 = () => {
    let i = 0;
    while (true) {
      i++;
      const key = md5(data + i);
      if (key.startsWith("000000")) {
        break;
      }
    }
    return(i);
  }
  
  const response = {
    "Day1" : Part1(),
    "Day2" : Part2()
  }

  return(response);
}

export {Y2015_Day4};