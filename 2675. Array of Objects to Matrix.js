var jsonToMatrix = function (arr) {
    function objFlat(obj) {
        const res = [];
        for (const key of Object.keys(obj)) {
            const val = obj[key]

            // Check for neststed object for each value
            if (val === null || typeof val !== "object") {
                res[key] = val;
            } else {
                // Recursive function due to nested object
                const child = objFlat(val);
                for (const k of Object.keys(child)) {
                    res[`${key}.${k}`] = child[k];
                }
            }
        }
        return res;
    }


    // Call helper function for each element to flat the object
    arr = arr.map(objFlat);

    // Get sorted list of keys
    const keys = [...new Set(arr.map(Object.keys).flat())].sort();

    const res = Array(arr.length + 1).fill().map(() => []);
    res[0] = keys; // First row is keys

    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < keys.length; ++j) {
            const k = keys[j], v = arr[i][k];
            res[i + 1][j] = (v !== undefined) ? v : "";
        }
    }
    return res;
};