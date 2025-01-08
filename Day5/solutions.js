const fs = require('fs')
const path = require('path')

class Solutions{
    getData(){
        try{
            const filePath = path.join(__dirname, 'data.txt')
            return fs.readFileSync(filePath, 'utf-8')
        }catch(e){
            console.error(e.message)
        }
    }

    firstPart(){
        let [rules, data] = this.getData().split("\n\r\n");

        const json = {}

        rules.split("\n").forEach((line)=>{
            const [left, right] = line.split('|').map(num=>parseInt(num.trim(),10))
            if(!json[left]){
                json[left]=[]
            }
            json[left].push(right);
        })

        const dataLines = data.split('\n')
        let valid = true;
        let count = 0

        for (let i = 0; i < dataLines.length; i++) {
            let line = dataLines[i].trim().split(',');
            for (let j = line.length; j > 0; j--) {
                for (let z = 0; z < line.length -1; z++) {
                    let last = line[line.length-1];
                    console.log(last);
                    line.pop()
                }
                if(!valid) break;
            }
            console.log(valid);
            if(valid) count++ 
            valid = true;
        }
    }

    secondPart(){}
}

module.exports = Solutions;