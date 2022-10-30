export const heapSort = async (bar, all) => {
    var N = bar.length;
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        await heapify(bar, all, N, i);

    for (var i = N - 1; i > 0; i--) {
        var temp = bar[0];
        bar[0] = bar[i];
        bar[i] = temp;
        all[0].style.height = `${bar[0]}vh`;
        all[i].style.height = `${bar[i]}vh`;

        await heapify(bar, all, i, 0);
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