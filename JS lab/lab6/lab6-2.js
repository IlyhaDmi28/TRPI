let products = new Array();

class Product{
    constructor(id, price, name, img, background){
        this.id = id;   
        this.price = price;
        this.name = name;
        this.img = img;
        this.background = background;
        products.push(this);
    }

    addOnPage(){
        let div = document.createElement('div');
        div.className = "infoblock";
        div.style.width = '250px';
        div.style.height = '350px';
        div.style.textAlign = 'center';
        div.style.background = this.background;

        allProducts.append(div);
        allProducts.style.width = '100%';
        allProducts.style.display = 'flex';
        allProducts.style.flexWrap = 'wrap';
        let img = document.createElement('img');
        img.src = this.img;
        img.style.width = '200px';
        img.style.height = '200px';
        div.prepend(img);

        let p = document.createElement('p');
        p.innerHTML = this.name;
        p.style.fontSize = '20px';
        p.style.fontWeight = 'bold';
        div.append(p);
        let p2 = p.cloneNode(true);
        p2.innerHTML = this.price + " $";
        p2.style.fontSize = '12px';
        div.append(p2);
        let button = new Button(150, 75, 'blue','В корзину');
        div.append(button.addButton()); 
        
    } 
}

class Button{
    constructor(width, height, background, text){
        this.width = width;
        this.height = height;
        this.text = text;
        this.background = background;
    }

    addButton(){
        let button = document.createElement('button');
        button.innerHTML = this.text;
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.style.color = 'white';
        button.style.border = '5px solid blue';
        button.style.borderRadius = '5px';
        return button;
    }
}
function Delete(id) {
    let massive = document.getElementsByClassName('infoblock');
    for(let x = 0; x < massive.length; x++){
        if((x+1) == id){
            massive[x].remove();
        }
    }
}

function backgroundOdd(){
    let massive = document.getElementsByClassName('infoblock');
    for(let i = 0 ; i < massive.length; i++){
        if(i % 2 == 0){
            massive[i].style.background = 'gray';
        }
        else {
            massive[i].style.background = 'white';
        }
    }
}
let cartButton = new Button(150, 75, 'blue','Корзина');
document.body.style.textAlign="right";
document.body.prepend(cartButton.addButton());

let first = new Product(1, 10000,'Ноутбук HP 255 G8 3V5H6EA', "nout.jpg", 'white');
first.addOnPage();
let second = new Product(2, 15000,'Ноутбук HP 255 G8 3V5H6EA', "nout.jpg", 'white');
second.addOnPage();
let third = new Product(3, 20000,'Ноутбук HP 255 G8 3V5H6EA', "nout.jpg", 'white');
third.addOnPage();
let fourth = new Product(4, 25000,'Ноутбук HP 255 G8 3V5H6EA', "nout.jpg", 'white');
fourth.addOnPage();
let fiveth = new Product(5, 30000,'Ноутбук HP 255 G8 3V5H6EA', "nout.jpg", 'white');
fiveth.addOnPage();
let sixth = new Product(6, 35000,'Ноутбук HP 255 G8 3V5H6EA', "nout.jpg", 'white');
sixth.addOnPage();
Delete(6);
Delete(1);
backgroundOdd();

