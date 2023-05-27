/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) return arr.slice();

    var flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const nested = flat(arr[i], n - 1);
            flattened.push(...nested);
        }
        else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
};
