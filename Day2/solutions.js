const fs = require('fs');
const path = require('path');

class Solutions {
    firstPart(){
        const filePath = path.join(__dirname, 'data.txt');
        let columns = [];

        try {
            const data = fs.readFileSync(filePath, 'utf-8');

            const lines = data.split('\n');

            lines.forEach(line=>{
                columns.push(line.trim());
            });

            let safe = true;
            let count = 0;

            columns.forEach(element => {
                var newColumn = element.split(' ');
                safe = true;
                let increasing = true;
                let decreasing = true;

                for (let i = 0; i < newColumn.length; i++) {
                    let value = newColumn[i] - newColumn[i+1];
                    if(value >0){
                        increasing=false;
                    }else if(value<0){
                        decreasing = false;
                    }
                    if(!isNaN(value)){
                        if(value < -3 || value > 3 || value == 0){
                            safe=false;
                            break;
                        }
                    }
                    if(!increasing && !decreasing){
                        safe = false;
                        break;
                    }
                }
                if(safe){
                    count++;
                }
            });
            console.log(count);
            
        } catch (e) {
            console.error(e.toString());
        }
    }

    secondPart(){
        const filePath = path.join(__dirname, 'data.txt');
        let columns = [];

        try {
            const data = fs.readFileSync(filePath, 'utf-8');

            const lines = data.split('\n');

            lines.forEach(line=>{
                columns.push(line.trim());
            });

            let count = 0;
            columns.forEach(element => {
                var newColumn = element.split(' ');
                let test = this.testArray(newColumn, true);
                console.log(test);
                if (test) count++;
            });

            console.log(count);
        } catch (error) {
            console.error(error);
        }
    }

    testArray(data, firsTry){
        let increasing = true;
        let decreasing = true;
        for (let i = 0; i < data.length; i++) {
            let value = data[i] - data[i+1];
            if(value >0){
                increasing=false;
            }else if(value<0){
                decreasing=false;
            }
            if(!isNaN(value)){
                if(value < -3 || value > 3 || value ==0){
                    if(firsTry){
                        console.log(data)
                        data.splice(i,1);
                        console.log(data)
                        return this.testArray(data, false);
                    }
                   return false;
                }
            }
            if(!increasing && !decreasing){
                if(firsTry){
                    data.splice(i,1);
                    return this.testArray(data, false);
                }
                return false;
            }
        }
        return true;
    }
}

module.exports = Solutions;