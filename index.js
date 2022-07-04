module.exports = class Random {

    randomInt(min, max) {
        if (max === undefined) {
            max = min;
            min = 0;
        }

        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new TypeError('Expected all arguments to be numbers');
        }

        return Math.floor(Math.random() * (max - min + 1) + min)
    }
 
    randomFloat(min, max, decimals = 15) {
        if (max === undefined) {
            max = min;
            min = 0;
        }

        if (typeof min !== 'number' || typeof max !== 'number') {
            throw new TypeError('Expected all arguments to be numbers');
        }

        if (typeof decimals !== 'number' || decimals > 100) {
            throw new TypeError('Expected all arguments to be numbers');
        }

        return ((Math.random() * (max - min )) + min).toFixed(decimals)
    }

    randomItem(array, count = 1) {
        if(!Array.isArray(array)) {
            throw new TypeError('Expected an array');
        }

        if (!(Number.isInteger(count) && count >= 0)) {
            throw new TypeError('Expected a non-negative integer');
        }

        if(count === 1)
            return array[Math.floor(Math.random() * array.length)];
        else 
            return Array.from({length: count}, () => this.randomItem(array));
    }

    randomObjKey(obj, count = 1) {
        if (typeof obj !== 'object') {
            throw new TypeError('Expected an object');
        }

        if (!(Number.isInteger(count) && count >= 0)) {
            throw new TypeError('Expected a non-negative integer');
        }

        const keys = Object.keys(obj);
        if(count === 1)
            return keys[Math.floor(Math.random() * keys.length)];
        else 
            return Array.from({length: count}, () => this.randomObjKey(obj));
    }

}

