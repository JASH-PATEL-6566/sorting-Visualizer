const bubbleSort = async (bar, all, num) => {
    const len = num;
    for (let i = 0; i < len - 1; i++) {
        await new Promise(r => setTimeout(r, 100));
        for (let j = 0; j < len - 1; j++) {
            // console.log(i + "    " + j);
            if (bar[j] > bar[j + 1]) {
                var temp = bar[j];
                bar[j] = bar[j + 1];
                bar[j + 1] = temp;
                all[j].style.height = `${bar[j]}vh`;
                all[j + 1].style.height = `${bar[j + 1]}vh`;
            }
        }
    }
}

export default bubbleSort;