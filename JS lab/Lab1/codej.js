//Задание 1 -----------------------------------
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) result *= x;
    return result;
}

x = prompt("x?",'');
n = prompt("n?", '');

if(n < 0) alert (`Степень ${n} не поддерживается, введите целую степень, большую от 0`);
else alert(pow(x, n));


//Задание 2 -----------------------------------
let userName = "Максим";
let city = "Брест";
let dataBirthDay = "30.04.2004";
let color = "red";
let userAnswer = "да/нет";
let inf = Infinity;
let num = 532;
let perimeter = "120 мм";
let messegeUser = "Введённые данные неверны";


//Задание 3 -----------------------------------
let a = 5; //number
let name = "Name"; //string
let i = 0; //number
let double = 0.23; //number
let result = 1/0; //number(infinity)
let answer = true; //bool
let no = null; //null(number)


//Задание 4 -----------------------------------
alert(45 * 21 + " мм^2");


//Задание 5 -----------------------------------
let smallSquare = 5 * 5;
let bigSquare = 45 * 21;
alert (`${Math.floor(bigSquare / smallSquare)} раза может вместиться`);


//Задание 6 -----------------------------------
let i1 = 2;
alert(i1);
let a1 = ++i1;
alert(a1);
let b1 = i1++;
alert(b1);


//Задание 7 -----------------------------------
if("Привет" < "привет") alert("1) Привет < привет"); 
if("Привет" > "Пока") alert("2) Привет < Пока"); 
if(45 < "53") alert("3) 45 < 53"); 
if(false < 3) alert("4) false < 3"); 
if(true < 3) alert("5) true < 3"); 
if(3 < "5мм") alert("6) 3 < 5мм"); 
if(null < undefined) alert("7) null < undefined"); 


//Задание 8 -----------------------------------
alert(messegeUser);


//Задание 9 -----------------------------------
let SecretAnswer = prompt("С каким животным ассациировался Игорь в детстве?", '');
if(SecretAnswer == "Кролик") alert("Ответ правильный");
else alert("Ответ не правильный.");


//Задание 10 -----------------------------------
let Name = prompt("Введите имя пользователя", '');
let password = prompt("Введите пароль", '');
if(password != "кор2999" || Name != "Илья") alert ("Непрвильно введено имя пользователя или пароль");
else alert("Данные введены верно!");


//Задание 11 -----------------------------------
let Marks = [5, 8, 4];
let BadMarks = 0;

for (let i = 0; i < 3; i++) {
    if (Marks[i] < 4) BadMarks++;
}

if (BadMarks == 3) alert("Отчислен");
else if (BadMarks >= 1) alert("Пересдача");
else alert("Сдал");


//Задание 12 -----------------------------------
let a2 = +prompt("Введите число а", '');
let b2 = Number(prompt("Введите число b", ''));
alert (a2 + b2);


//Задание 13 -----------------------------------
let l1 = true + true;
alert(l1);
let l2 = 0 + "5";
alert(l2);
let l3 = 5 + "мм";
alert(l3);
let l4 = 8 /Infinity;
alert(l4);
let l5 = 9 * "\n9";
alert(l5);
let l6 = null - 1;
alert(l6);
let l7 = "5" - 2;
alert(l7);
let l8 = "5px" - 3;
alert(l8);
let l9 = true - 3;
alert(l9);
let l10 = 7 || 0;
alert(l10);


//Задание 14 -----------------------------------
let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
    numbs[i] % 2 == 0 ? alert(numbs[i] + 2) : alert(numbs[i] + " мм");
}


//Задание 15 -----------------------------------
let numb
do {
    numb = prompt ("Введите число (>100 - выход)", '');
} while (numb < 100);


//Задание 16 -----------------------------------
let day = Number(prompt ("Введите номер дня недели", ''));
switch (day) {
    case 1: alert("Понедельник"); break;
    case 2: alert("Вторник"); break;
    case 3: alert("Среда"); break;
    case 4: alert("Четверг"); break;
    case 5: alert("Пятница"); break;
    case 6: alert("Суббота"); break;
    case 7: alert("Восресенье"); break;
    default: alert("Такого дня недели нет!"); break;
}       