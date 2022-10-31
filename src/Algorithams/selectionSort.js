const selectionSort = async (bar, all, num) => {
    const len = num;
    for (let i = 0; i < len - 1; i++) {
        await new Promise(r => setTimeout(r, 100));
        let min = i;
        for (let j = i + 1; j < len; j++) {
            // console.log(i + "    " + j);
            if (bar[min] > bar[j])
                min = j;
        }
        if (min !== i) {
            var temp = bar[min];
            bar[min] = bar[i];
            bar[i] = temp;
            all[i].style.height = `${bar[i]}vh`;
            all[min].style.height = `${bar[min]}vh`;
        }
    }
}

export default selectionSort;