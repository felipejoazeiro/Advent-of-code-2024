const fs = require('fs')
const path = require('path')

class Solutions{
    firstPart(){
        try {
            const filePath = path.join(__dirname, 'data.txt');
    
            const data = fs.readFileSync(filePath, 'utf-8');
    
            const regex = /mul\(-?\d+,\s*-?\d+\)/g;
    
            const matches = data.match(regex);

            let numbersArray = [];

            matches.forEach(data=>{
                const onlyNumbers = /-?\d+,\s*-?\d+/g;
                numbersArray.push(data.match(onlyNumbers));
            })

            let value = 0;
           numbersArray.forEach(data=>{
            value = value + (data.toString().split(',')[0] * data.toString().split(',')[1])
           })

           console.log(value);
        } catch (error) {
            console.error(error.toString());
        }
    }

    secondPart(){
        
    }
}

module.exports = Solutions;