const Y2021_Day1 = (data) => {

  const Part1 = () => {
      let previous = parseInt(data[0]);
      let sum = 0;
      for (let index = 0; index < data.length; index++) 
      {   
          const item = parseInt(data[index]);
          if (item > previous) {
              sum += 1;
          }
          previous = item;   
      }
      return(sum);
  }
  
  const Part2 = () => {
      let previous = parseInt(data[0])+ parseInt(data[1], parseInt(data[2]));
      let sum = 0;
      for (let index = 2; index < data.length; index++) 
      {   
          const item0 = parseInt(data[index-2]);
          const item1 = parseInt(data[index-1]);
          const item2 = parseInt(data[index]);
          const item = item0 + item1 + item2;
          if (item > previous) {
              sum += 1;
          }         
          previous = item;
      }
      return(sum);
  }

  const response = {
      "Day1" : Part1(),
      "Day2" : Part2(),
  }

  return(response);    
}


export {Y2021_Day1};