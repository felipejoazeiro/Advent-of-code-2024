const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

let firstColumn  = [];
let secondColumn = [];

let calColumn = [];

try{
    const data = fs.readFileSync(filePath, 'utf-8');
    
    const lines = data.split('\n')
    
    lines.forEach(line => {
        line = line.trim();
        
        const numbers = line.split(/\s+/);
        firstColumn.push(numbers[0]);
        secondColumn.push(numbers[1]);
    })

    let value = 0;

    firstColumn.sort((a,b)=> a-b);
    secondColumn.sort((a,b)=> a-b);


    if(firstColumn.length == secondColumn.length){
        for (let i = 0; i < firstColumn.length; i++) {
            if(secondColumn[i] >= firstColumn[i]){
                value = secondColumn[i] - firstColumn[i];
            }else{
                value = firstColumn[i] - secondColumn[i];
            }
            calColumn.push(value);
        }
    }

    let distance = 0;

    calColumn.forEach(number => {
        distance = distance + number;
    })

    console.log(distance);
}catch(err){
    console.error('Erro ao ler arquivo',err);
}