function createPhoneNumber(numbs: number[]) :string {
    for(let i = 0; i < 10; i++) {
        if(numbs[i] < 0 || numbs[i] > 9) return "Перданно число, которое не может быть представленна как цифра!";
    }

    return "(" + numbs[0] + numbs[1] + numbs[2] + ") " + numbs[3] + numbs[4] + numbs[5] + "-" + numbs[6] + numbs[7] + numbs[8] + numbs[9];
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//Task 2
class Challenge {
    static solution(number: number): number {
        let sum: number = 0;

        if(number < 3) return 0;

        for(let i = 3; i < number; i++) {
            if(i % 3 == 0 || i % 5 == 0) sum += i;
        }

        return sum;
    }
}

console.log(Challenge.solution(17));
  

//Task3
let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k: number = 3;

for(let i = 0; i < k; i++) {
    nums.unshift(<number>nums.pop())
}

console.log(nums);

//Task4
function GetMediana(nums: number[]) : number {
    if(nums.length % 2 != 0) return nums[Math.floor(nums.length / 2)];
    else return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
}

let nums1: number[] = [1, 2, 3];
let nums2: number[] = [1, 2, 3, 4];

console.log(GetMediana(nums1));
console.log(GetMediana(nums2));

//Task5
let mySet = new Set<number>();
let suduku: number[][] =
[
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

let nums_el: number = 0;

//Проверка строк
for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        if(suduku[i][j] != 0) { 
            nums_el++;
            mySet.add(suduku[i][j]);
        }
    }
    
    if(nums_el != mySet.size) console.log(`В строке ${i + 1} есть повтороения`);
    nums_el = 0;
    mySet.clear();
}

//Проверка столбцов
for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        if(suduku[j][i] != 0) { 
            nums_el++;
            mySet.add(suduku[j][i]);
        }
    }

    if(nums_el != mySet.size) console.log(`В столбце ${i + 1} есть повтороения`);
    nums_el = 0;
    mySet.clear();
}

//Проверка клетки 3х3
for(let m = 0; m < 9; m += 3) {
    for(let n = 0; n < 9; n += 3) {
        for(let i = n; i < n + 3; i++) {
            for(let j = m; j < m + 3; j++){
                if(suduku[i][j] != 0) { 
                    nums_el++;
                    mySet.add(suduku[i][j]);
                }
            }
        }

        if(nums_el != mySet.size) console.log(`В квадрате ${m}, ${n} есть повтороения`);
        nums_el = 0;
        mySet.clear();
    }
}