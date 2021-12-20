const Y2021_Day2 = (data) => {
        
    const Part1 = () => {
        let horizontalPosition = 0;
        let depth = 0;
        for (let index = 0; index < data.length; index++) 
        {   
            const item = ((data[index]).split(" "));
            const direction = item[0];
            const number = parseInt(item[1]);
            if (direction === "forward") {
                horizontalPosition += number
            } else if(direction === "up") {
                depth -= number;
            } else if(direction === "down") {
                depth += number;
            }        
        }
        const total = horizontalPosition * depth;
        return(total);
    }

    const Part2 = () => {
        let aim = 0;
        let horizontalPosition = 0;
        let depth = 0;
        for (let index = 0; index < data.length; index++) 
        {   
            const item = ((data[index]).split(" "));
            const direction = item[0];
            const number = parseInt(item[1]);
            if (direction === "forward") {
                horizontalPosition += number;
                depth = depth + (number * aim);
            } else if(direction === "up") {
                //depth -= number;
                aim -= number;
            } else if(direction === "down") {
                //depth += number;
                aim += number;
            }
            console.log("Direction:", direction," H: ", horizontalPosition, " D:", depth, " A:", aim);
        }
        const total = horizontalPosition * depth;
        return(total);
    }

    const response = {
        "Day1" : Part1(),
        "Day2" : Part2(),
    }
  
    return(response);   

}

export {Y2021_Day2}