const getWords = (word) => {
    const words = word.match(/([A-Za-z0-9])+/g);
    return words;
}

const getOnlyWordsLower = (word) => {
    const words = word.match(/([a-z])+/g);
    return words;    
}

export {getWords, getOnlyWordsLower};