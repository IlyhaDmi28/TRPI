
let Comment;

while(true){
    Comment = prompt("Введите текст с котами и собаками",'котик милый, собака большая, пес хороший.');

    if(Comment.length < 100) break;
    
    alert("Вы ввели слишком много символов");    
}

    Comment = Comment.replace(/кот/g, "*");
    Comment = Comment.replace(/собака/g, "Собака");
    Comment = Comment.replace(/ пес/g, " Многоуважаемый пес");

    alert(Comment);

////// 2

let WeekDays = {
    1: "пн",
    2: "вт",
    3: "ср",
    4: "чт",
    5: "пт",
    6: "сб",
    7: "вс"
}
let UserAnswer = +prompt("Выберите день недели!");
alert(WeekDays[UserAnswer]);

for(day in WeekDays){
    if(day % 2 != 0){
        alert(`${day} - ${WeekDays[day]}`)
    }
}

/////// 3
let button = createButton(15,13,"green","blue");
let link = createLink(8,"Areal","black");
let accent = {
    BgColor: "yellow"
};

let accentButton = {};
let accentLink = {};

Object.assign(accentButton, button, accent);
Object.assign(accentLink, link, accent);

let str1 = "";
for(let key in accentButton) {
    str1 += accentButton[key];
    str1 += " ";
}
alert(str1);

let str2 = "";
for(let key in accentLink) {
    str2 += accentLink[key];
    str2 += " ";
}
alert(str2);

function createButton(Width,Height,BgColor,TextColor){
    return {
        Width,
        Height,
        BgColor,
        TextColor
    };
}
function createLink(FontSize,Font,TextColor){
    return {
        FontSize,
        Font,
        TextColor
    };
}
//////// 4

function Task4()
{
    let Products = new Set();
    let choise;
    while(true)
    {
        choise = +prompt("Что желаете?\n1 - добавить товар\n2 - удалить товар\n3 - поиск товара\n4 - кол-во товаров\n0 - Выход",'');

        switch(choise){
            case 1:
                Products.add(prompt("Введите название товара", ''))
                break;
            case 2:
                Products.delete(prompt("Введите название товара", ''))
                break;
            case 3:
                Products.has(prompt("Введите название товара")) ? alert("Имеется такой товар") : alert("Нет такого товара");
                break;
            case 4:
                alert("Кол-во товаров "+Products.size);
                break;
            case 0: return; break;
            default: alert("Выбор сделан некорректно!"); break;
        }
    }
    
}
Task4();

///5 

function Task5() 
{
let basket = new Map();
    while (true) {
        let choose = +prompt("1 - добавить\n2 - удалить\n3 - изменить кол-во товара\n4 - кол-во позиций и сумма заказа\n0 -выход",'');
        let summ = 0;
        let tmp = {
            id: id = 0,
            Count: ct = 0,
            Price: pr = 0
        }
        switch (choose) {
            case 1:
                tmp.id = +prompt("id");
                tmp.Count = +prompt("Кол-во");
                tmp.Price = +prompt("Цена");
                basket.set(tmp.id, tmp);
                break;
            case 2:
                basket.delete(+prompt("Введите номер товара для удаления"));
                break;
            case 3:
                let buff = {
                    id: tmp.id,
                    Count: +prompt("Введите новое кол-во"),
                    Price: tmp.Price
                }
                basket.set(+prompt("Введите номер товара"), buff);
                break;
            case 4:
                for (let item of basket.values()) {
                    summ += item.Price * item.Count;
                }
                alert(summ + " - сумма " + basket.size + " кол-во позиций");
                break;
            case 0: return; break;
            default: alert("Выбор сделан некорректно!"); break;
        }
    }
}
Task5();