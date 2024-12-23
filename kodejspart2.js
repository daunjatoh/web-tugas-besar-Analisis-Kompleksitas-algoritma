// Data array tetap sama
const data = [
    { liter: 24.79, totalHarga: 300000 }, { liter: 29.11, totalHarga: 352231 },
    { liter: 52.35, totalHarga: 633435 }, { liter: 23.47, totalHarga: 284987 },
    { liter: 32.58, totalHarga: 394218 }, { liter: 17.65, totalHarga: 213565 },
    { liter: 38.95, totalHarga: 471295 }, { liter: 30, totalHarga: 363000 },
    { liter: 25, totalHarga: 302500 }, { liter: 40, totalHarga: 484000 },
    { liter: 15, totalHarga: 181500 }, { liter: 35, totalHarga: 423500 },
    { liter: 20, totalHarga: 242000 }, { liter: 30, totalHarga: 363000 },
    { liter: 42.28, totalHarga: 511588 }, { liter: 30.85, totalHarga: 373285 },
    { liter: 35.74, totalHarga: 432454 }, { liter: 50.91, totalHarga: 615011 },
    { liter: 45.16, totalHarga: 546436 }, { liter: 16.52, totalHarga: 200000 },
    { liter: 20.47, totalHarga: 247687 }, { liter: 41.18, totalHarga: 498278 },
    { liter: 22.39, totalHarga: 270919 }, { liter: 36.58, totalHarga: 442618 },
    { liter: 48.91, totalHarga: 591811 }, { liter: 16.52, totalHarga: 200000 },
    { liter: 29.61, totalHarga: 358281 }, { liter: 35.16, totalHarga: 900000 },
    { liter: 21.48, totalHarga: 259908 }, { liter: 47.38, totalHarga: 573298 },
    { liter: 16.52, totalHarga: 200000 }, { liter: 40.67, totalHarga: 492107 },
    { liter: 28.94, totalHarga: 350174 }, { liter: 26.15, totalHarga: 316415 },
    { liter: 33.76, totalHarga: 408496 }, { liter: 15, totalHarga: 181500 },
    { liter: 35, totalHarga: 423500 }, { liter: 20, totalHarga: 242000 },
    { liter: 40, totalHarga: 484000 }, { liter: 30, totalHarga: 363000 },
    { liter: 123.96, totalHarga: 1500000 }, { liter: 28, totalHarga: 338800 },
    { liter: 18, totalHarga: 217800 }, { liter: 45, totalHarga: 544500 },
    { liter: 40.12, totalHarga: 500000 }, { liter: 1.65, totalHarga: 20000 },
    { liter: 25, totalHarga: 302500 }, { liter: 30, totalHarga: 363000 },
    { liter: 50, totalHarga: 605000 }, { liter: 20, totalHarga: 242000 },
    { liter: 45, totalHarga: 544500 }, { liter: 35, totalHarga: 423500 },
    { liter: 30, totalHarga: 363000 }, { liter: 55, totalHarga: 665500 },
    { liter: 25, totalHarga: 302500 }, { liter: 40, totalHarga: 484000 },
    { liter: 50, totalHarga: 605000 }, { liter: 25, totalHarga: 302500 },
    { liter: 25, totalHarga: 302500 }, { liter: 30, totalHarga: 363000 },
    { liter: 5.04, totalHarga: 61000 }, { liter: 1.98, totalHarga: 24000 },
    { liter: 3.72, totalHarga: 45000 }, { liter: 8.26, totalHarga: 100000 },
    { liter: 6.28, totalHarga: 76000 }, { liter: 1.57, totalHarga: 19000 },
    { liter: 3.22, totalHarga: 39000 }, { liter: 3.22, totalHarga: 39000 },
    { liter: 2.56, totalHarga: 31000 }, { liter: 5.04, totalHarga: 61000 },
    { liter: 62, totalHarga: 750200 }, { liter: 58, totalHarga: 701800 },
    { liter: 30, totalHarga: 363000 }, { liter: 80, totalHarga: 968000 },
    { liter: 72, totalHarga: 871200 }, { liter: 67, totalHarga: 810700 },
    { liter: 26, totalHarga: 314600 }, { liter: 5, totalHarga: 60500 },
    { liter: 51, totalHarga: 617100 }, { liter: 39, totalHarga: 471900 },
    { liter: 66, totalHarga: 798600 }, { liter: 7, totalHarga: 84700 },
    { liter: 64, totalHarga: 774400 }, { liter: 15, totalHarga: 181500 },
    { liter: 20, totalHarga: 242000 }, { liter: 42, totalHarga: 508200 },
    { liter: 41, totalHarga: 496100 }, { liter: 52, totalHarga: 629200 }, 
    { liter: 81, totalHarga: 980100 }, { liter: 38, totalHarga: 459800 },
    { liter: 1.32, totalHarga: 16000 }, { liter: 0.08, totalHarga: 1000 },
    { liter: 0.83, totalHarga: 10000 }, { liter: 8.1, totalHarga: 98000 },
    { liter: 2.31, totalHarga: 28000 }, { liter: 7.44, totalHarga: 90000 },
    { liter: 5, totalHarga: 60500 }, { liter: 57, totalHarga: 689700},
    { liter: 70, totalHarga: 847000 }, { liter: 91, totalHarga: 1101100 },
    { liter: 6.86, totalHarga: 83000 }, { liter: 6.28, totalHarga: 76000 },
    { liter: 1.32, totalHarga: 16000 }, { liter: 2.56, totalHarga: 31000 },
    { liter: 7.27, totalHarga: 88000 }, { liter: 6.03, totalHarga: 73000 },
    { liter: 4.13, totalHarga: 50000 }, { liter: 1.74, totalHarga: 21000 },
    { liter: 0.58, totalHarga: 7000 }, { liter: 1.49, totalHarga: 18000 },
    { liter: 6.36, totalHarga: 77000 }, { liter: 6.86, totalHarga: 83000 },
    { liter: 0.17, totalHarga: 2000 }, { liter: 8.18, totalHarga: 99000 },
    { liter: 63, totalHarga: 762300 }, { liter: 58, totalHarga: 701800 },
    { liter: 37, totalHarga: 447700 }, { liter: 97, totalHarga: 1173700 },
    { liter: 23, totalHarga: 278300 }, { liter: 13, totalHarga: 157300 },
    { liter: 4, totalHarga: 48400 }, { liter: 23, totalHarga: 278300 },
    { liter: 55, totalHarga: 665500 }, { liter: 49, totalHarga: 592900 },
    { liter: 81, totalHarga: 980100 }, { liter: 50, totalHarga: 605000 },
    { liter: 23, totalHarga: 278300 }, { liter: 3, totalHarga: 36300 },
    { liter: 29, totalHarga: 350900 }, { liter: 26, totalHarga: 314600 },
    { liter: 1.74, totalHarga: 21000 }, { liter: 3.06, totalHarga: 37000 },
    { liter: 0.74, totalHarga: 9000 }, { liter: 2.89, totalHarga: 35000 },
    { liter: 5.04, totalHarga: 61000 }, { liter: 5.37, totalHarga: 65000 },
    { liter: 6.03, totalHarga: 73000 }, { liter: 0.66, totalHarga: 8000 }
];

