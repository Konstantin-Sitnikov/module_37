let str = ""

for (i = 1; i < 4; i += 1 ) {
    let row = ""
    for (j = 1; j < 4; j += 1) {
        if ((i + j ) % 2 === 0) {
            row += "X"
        } else {
            row += "O"
        }
        if (j != 3) {
            row += " "
        }
    }
    if (i !=1 ) {
        str += " "
    }
    str += row
    if (i != 3) {
        str += "\n"
    }
   
}

console.log(str)