
function swap(bar, all, leftIndex, rightIndex) {
    var temp = bar[leftIndex];
    bar[leftIndex] = bar[rightIndex];
    bar[rightIndex] = temp;
    all[leftIndex].style.height = `${bar[leftIndex]}vh`;
    all[rightIndex].style.height = `${bar[rightIndex]}vh`;
}
async function partition(bar, all, left, right) {
    var pivot = bar[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        await new Promise(r => setTimeout(r, 100));
        while (bar[i] < pivot) {
            i++;
        }
        while (bar[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(bar, all, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = async (bar, all, left, right) => {
    var index;
    if (bar.length > 1) {
        index = await partition(bar, all, left, right);

        if (left < index - 1) {
            quickSort(bar, all, left, index - 1);
        }
        if (index < right) {
            quickSort(bar, all, index, right);
        }
    }
}

export default quickSort;