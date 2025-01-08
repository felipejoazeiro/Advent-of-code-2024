const fs = require('fs')
const path = require('path')

class Solutions{
    getData(){
        try {
            const filePath = path.join(__dirname, 'data.txt')
            return fs.readFileSync(filePath, 'utf-8');
        } catch(e){
            throw new console.error(e.message);
        }
    }

    firstPart(){
        const table = this.getData().split('\n').map((row)=> row.split(""));

        const lines = table.length;
        const columns = table[0].length;

        const word = "XMAS".split("");

        let count = 0;

        for (let i = 0; i < lines; i++) {
            for (let j = 0; j < columns; j++) {
                if(word.every((char, index)=>char==table?.[i]?.[j + index])) count++;
                if(word.every((char, index)=>char==table?.[i]?.[j - index])) count++;
                if(word.every((char, index)=>char==table?.[i + index]?.[j])) count++;
                if(word.every((char, index)=>char==table?.[i - index]?.[j])) count++;
                if(word.every((char, index)=>char==table?.[i + index]?.[j + index])) count++;
                if(word.every((char, index)=>char==table?.[i - index]?.[j - index])) count++;
                if(word.every((char, index)=>char==table?.[i + index]?.[j - index])) count++;
                if(word.every((char, index)=>char==table?.[i - index]?.[j + index])) count++;
            }
            
        }

        console.log(count);
    }

    secondPart(){
        const table = this.getData().split('\n').map((row)=>row.split(""));

        const lines = table.length;
        const columns = table[0].length;

        const word = "MAS".split("")

        let count = 0

        for (let i = 0; i < lines; i++) {
            for (let j = 0; j < columns; j++) {
               if(table[i][j] === "A"){
                    if(j>=1 && i>=1 && i+1<lines && j+1<columns){
                        if(table[i+1][j+1] == "S" 
                            && table[i-1][j-1] == "M" 
                            && table[i+1][j-1] == "M" 
                            && table[i-1][j+1] == "S") count++
                        if(table[i-1][j-1] == "S" 
                            && table[i+1][j+1] == "M" 
                            && table[i-1][j+1] == "M" 
                            && table[i+1][j-1] == "S") count++
                        if(table[i-1][j-1] == "S" 
                            && table[i+1][j+1] == "M" 
                            && table[i-1][j+1] == "S" 
                            && table[i+1][j-1] == "M") count++
                        if(table[i-1][j-1] == "M" 
                            && table[i+1][j+1] == "S" 
                            && table[i-1][j+1] == "M" 
                            && table[i+1][j-1] == "S") count++
                    }
               }   
            }
        }

        console.log(count);
    }
}

module.exports = Solutions;