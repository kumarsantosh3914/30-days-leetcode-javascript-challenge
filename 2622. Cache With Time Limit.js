var TimeLimitedCache = function () {
    this.Cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let ans = false;
    if (this.Cache.has(key)) {
        const ref = this.Cache.get(key).ref;
        clearTimeout(ref);
        ans = true;
    }

    const ref = setTimeout(() => {
        this.Cache.delete(key);
    }, duration);
    this.Cache.set(key, {
        value: value,
        ref: ref
    });
    return ans;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.Cache.has(key)) {
        return this.Cache.get(key).value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.Cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */