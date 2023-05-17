/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
    let progressCount = 0;
    let index = 0;
    return new Promise((resolve) => {
        const eatFiveStarAndDoNothing = () => {
            while (progressCount < n && index < functions.length) {
                progressCount += 1;
                const promise = functions[index]();
                index += 1;
                promise.then(() => {
                    progressCount -= 1;
                    eatFiveStarAndDoNothing();
                });
            }
            if (progressCount == 0 && index == functions.length) {
                resolve();
                return;
            }
        }
        eatFiveStarAndDoNothing();
    })
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */