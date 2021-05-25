function average(list) {
    if (list === undefined || !Array.isArray(list) || list.length === 0) {
        return false;
    }


}

module.exports = average;

// return list.reduce((t, s) => t + s, 0) / list.length;



// DESTYTOJO KODAS



// const average = list => {
//     if (list === undefined ||
//         !Array.isArray(list) ||
//         list.length === 0) {
//         return false;
//     }

//     let totalSum = 0;
//     let validNumbersCount = 0;

//     for (const number of list) {
//         if (typeof number === 'number' && !isNaN(number)) {
//             totalSum += number;
//             validNumbersCount++;
//         }
//     }

//     return totalSum / validNumbersCount;
// };

// module.exports = average;