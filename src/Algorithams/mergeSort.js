async function merge(bar, all, l, m, r) {
    // await new Promise(r => setTimeout(r, 100));
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);

    for (var iq = 0; iq < n1; iq++)
        L[iq] = bar[l + iq];
    for (var jq = 0; jq < n2; jq++)
        R[jq] = bar[m + 1 + jq];
    var ie = 0;
    var je = 0;
    var k = l;

    while (ie < n1 && je < n2) {
        // await new Promise(r => setTimeout(r, 100));
        if (L[ie] <= R[je]) {
            bar[k] = L[ie];
            all[k].style.height = `${bar[k]}vh`;
            ie++;
        }
        else {
            bar[k] = R[je];
            all[k].style.height = `${bar[k]}vh`;
            je++;
        }
        k++;
    }

    while (ie < n1) {
        // await new Promise(r => setTimeout(r, 100));
        bar[k] = L[ie];
        all[k].style.height = `${bar[k]}vh`;
        ie++;
        k++;
    }

    while (je < n2) {
        // await new Promise(r => setTimeout(r, 100));
        bar[k] = R[je];
        all[k].style.height = `${bar[k]}vh`;
        je++;
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