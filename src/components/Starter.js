import React, { Fragment, useState } from 'react';
import { Y2015_Day1 } from '../functions/2015/day1';
import { Y2015_Day2 } from '../functions/2015/day2';
import { Y2021_Day1 } from '../functions/2021/day1';
import { Y2021_Day2 } from '../functions/2021/day2';
import { Y2021_Day3 } from '../functions/2021/day3';
import { Y2021_Day4 } from '../functions/2021/day4';
import { noResponse as DefaultResponse } from '../functions/noRespose';


import { readDay } from '../helpers/readDay';

const Starter = () => {
    const [answer, setAnswer] = useState(DefaultResponse());
    const ReadFile = async (e) =>{
        const r = await readDay(e);
        switch (r.day) {
            //2015
            case "2015_day1.txt":
                setAnswer(Y2015_Day1(r.data));
                break;
            case "2015_day2.txt":
                setAnswer(Y2015_Day2(r.data));
                break;

                
            //2016
            //2017
            //2018
            //2019
            //2020
            //2021
            case "2021_day1.txt":
                setAnswer(Y2021_Day1(r.data));
                break;  
            case "2021_day2.txt":
                setAnswer(Y2021_Day2(r.data));
                break;
            case "2021_day3.txt":
                setAnswer(Y2021_Day3(r.data));
                break;
            case "2021_day4.txt":
                setAnswer(Y2021_Day4(r.data));
                break;                  
            default:
                setAnswer(Y2015_Day2(r.data))
                break;
        }
    }

    return (
        <Fragment>
            <p></p>
            <input type="file" onChange={ReadFile}/>
            <h1>Part 1: {answer.Day1}</h1>
            <h1>Part 2: {answer.Day2}</h1>
        </Fragment>
    )
}

export default Starter;