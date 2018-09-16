function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i < word1.length; i++) {
        lcsarr[i] = new Array(word2.length + 1);
        for (var j = 0; j < word2.length + 1; i++) {
            lcsarr[i][j] = 0;
        }
    }
    for (var i = 0; i <= word1.length; i++) {
        for (var j = 0; j <= word2.length; j++) {
            if (i === 0 || j === 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i - 1] === word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    var str = "";
    if (max === 0) {
        return "";
    } else {
        for (var i = index - max; i <= max; i++) {
            str += word2[i];
        }
        return str;
    }
}

function max(a, b) {
    return a > b ? a : b;
}

function knapsack(capacity, size, value, n) {
    if (n === 0 || capacity === 0) {
        return 0;
    }
    if (size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    } else {
        return max(
            value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
            knapsack(capacity, size, value, n - 1)
        )
    }
}

// var value = [4, 5, 10, 11, 13];
// var size = [3, 4, 7, 8, 9];
// var capacity = 16;
// var n = 5;
// console.log(knapsack(capacity, size, value, n));

function dknapsack(capacity, size, value, n) {
    var K = [];
    for (var i = 0; i <= capacity + 1; i++) {
        K[i] = [];
    }
    for (var i = 0; i <= n; i++) {
        for (var w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                K[i][w] = 0;
            } else if (size[i - 1] <= w) {
                K[i][w] = max(
                    value[i - 1] + K[i - 1][w - size[i - 1]],
                    K[i - 1][w]
                );
            } else {
                K[i][w] = K[i - 1][w];
            }
        }
    }

    return K[n][capacity];
}

// var value = [4, 5, 10, 11, 13];
// var size = [3, 4, 7, 8, 9];
// var capacity = 16;
// var n = 5;
// console.log(dknapsack(capacity, size, value, n));
