const Y2021_Day4 = (data) => {  
    const Part1 = () => {

        const numbersStr = (data[0]).split(",");   
        const allBoards = [];
        const allBoardsCount = [];
        for (let i = 2; i < data.length; i= i+6) {  
            const b1 = (data[i+0]).split(/\s+/);
            if (b1.length === 6) {b1.shift();}
            const b2 = (data[i+1]).split(/\s+/);
            if (b2.length === 6) {b2.shift();}
            const b3 = (data[i+2]).split(/\s+/);
            if (b3.length === 6) {b3.shift();}
            const b4 = (data[i+3]).split(/\s+/);
            if (b4.length === 6) {b4.shift();}
            const b5 = (data[i+4]).split(/\s+/);
            if (b5.length === 6) {b5.shift();}
            const board = [b1,b2,b3,b4,b5]
            const board2 = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
            allBoards.push(board);
            allBoardsCount.push(board2);
        }

        let winingBoard = 0;
        let winingNumber = 0;
        //iterate the numbers
        loop1:
        for (let i = 0; i < numbersStr.length; i++) {        
            const number = numbersStr[i];

            // iterate the boards
            for (let boardIndex = 0; boardIndex < allBoards.length; boardIndex++) {
                
                // iterate the row of current board
                for (let boardRow = 0; boardRow < allBoards[boardIndex].length; boardRow++) {
                    
                    // iterate the column of current row
                    for (let boardColumn = 0; boardColumn < allBoards[boardIndex][boardRow].length; boardColumn++) {
                        const element = allBoards[boardIndex][boardRow][boardColumn];
                        if (number === element) {
                            allBoardsCount[boardIndex][boardRow][boardColumn]=1;
                            allBoards[boardIndex][boardRow][boardColumn]=0;

                            winingBoard = boardIndex;
                            winingNumber = number;
                            //now check if column completed
                            let lineSum = 0;
                            for (let countRow = 0; countRow < 5; countRow++) {                            
                                lineSum += allBoardsCount[boardIndex][countRow][boardColumn];                            
                            } 
                            if (lineSum >= 5) {
                                console.log("At board ",boardIndex," Completed with column ", boardColumn);
                                break loop1;
                            }

                            //now check if row completed
                            lineSum = 0;
                            for (let countColumn = 0; countColumn < 5; countColumn++) {                            
                                lineSum += allBoardsCount[boardIndex][boardRow][countColumn];
                            }
                            if (lineSum >= 5) {
                                console.log("At board ",boardIndex," Completed  with row ", boardRow );
                                break loop1;
                            }                        
                        }
                    }                
                }   
            }
        }

        let numberSum = 0
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                numberSum += parseInt(allBoards[winingBoard][i][j]);            
            }        
        }

        const response = numberSum * winingNumber;    
        return(response);
    }


    const Part2 = () => {

        const numbersStr = (data[0]).split(",");   
        const allBoards = [];
        const allBoardsCount = [];
        for (let i = 2; i < data.length; i= i+6) {  
            const b1 = (data[i+0]).split(/\s+/);
            if (b1.length === 6) {b1.shift();}
            const b2 = (data[i+1]).split(/\s+/);
            if (b2.length === 6) {b2.shift();}
            const b3 = (data[i+2]).split(/\s+/);
            if (b3.length === 6) {b3.shift();}
            const b4 = (data[i+3]).split(/\s+/);
            if (b4.length === 6) {b4.shift();}
            const b5 = (data[i+4]).split(/\s+/);
            if (b5.length === 6) {b5.shift();}
            const board = [b1,b2,b3,b4,b5]
            const board2 = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
            allBoards.push(board);
            allBoardsCount.push(board2);
        }

        let winingBoard = 0;
        let winingNumber = 0;
        let winingBoards = [];
        let response = 0;
        //iterate the numbers
        loop1:
        for (let i = 0; i < numbersStr.length; i++) {        
            const number = numbersStr[i];
            
            // iterate the boards
            for (let boardIndex = 0; boardIndex < allBoards.length; boardIndex++) {
                // console.log("Board:", boardIndex);          

                loop2:
                // iterate the row of current board
                for (let boardRow = 0; boardRow < allBoards[boardIndex].length; boardRow++) {
                    

                    for (let i = 0; i < winingBoards.length; i++) {
                        if (boardIndex === winingBoards[i])
                        {
                            //  console.log("Board", boardIndex, " already won, exit");
                            break loop2;
                        }                
                    }

                    // iterate the column of current row
                    for (let boardColumn = 0; boardColumn < allBoards[boardIndex][boardRow].length; boardColumn++) {
                        const element = allBoards[boardIndex][boardRow][boardColumn];
                        if (number === element) {
                            allBoardsCount[boardIndex][boardRow][boardColumn]=1;
                            allBoards[boardIndex][boardRow][boardColumn]=0;

                            winingBoard = boardIndex;
                            winingNumber = number;
                            //now check if column completed
                            let lineSum = 0;
                            for (let countRow = 0; countRow < 5; countRow++) {                            
                                lineSum += allBoardsCount[boardIndex][countRow][boardColumn];                            
                            } 
                            if (lineSum >= 5) {
                                winingBoards.push(winingBoard);
                                if (winingBoards.length === 100) {
                                    console.log("LAST ONE");
                                    break loop1; 
                                }
                                break loop2;
                            }

                            //now check if row completed
                            lineSum = 0;
                            for (let countColumn = 0; countColumn < 5; countColumn++) {                            
                                lineSum += allBoardsCount[boardIndex][boardRow][countColumn];
                            }
                            if (lineSum >= 5) {
                                winingBoards.push(winingBoard);
                                if (winingBoards.length === 100) {
                                    console.log("LAST ONE");
                                    break loop1; 
                                }
                                break loop2;
                            }                        
                        }
                    }                
                }
            }
        }

        let numberSum = 0
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                numberSum += parseInt(allBoards[winingBoard][i][j]);            
            }        
        }

        response = numberSum * winingNumber;    
        return(response);
    }

    const response = {
        "Day1" : Part1(),
        "Day2" : Part2(),
    }
  
    return(response);      
}

export {Y2021_Day4};