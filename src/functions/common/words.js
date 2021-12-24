const getWords = (word) => {
    const words = word.match("[A-Za-z0-9]");
    return words;
}

export {getWords};