module.exports = async (bar, all, num) => {
    const len = num;
    for (let i = 0; i < len; i++) {
        await new Promise(r => setTimeout(r, 100));
        let j = i - 1;
        let temp = bar[i];
        while (j >= 0 && temp < bar[j]) {
            bar[j + 1] = bar[j];
            all[j + 1].style.height = `${bar[j]}vh`;
            j--;
        }
        bar[j + 1] = temp;
        all[j + 1].style.height = `${temp}vh`;
    }
}