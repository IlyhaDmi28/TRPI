// Task 1
function ParamTest() {
    if (arguments.length <= 3){
        let all = "";

        for (let i = 0; i < arguments.length; i++) {
            all += `${arguments[i]}\n`;
        }

        return all;
    }
    else if (arguments.length > 3 && arguments.length <= 5){
        let types = "";

        for (let i = 0; i < arguments.length; i++) {
            
            types += `${typeof(arguments[i])}\n`;
        }
        
        return types;
    }
    else if (arguments.length > 5 && arguments.length <= 7) 
        return `Количество аргументов = ${arguments.length}`;
    else 
        return "Слишком много аргументов!";
}

alert(ParamTest(1, 2, 3, "4", 5));

// Task 3
let s = 5;
function sum(){
    alert(s);
}

sum();

// Task 4
{
function makeCounter0() {
    let curCount = 1;

    return function() {
        return curCount++;
    };
}

let Counter0 = makeCounter0();

alert(Counter0());
alert(Counter0());
alert(Counter0());

let Counter1 = makeCounter0();

alert(Counter1());

let currentCount = 1;

function makeCounter1() {
    return function() {
        return currentCount++;
    };
}

let Counter2 = makeCounter1();
let Counter3 = makeCounter1();

alert(Counter2());
alert(Counter2());

alert(Counter3());
alert(Counter3());
}

//Task 5
alert(`${ParamTest.name}\n` +
      `${makeCounter0.name}\n` +
      `${sum.name}\n` +
      `${makeCounter1.name}`);

// Task 6
function curry()
{
    return (l) =>
    {
        return (w) =>
        {
            return (h) =>
            {
                return l * w * h;
            };
        };
    };
}

let curried = curry();

alert(curried(prompt("Введите длину параллелепипеда"))
             (prompt("Введите ширину параллелепипеда"))
             (prompt("Введите высоту параллелепипеда")));

let rep = prompt("Введите количество параллелепипедов");
function volume(l)
{
    return (w, h) =>
    {
        return l * w * h;
    }
}
curried = volume(prompt("Введите длину параллелепипеда"));
for (let i = 0; i < rep; i++)
    alert(curried(prompt("Введите ширину параллелепипеда"),
             prompt("Введите высоту параллелепипеда")));


// Task 7

let PlayerObject = {
    PosX: 0,
    PosY: 0
};

let IsMove = true;
let Command = "";

// left, right, up, down, end
function* MovemenGenerator(){
    while (IsMove) {
        switch (Command) {
            case "left":
                PlayerObject.PosX -= 10;         
                yield [PlayerObject.PosX, PlayerObject.PosY];
                break;  
            case "right":
                PlayerObject.PosX += 10;
                yield [PlayerObject.PosX, PlayerObject.PosY];    
                break;       
            case "up":
                PlayerObject.PosY += 10;
                yield [PlayerObject.PosX, PlayerObject.PosY];
                break;  
            case "down":
                PlayerObject.PosY -= 10;
                yield [PlayerObject.PosX, PlayerObject.PosY];
                break;   
            case "end":
                IsMove = false;
                break;
            default:
                yield [PlayerObject.PosX, PlayerObject.PosY];
                break;  
        }
    }
}

let gen = MovemenGenerator();


while (IsMove){
    Command = prompt("left, right, down, up, end");

    let Pos = gen.next().value;

   // alert("X : " + Pos[0] + ", Y : " + Pos[1]);
}


function* l(){
    let i = 0;
    while(true){
        i++;
        yield i;    
    }
}

let c = l();
for(let i = 1; i <= 5; i++){
    alert(c.next().value);
}

