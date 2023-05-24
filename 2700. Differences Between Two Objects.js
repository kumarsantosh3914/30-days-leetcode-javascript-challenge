/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    function isObject(value) {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }

    function compare(obj1, obj2, path, result) {
        if (isObject(obj1) && isObject(obj2)) {
            for (const key in obj1) {
                if (key in obj2) {
                    compare(obj1[key], obj2[key], [...path, key], result);
                }
            }
        }
        else if (Array.isArray(obj1) && Array.isArray(obj2)) {
            const maximumLength = Math.max(obj1.length, obj2.length);
            for (let i = 0; i < maximumLength; i++) {
                if (i in obj1 && i in obj2) {
                    compare(obj1[i], obj2[i], [...path, i], result);
                }
            }
        }
        else if (obj1 !== obj2) {
            if (path.length === 0) {
                result = [obj1, obj2];
            }
            else {
                let currObject = result;
                for (let i = 0; i < path.length - 1; i++) {
                    const key = path[i];
                    if (!(key in currObject)) {
                        currObject[key] = {};
                    }
                    currObject = currObject[key];
                }
                const lastKey = path[path.length - 1];
                currObject[lastKey] = [obj1, obj2];
            }
        }
    }
    const ans = {};
    compare(obj1, obj2, [], ans);
    return ans;
};