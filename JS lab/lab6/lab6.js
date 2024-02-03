const square = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    background: 'yellow'
}

const circle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'white'
}

const triangle = {
    width: 0,
    height: 0,
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    middleLine: true, 
}

const secondSquare = {
    width: '100px',
    height: '100px',
    border: '10px solid black',
    background: 'yellow'
}

const secondCircle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'green'
}

const secondTriangle = {
    width: 0,
    height: 0,
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    threeMiddleLines: true, 
}

function CircleDifference(figureOne, figureTwo){
   const propsOne = Object.getOwnPropertyNames(figureOne);
   const propsTwo = Object.getOwnPropertyNames(figureTwo);

   for(let i = 0; i < propsOne.length; i++){
        if(figureOne[propsOne[i]] != figureTwo[propsTwo[i]]){
            alert("Различия : " + figureOne[propsOne[i]] + " - " + figureTwo[propsTwo[i]]);
        }
   }
}
CircleDifference(circle, secondCircle);

function AllProp(figureOne){
    const propsOne = Object.getOwnPropertyNames(figureOne);
    let result = 'Треугольник :\n';
    for(let i = 0; i < propsOne.length; i++){
        result += propsOne[i] + " - " + figureOne[propsOne[i]]+"\n";
    }
    alert(result);
}
 AllProp(triangle);

function OwnColor(figureOne, figureTwo){
    const propsOne = Object.getOwnPropertyNames(figureOne);
    const propsTwo = Object.getOwnPropertyNames(figureTwo);
    let state = 0;
    for(let i = 0; i < propsOne.length; i++){
        if(figureOne[propsOne[i]] == 'yellow'){
            for(let x = 0; x < propsOne.length; x++){
                if(propsOne[i] == propsTwo[x]){
                    alert('Свойство не уникально');
                    state++;
                    break;
                }
            }
        }
    }
    
    if(state == 0){
        alert('Свойство уникально');
    }
}
OwnColor(secondSquare, square);