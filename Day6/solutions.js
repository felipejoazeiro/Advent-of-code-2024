const { table } = require('console')
const fs = require('fs')
const path = require('path')

class Solutions{
    firstPart(){
        const position = this.findStart()

        var table = this.startWalking(position.row, position.column, position.table)

        this.countThePath(table);

    }

    findStart(){
        try {
            const filePath = path.join(__dirname, 'data.txt')
            const data = fs.readFileSync(filePath, 'utf-8')

            const table = data.split('\n').map((row)=> row.split(""))

            const columns = table.length;
            const rows = table[0].length;


            for (let row = 0; row < rows; row++) {
                for (let column = 0; column < columns; column++) {
                    if(table[row][column].toString() == "^"){
                        return {table ,row, column}
                    }
                };
            }

            return null

        } catch (error) {
            console.error(error)
        }
    }

    startWalking(row, column, table){
        let direction = 'up'
        while(true){
            if (row < 0 || column < 0 || row >= table.length || column >= table[0].length) {
                console.log('Fora dos limites da tabela.');
                break;
            }
            if(direction == 'up'){
                if(table[row-1][column] != '#'){
                    table[row][column] = 'X'
                    row--
                }else{
                    direction = 'right'
                }
            }else if(direction == 'right'){
                if(table[row][column+1] != '#'){
                    table[row][column] = 'X'
                    column++
                }else{
                    direction = 'down'
                }
            }else if(direction == 'down'){
                if(table[row+1][column] != '#'){
                    table[row][column] = 'X'
                    row++
                }else{
                    direction = 'left'
                }
            }else if(direction == 'left'){
                if(table[row][column-1] != '#'){
                    table[row][column] = 'X'
                    column--
                }else {
                    direction = 'up'
                }
            }
        }

        return table;
    }

    countThePath(table){
        let count = 0;
        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table[i].length; j++) {
                if(table[i][j] == 'X'){
                    count++
                }
            }
        }
        console.log(count)
    }

    secondPart(){
        const position = this.findStart()

        var table = this.startWalking(position.row, position.column, position.table)
    }

    startFindingLoops(row, column, table){
        let countLoops = 0
        let direction = 'up'
        let pontA = table[row][column]
        let pontB = table[row][column]

        while(true){
            if (row < 0 || column < 0 || row >= table.length || column >= table[0].length) {
                console.log('Fora dos limites da tabela.');
                break;
            }
        }
    }
}

module.exports = Solutions;