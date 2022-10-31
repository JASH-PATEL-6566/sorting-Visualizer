const heapSort = async (bar, all) => {
    var N = bar.length;
    for (var ip = Math.floor(N / 2) - 1; ip >= 0; ip--)
        await heapify(bar, all, N, ip);

    for (var ih = N - 1; ih > 0; ih--) {
        var temp = bar[0];
        bar[0] = bar[ih];
        bar[ih] = temp;
        all[0].style.height = `${bar[0]}vh`;
        all[ih].style.height = `${bar[ih]}vh`;

        await heapify(bar, all, ih, 0);
    }
}

async function heapify(bar, all, N, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < N && bar[l] > bar[largest])
        largest = l;

    if (r < N && bar[r] > bar[largest])
        largest = r;

    if (largest !== i) {
        await new Promise(r => setTimeout(r, 100));
        var swap = bar[i];
        bar[i] = bar[largest];
        bar[largest] = swap;
        all[i].style.height = `${bar[i]}vh`;
        all[largest].style.height = `${bar[largest]}vh`;

        await heapify(bar, all, N, largest);
    }
}

export default heapSort;