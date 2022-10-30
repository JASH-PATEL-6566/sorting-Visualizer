// let arr = [];
const random = (arr) => {
    const n = +(Math.trunc(Math.random() * 65 + 1));
    const final = n > 7 ? n : n + 7;
    arr.push(final);
}

module.exports = (arr, num) => {
    for (let i = 1; i <= num; i++) {
        random(arr);
    }
    return arr;
}