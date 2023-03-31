function solution(values, edges, queries) {
    let answer = [];
    let tr = new Array(values.length + 1).fill().map(() => []);
    edges.sort((a, b) => a[1] - b[1]);
    for (let [from, to] of edges) {
        tr[from].push(to);
    }
    console.log(tr)
    console.log(edges)

    for (let [a, b] of queries) {
        if (b === -1) {
            let sum = values[a - 1];
            function get(i) {
                if (tr[i] === [] || tr[i] === undefined);
                else {
                    for (let c of tr[i]) {
                        sum += values[c - 1];
                        get(c);
                    }
                }
            }
            get(a);
            answer.push(sum);
        }
        else {
            function set(i) {
                values[i - 1] = values[edges[i - 2][0] - 1];
                if (edges[i - 2][0] !== 1) set(edges[i - 2][0]);
            }
            if (a !== 1) set(a);
            values[0] = b;
        }
    }
    return answer;
}
console.log(solution(
    [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
    [[10, 11], [13, 11], [12, 10], [10, 9], [8, 9], [1, 2], [2, 4], [2, 3], [5, 3], [6, 5], [5, 8], [7, 5]],
    [[1, -1], [2, -1], [3, -1], [4, -1], [5, -1], [6, -1], [7, -1], [8, -1], [9, -1], [10, -1], [11, -1], [12, -1], [13, -1]]
    // [1, 10, 100, 1000, 10000], [[1, 2], [1, 3], [2, 4], [2, 5]], [[1, -1], [2, -1], [3, -1], [4, -1], [5, -1], [4, 1000], [1, -1], [2, -1], [3, -1], [4, -1], [5, -1], [2, 1], [1, -1], [2, -1], [3, -1], [4, -1], [5, -1]]

    // [1, 20, 300, 4000, 50000, 600000, 7000000, 80000000, 900000000],
    // [[1, 2], [2, 3], [3, 4], [3, 5], [2, 6], [6, 7], [7, 8], [7, 9]],
    // [[6, 1], [3, 10], [5, 100], [7, 1000], [7, 10000], [3, -1], [3, 100000], [6, -1], [3, 1000000], [7, -1], [1, -1], [3, -1], [4, -1], [6, 10000000], [1, 100000000], [5, -1], [5, 1000000000], [8, -1], [2, 10000000000], [7, 100000000000], [7, 1000000000000], [3, 10000000000000], [3, -1], [8, -1], [1, 100000000000000], [1, -1]]

    // [1, 20, 300, 4000, 50000, 600000, 7000000, 80000000, 900000000],
    // [[1, 2], [2, 3], [3, 4], [3, 5], [2, 6], [6, 7], [7, 8], [2, 9]],
    // [[7, 1], [8, 10], [3, 100], [9, 1000], [4, -1], [5, 10000], [2, 100000], [8, 1000000], [4, -1], [8, 10000000], [4, 100000000], [5, -1], [6, 1000000000], [3, -1], [2, 10000000000], [7, 100000000000], [2, -1], [3, 1000000000000], [1, 10000000000000], [8, 100000000000000], [4, 1000000000000000], [2, 10000000000000000], [6, -1], [7, 100000000000000000], [4, 1000000000000000000], [3, 10000000000000000000], [8, -1], [4, 100000000000000000000], [8, 1000000000000000000000], [3, -1]]

));
//[11111,11010,100,1000,10000,11111,10011,100,10,10000,11111,11010,100,10,10000]
// tr = [ [], [ 2, 3 ], [ 4, 5 ] ] 

// [4002, 980000110, 980000010, 981114111, 14001, 4000, 1, 80000000, 100000014000, 80000000, 101111980014000]

// [4000, 4000, 1, 1000101, 11011000112, 101010000000, 10000000, 1100000000000000001]