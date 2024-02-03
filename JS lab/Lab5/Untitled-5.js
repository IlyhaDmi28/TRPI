class Product
{
    catagory = [];

    constructor()
    {
        this.catagory.push(new Catagory(prompt("Введите категорию")));
    }

    iterated()
    {
        for (let ctgr of this.catagory)
        {
        let str = "";
        str += "Категория: " + ctgr.name + '\n';
            for (let tp of ctgr.type)
            {
                str += "Вид: " + tp.name + '\n';
                for (let gds of tp.goods)
                {
                    str += `ID: ${gds._id}, Размер: ${gds._size}, Цвет: ${gds._color}, `  + `Цена: ${gds._cost}; ` + "\n";
                }
                str += "\n";
            }
            alert(str);
        }
    }
    
    filtered()
    {
        let temp = prompt("Введите критерий");
        
        for (let ctgr of this.catagory)
        {
            let str = "";

            str += "Категория: " + ctgr.name + '\n';
            for (let tp of ctgr.type)
            {
                str += "Вид: " + tp.name + '\n';
                for (let gds of tp.goods)
                {
                    if (gds._size == temp || gds._color == temp || gds._cost == temp)
                    {
                        str += `ID: ${gds._id}, Размер: ${gds._size}, Цвет: ${gds._color}, ` + `Цена: ${gds._cost}; `;
                    }
                }
            str += "\n";
            }
            alert(str);
        }
    }
}

class Catagory
{

    type = [];
    name;

    get name() { return this.name; }

    constructor(name)
    {   
        this.name = name;
        while (true)
        {
            this.type.push(new Type(prompt("Введите товар")));
            if (prompt("1 - Продолжить\n0 - Выйти\n Введите команду") == '0') break;
        }
    }
}

class Type
{
    goods = [];
    name;

    get name() { return this.name; }

    constructor(name)
    {
        this.name = name;
        while (true)
        {
            this.goods.push(new Good(+prompt("Введите ID"),
            +prompt("Введите размер"),
            prompt("Введите цвет"),
            +prompt("Введите цену"),
            +prompt("Введите скидку")));
            if (prompt("1 - Продолжить\n0 - Выйти\n Введите команду") == '0') break;
        }
    }
}

class Good
{
    _id;
    _size;
    _color;
    _cost;

    get id() { return this._id; }
    get size() { return this._size; }
    get color() { return this._color; }
    get cost() { return this._cost; }

    constructor (id, size, color, cost, discount)
    {
        this._id = id;
        this._size = size;
        this._color = color;
        this._cost = cost * (1 - discount);
    }
}

let obj = new Product();
obj.iterated();
obj.filtered();