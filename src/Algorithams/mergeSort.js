async function merge(bar, all, l, m, r) {
    // await new Promise(r => setTimeout(r, 100));
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++)
        L[i] = bar[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = bar[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        // await new Promise(r => setTimeout(r, 100));
        if (L[i] <= R[j]) {
            bar[k] = L[i];
            all[k].style.height = `${bar[k]}vh`;
            i++;
        }
        else {
            bar[k] = R[j];
            all[k].style.height = `${bar[k]}vh`;
            j++;
        }
        k++;
    }

    while (i < n1) {
        // await new Promise(r => setTimeout(r, 100));
        bar[k] = L[i];
        all[k].style.height = `${bar[k]}vh`;
        i++;
        k++;
    }

    while (j < n2) {
        // await new Promise(r => setTimeout(r, 100));
        bar[k] = R[j];
        all[k].style.height = `${bar[k]}vh`;
        j++;
        k++;
    }
}

const mergeSort = async (bar, all, l, r) => {
    await new Promise(r => setTimeout(r, 100));
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    await mergeSort(bar, all, l, m);
    await mergeSort(bar, all, m + 1, r);
    merge(bar, all, l, m, r);
}

export default mergeSort;