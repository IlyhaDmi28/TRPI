"use strict";
class Item {
    get id() { return this._id; }
    get size() { return this._size; }
    get color() { return this._color; }
    get cost() { return this._cost; }
    get discount() { return this._discount; }
    get final_cost() { return this._final_cost; }
    set new_final_cost(value) {
        if (value > this._cost)
            alert("Конечная цена не может быть больше основной!");
        else {
            this._final_cost = value;
            this._discount = 100 - (this._final_cost / this._cost);
            alert(`Теперь скидка на этот товар состовляет ${this._discount}%`);
        }
    }
    constructor(id, size, color, cost, discount) {
        this._id = id;
        this._size = size;
        this._color = color;
        this._cost = cost;
        this._discount = discount;
        this._final_cost = cost * (1 - discount / 100);
    }
}
class Type {
    get name() { return this._name; }
    get items() { return this._items; }
    constructor(name) {
        this._name = name;
        this._items = [];
        while (true) {
            this._items.push(new Item(Number(prompt("Введите ID")), Number(prompt("Введите размер")), String(prompt("Введите цвет")), Number(prompt("Введите цену")), Number(prompt("Введите скидку"))));
            if (prompt("1 - Продолжить\n0 - Выйти\n Введите команду") === '0')
                break;
        }
    }
}
class Category {
    get name() { return this._name; }
    get types() { return this._types; }
    constructor(name) {
        this._name = name;
        this._types = [];
        while (true) {
            this._types.push(new Type(String(prompt("Введите товар"))));
            if (prompt("1 - Продолжить\n0 - Выйти\n Введите команду") === '0')
                break;
        }
    }
}
class Product {
    constructor() {
        this._categories = [];
        this._categories.push(new Category(String(prompt("Введите категорию"))));
    }
    iterated() {
        for (let category of this._categories) {
            let str = "";
            str += "Категория: " + category.name + '\n';
            for (let type of category.types) {
                str += "Вид: " + type.name + '\n';
                for (let item of type.items) {
                    str += `ID: ${item.id}, Размер: ${item.size}, Цвет: ${item.color}, ` + `Цена: ${item.final_cost}; ` + "\n";
                }
                str += "\n";
            }
            alert(str);
        }
    }
    filtered() {
        while (true) {
            let temp = Number(prompt("Введите критерий\n1. Цена\n2. Размер\n3. Цвет\n0. Выход"));
            switch (temp) {
                case 1: {
                    let cost_min = Number(prompt("Введите нижнюю границу цены"));
                    let cost_max = Number(prompt("Введите верхнюю границу цены"));
                    for (let category of this._categories) {
                        let str = "";
                        str += "Категория: " + category.name + '\n';
                        for (let type of category.types) {
                            str += "Вид: " + type.name + '\n';
                            for (let item of type.items) {
                                if (item.final_cost >= cost_min && item.final_cost <= cost_max) {
                                    str += `ID: ${item.id}, Размер: ${item.size}, Цвет: ${item.color}, ` + `Цена: ${item.final_cost};\n`;
                                }
                            }
                            str += "\n";
                        }
                        alert(str);
                    }
                    break;
                }
                case 2: {
                    let size = Number(prompt("Введите размер"));
                    for (let category of this._categories) {
                        let str = "";
                        str += "Категория: " + category.name + '\n';
                        for (let type of category.types) {
                            str += "Вид: " + type.name + '\n';
                            for (let item of type.items) {
                                if (item.size == size) {
                                    str += `ID: ${item.id}, Размер: ${item.size}, Цвет: ${item.color}, ` + `Цена: ${item.final_cost};\n`;
                                }
                            }
                            str += "\n";
                        }
                        alert(str);
                    }
                    break;
                }
                case 3: {
                    let color = String(prompt("Введите цвет"));
                    for (let category of this._categories) {
                        let str = "";
                        str += "Категория: " + category.name + '\n';
                        for (let type of category.types) {
                            str += "Вид: " + type.name + '\n';
                            for (let item of type.items) {
                                if (item.color == color) {
                                    str += `ID: ${item.id}, Размер: ${item.size}, Цвет: ${item.color}, ` + `Цена: ${item.final_cost};\n`;
                                }
                            }
                            str += "\n";
                        }
                        alert(str);
                    }
                }
                case 0: return;
            }
        }
    }
}
let product = new Product();
product.iterated();
