import React, { Fragment, useState } from 'react';
import { Day1, Day1_2 } from '../functions/day1';
import { Day2, Day2_2 } from '../functions/day2';
import { Day3 } from '../functions/day3';
import { Day4 } from '../functions/day4';
import { readDay } from '../helpers/readDay';




const Starter = () => {
    const [response, setResponse] = useState("N/A");
    const ReadFile = async (e) =>{
        const r = await readDay(e);
        switch (r.day) {
            case "day1.txt":
                setResponse(Day1_2(r.data));
                break;  
            case "day2.txt":
                setResponse(Day2_2(r.data));
                break;                      
            case "day3.txt":
                setResponse(Day3(r.data));
                break;
            case "day4.txt":
                setResponse(Day4(r.data));
                break;                  
            default:
                break;
        }
    }

    return (
        <Fragment>
            <p></p>
            <input type="file" onChange={ReadFile}/>
            <h1>The Response is: {response}</h1>            
        </Fragment>
    )
}

export default Starter;