// Fungsi Selection Sort Ascending Iteratif
function selectionSortAscendingIterative(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j].totalHarga < arr[minIdx].totalHarga) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}

// Fungsi Selection Sort Ascending Rekursif
function selectionSortAscendingRecursive(arr, start = 0) {
    let n = arr.length;
    if (start >= n - 1) return arr;

    let minIdx = start;
    for (let i = start + 1; i < n; i++) {
        if (arr[i].totalHarga < arr[minIdx].totalHarga) {
            minIdx = i;
        }
    }
    [arr[start], arr[minIdx]] = [arr[minIdx], arr[start]];
    return selectionSortAscendingRecursive(arr, start + 1);
}

// Fungsi Selection Sort Descending Iteratif
function selectionSortDescendingIterative(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let maxIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j].totalHarga > arr[maxIdx].totalHarga) {
                maxIdx = j;
            }
        }
        [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
    }
    return arr;
}

// Fungsi Selection Sort Descending Rekursif
function selectionSortDescendingRecursive(arr, start = 0) {
    let n = arr.length;
    if (start >= n - 1) return arr;

    let maxIdx = start;
    for (let i = start + 1; i < n; i++) {
        if (arr[i].totalHarga > arr[maxIdx].totalHarga) {
            maxIdx = i;
        }
    }
    [arr[start], arr[maxIdx]] = [arr[maxIdx], arr[start]];
    return selectionSortDescendingRecursive(arr, start + 1);
}

// Event listener untuk tombol sorting
document.querySelector('.tombol-pencarian').addEventListener('click', () => {
    const metode = document.querySelector('input[name="metode"]:checked').value;
    const urutan = document.querySelector('input[name="metodeurut"]:checked').value;
    const resultContainer = document.querySelector('.hasil-container');
    const kompleksitasText = document.querySelector('.kompleksitas-text');
    const runningTimeText = document.querySelector('.running-time-text');
    const btnGrafik2 = document.querySelector('.btn-grafik2'); // Tombol grafik

    let sortedData;
    const dataCopy = JSON.parse(JSON.stringify(data)); // Clone the data

    // Record start time
    const startTime = performance.now();

    // Determine complexity and sort the data
    let complexity = `O(n²) - Dengan n = ${dataCopy.length}`;
    if (metode === 'iteratif' && urutan === 'ascending') {
        sortedData = selectionSortAscendingIterative(dataCopy);
    } else if (metode === 'rekursif' && urutan === 'ascending') {
        sortedData = selectionSortAscendingRecursive(dataCopy);
    } else if (metode === 'iteratif' && urutan === 'descending') {
        sortedData = selectionSortDescendingIterative(dataCopy);
    } else if (metode === 'rekursif' && urutan === 'descending') {
        sortedData = selectionSortDescendingRecursive(dataCopy);
    }

    // Record end time and calculate the running time
    const endTime = performance.now();
    const runningTime = (endTime - startTime).toFixed(18); // Time in milliseconds

    // Display the complexity
    kompleksitasText.textContent = complexity;

    // Display the running time
    runningTimeText.textContent = `${runningTime} ms`;

    // Display the sorted results
    resultContainer.innerHTML = sortedData
        .map((d, index) => {
            return `<div class="hasil-item">
                        <strong>${index + 1}</strong>. Liter: ${d.liter}<br>Total Harga: ${d.totalHarga}
                    </div>`;
        })
        .join('');

    // Tampilkan tombol grafik setelah sorting selesai
    btnGrafik2.style.display = 'block';
});

