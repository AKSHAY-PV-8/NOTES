function RemoveAllZero(arr) {
    if (!Array.isArray(arr)) return undefined;
    if (arr.length === 0) return [];

    let result = [];
    for (let i of arr) {
        if (i !== 0) result.push(i);
    }

    while (result.length < arr.length) {
        result.push(0);
    }

    return result;
}

// console.log(RemoveAllZero([0, 1, 0, 3, 12]))