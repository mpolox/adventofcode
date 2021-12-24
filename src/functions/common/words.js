const getWords = (word) => {
    const words = word.match(/([a-z0-9])+/g);
    return words;
}

export {getWords};