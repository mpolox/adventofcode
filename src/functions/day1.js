const Day1 = (data) => {
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

const Day1_2 = (data) => {
    let previous = parseInt(data[0])+ parseInt(data[1], parseInt(data[2]));
    let sum = 0;
    let isBigger = false;
    for (let index = 2; index < data.length; index++) 
    {   
        const item0 = parseInt(data[index-2]);
        const item1 = parseInt(data[index-1]);
        const item2 = parseInt(data[index]);
        const item = item0 + item1 + item2;
        if (item > previous) {
            sum += 1;
            // isBigger = true;
        }         
        // console.log("item:",item, " previous", previous, " isBigger:", isBigger);        
        previous = item;
        // isBigger = false;
    }
    return(sum);
}

export {Day1, Day1_2};