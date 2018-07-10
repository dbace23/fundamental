arr = [10000001,10000002,10000003,10000004,10000005]
sum= arr.reduce(
    function tambah(a, b) {
        return a + b;
    }
    , 0);
console.log (sum)