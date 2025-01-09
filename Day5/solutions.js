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
            const [left, right] = line.split('|').map(num=>num.trim())
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
            for (let j = line.length-1; j >= 0; j--) {
                for (let z = j-1; z >= 0; z--) {
                    if(json[line[j]]?.includes(line[z])){ valid = false; break;};
                }
            }
            if(valid) count = count + parseInt(dataLines[i].trim().split(',')[Math.floor(dataLines[i].trim().split(',').length/2)])
            valid = true;
        }

        console.log(count)
    }

    secondPart(){}
}

module.exports = Solutions;