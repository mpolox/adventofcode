const Y2021_Day3 = (data) => {    
    const Part1 = () => {
        let sum = [0,0,0,0,0,0,0,0,0,0,0,0]
        let epsilon = "";
        let gamma = "";

        for (let index = 0; index < data.length; index++) 
        {   
            sum[0] += parseInt(data[index].charAt(0));
            sum[1] += parseInt(data[index].charAt(1));
            sum[2] += parseInt(data[index].charAt(2));
            sum[3] += parseInt(data[index].charAt(3));
            sum[4] += parseInt(data[index].charAt(4));
            sum[5] += parseInt(data[index].charAt(5));
            sum[6] += parseInt(data[index].charAt(6));
            sum[7] += parseInt(data[index].charAt(7));
            sum[8] += parseInt(data[index].charAt(8));
            sum[9] += parseInt(data[index].charAt(9));
            sum[10] += parseInt(data[index].charAt(10));
            sum[11] += parseInt(data[index].charAt(11));
        }
        for (let index = 0; index < 12; index++) {
            if (sum[index] > (data.length/2)) {
                gamma += "1";
                epsilon += "0";
            } else {
                sum[index] = 0;
                gamma += "0";
                epsilon += "1";
            }        
        }
        const gammaDec = parseInt(gamma, 2);
        const epsilonDec = parseInt(epsilon, 2);
        const response = gammaDec * epsilonDec;

        return(response);
    }

    const Part2 = () => {
        return "N/A"
    }

    const response = {
        "Day1" : Part1(),
        "Day2" : Part2(),
    }
  
    return(response);      
}

export {Y2021_Day3};