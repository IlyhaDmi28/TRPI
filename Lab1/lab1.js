function createPhoneNumber(numbs) {
    for (var i = 0; i < 10; i++) {
        if (numbs[i] < 0 || numbs[i] > 9)
            return "Перданно число, которое не может быть представленна как цифра!";
    }
    return "(" + numbs[0] + numbs[1] + numbs[2] + ") " + numbs[3] + numbs[4] + numbs[5] + "-" + numbs[6] + numbs[7] + numbs[8] + numbs[9];
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//Task 2
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        var sum = 0;
        if (number < 3)
            return 0;
        for (var i = 3; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0)
                sum += i;
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(17));
//Task3
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var k = 3;
for (var i = 0; i < k; i++) {
    nums.unshift(nums.pop());
}
console.log(nums);
//Task4
function GetMediana(nums) {
    if (nums.length % 2 != 0)
        return nums[Math.floor(nums.length / 2)];
    else
        return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
}
var nums1 = [1, 2, 3];
var nums2 = [1, 2, 3, 4];
console.log(GetMediana(nums1));
console.log(GetMediana(nums2));
//Task5
var mySet = new Set();
var suduku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
var nums_el = 0;
//Проверка строк
for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        if (suduku[i][j] != 0) {
            nums_el++;
            mySet.add(suduku[i][j]);
        }
    }
    if (nums_el != mySet.size)
        console.log("\u0412 \u0441\u0442\u0440\u043E\u043A\u0435 ".concat(i + 1, " \u0435\u0441\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043E\u0435\u043D\u0438\u044F"));
    nums_el = 0;
    mySet.clear();
}
//Проверка столбцов
for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        if (suduku[j][i] != 0) {
            nums_el++;
            mySet.add(suduku[j][i]);
        }
    }
    if (nums_el != mySet.size)
        console.log("\u0412 \u0441\u0442\u043E\u043B\u0431\u0446\u0435 ".concat(i + 1, " \u0435\u0441\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043E\u0435\u043D\u0438\u044F"));
    nums_el = 0;
    mySet.clear();
}
//Проверка клетки 3х3
for (var m = 0; m < 9; m += 3) {
    for (var n = 0; n < 9; n += 3) {
        for (var i = n; i < n + 3; i++) {
            for (var j = m; j < m + 3; j++) {
                if (suduku[i][j] != 0) {
                    nums_el++;
                    mySet.add(suduku[i][j]);
                }
            }
        }
        if (nums_el != mySet.size)
            console.log("\u0412 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0435 ".concat(m, ", ").concat(n, " \u0435\u0441\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043E\u0435\u043D\u0438\u044F"));
        nums_el = 0;
        mySet.clear();
    }
}
