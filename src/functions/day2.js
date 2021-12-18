const Day2 = (data) => {
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

const Day2_2 = (data) => {
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

export {Day2, Day2_2}