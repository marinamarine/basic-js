module.exports = function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error;
    }
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                if (typeof arr[i + 1] !== "undefined") {
                    i++;
                }
                break;
            case "--discard-prev":
                if (typeof arr[i - 1] !== "undefined") {
                    arrResult.pop();
                }
                break;
            case '--double-next':
                if (typeof arr[i + 1] !== "undefined") {
                    arrResult.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if (typeof arr[i - 1] !== "undefined") {
                    arrResult.push(arr[i - 1]);
                }
                break;
            default:
                arrResult.push(arr[i]);
                break;
        }
    }
    return arrResult;
};
