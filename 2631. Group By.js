/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    const ans = {};
    for (let element of this) {
        const temp = fn(element);
        ans[temp] ? ans[temp].push(element) : ans[temp] = [element];
    }
    return ans;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */