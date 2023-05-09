/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var filterArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filterArray.push(arr[i]);
        }
    }
    return filterArray;
};