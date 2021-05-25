function average(list) {
    if (list === undefined || !Array.isArray(list) || list.length === 0) {
        return false;
    }


}

module.exports = average;

// return list.reduce((t, s) => t + s, 0) / list.length;