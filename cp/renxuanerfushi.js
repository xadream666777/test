/*
 * @FilePath: /test/cp/renxuanerfushi.js
 * @Description: 
 */
let balls = [
    [
        "01",
        "02",
        "03",
        "04"
    ],
    [
        "01",
        "02",
        "03",
        "04",
        "05"
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]
let _temp = [[
    "01",
    "02",
    "03",
    "04"
],
[
    "01",
    "02",
    "03",
    "04",
    "05"
]]


function rencalcpkzux(arr) {
    if (arr.length == 1) {
        return;
    }
    var newArr = [];
    for (var i = 0; i < arr[0].length; i++) {
        for (var j = 0; j < arr[1].length; j++) {
            let a = String(arr[0][i]);
            let b = String(arr[1][j])
            // if (a.indexOf(b) == -1) {
            if (a !== b) {
                var item = a + "-" + b;
                newArr.push(item);
            }
        }
    }
    arr.splice(0, 2, newArr);
    rencalcpkzux(arr);
}

let seriesCode = 'renerzhixuan'
let n = 0;
for (let i = 0; i < _temp.length; i++) {
    for (let j = i + 1; j < _temp.length; j++) {
        if (seriesCode == 'renerzhixuan') {
            var _new_temp = [[..._temp[i]], [..._temp[j]]];
            rencalcpkzux(_new_temp);
            n = n + _new_temp[0].length;
        } else if (seriesCode == 'rensanzhixuan') {
            for (let k = j + 1; k < _temp.length; k++) {
                var _new_temp = [[..._temp[i]], [..._temp[j]], [..._temp[k]]];
                rencalcpkzux(_new_temp);
                n = n + _new_temp[0].length;
            }
        }
    }
}
console.log(n);