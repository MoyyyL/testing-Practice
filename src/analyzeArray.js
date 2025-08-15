function analyzeArray(arr) {
    return {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}

export { analyzeArray };
