const PI = 3.14;

//Задание 1
function circle (radius) {
    let square = PI * radius**2;
    let diametr = radius * 2;
    let length = radius * 2 * PI;
    alert(`Площадь ${square}, диаметр ${diametr}, длина окружности ${length}`);
}

circle(prompt("Введите радиус", ''));

//Задание 2
function Buy() {
    const MONEY = 300;
    let s = 0;
    while(true) {
        let add = +prompt("Введите цену товара", '');
        s = s + add;
        if(s > MONEY){ 
            let choise = +prompt("У вас недостаточно средств. Выберите товар подешевле, или завершите покупку(0 - заверш. пок.)");
            s -= add;
            if (choise == 0) break;
        }
    }
}

Buy();

//Задание 3
function retStr(a , b, c = 34) {
    return a + b + c;
}

alert(retStr("sss", prompt("Введите параметр!", '')));

//Задание 4
function countStudents () {
    let students;
    let i = 0;
    while(true) {
        students = prompt("Введите имя студента(0 - прекратить ввод)", '');
        if(students == '0') break;
        i++;
    }
    alert(`Присуствуют ${i} студентов`);
}

countStudents();

//Задание 5
function paramsDec (a, b) {
    if (a == b) return `Периметр квадрата: ${a + b}`;
    else return `Площадь прямоугольника: ${a * b}`;
}

alert (paramsDec(+prompt("Введите сторону а", ''), +prompt("Введите сторону b", '')));

let paramsExp = function(a, b) {
    if (a == b) return `Периметр квадрата: ${a + b}`;
    else return `Площадь прямоугольника: ${a * b}`;
}

alert(paramsExp(+prompt("Введите сторону а", ''), +prompt("Введите сторону b", '')))

//Задание 6
function password () {
    let engLetter = 26**5;
    let numbs = 10**3;
    let pass = engLetter * numbs;
    let seconds = pass * 3;

    let minutes = Math.trunc(seconds / 60);
    seconds = seconds % 60;

    let hours = Math.trunc(minutes / 60);
    minutes = minutes % 60;

    let days = Math.trunc(hours / 24);
    hours = hours % 24;

    let mounths = Math.trunc(days / 30);
    days = days % 30;

    let years = Math.trunc(mounths / 12);
    mounths = mounths % 12;

    alert(`${years} лет ${mounths} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд` );
}

password();

//Задание 7
let ThreeParams = (a, b, c = 23) => {return a + b + c};
alert(ThreeParams("lllll", prompt("Введите параметр!", '')));