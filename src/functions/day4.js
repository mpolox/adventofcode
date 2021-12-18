const Day4 = (data) => {

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

    console.log("A:",allBoardsCount[1]);
    console.log("B:",allBoardsCount[1][1]);
    console.log("C:",allBoardsCount[1][1][1]);
    // console.log(allBoardsCount[1]);    
    console.log("boards size:", allBoards.length);

    // for (let i = 0; i < 25; i++) {
    //     const number = numbersStr[i];
    //     for (let bi = 0; bi < allBoards.length; bi++) {
    //         for (let bj = 0; bj < allBoards[bi].length; bj ++) {
    //             const element = allBoards[bi][bj];
    //             console.log("number:", number, " compared with:", element);
    //             if (number === element) {
    //                 allBoardsCount[bi][bj] = 1;
    //                 console.log("IGUAL");
    //             }
    //         }                     
    //     }                
    // }

    return(666);
}

export {Day4};