class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        const listeners = this.events.get(event);
        listeners.push(cb);

        return {
            unsubscribe: () => {
                const idx = listeners.indexOf(cb);
                if (idx !== -1) {
                    listeners.splice(idx, 1);
                }
            }
        };
    }

    emit(event, args = []) {
        if (!this.events.has(event)) {
            return [];
        }

        const listeners = this.events.get(event);
        const ans = [];
        for (const listener of listeners) {
            ans.push(listener(...args));
        }
        return ans;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */