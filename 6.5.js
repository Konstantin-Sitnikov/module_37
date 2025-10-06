    const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };

    let list = []

for (val of Object.values(obj)) {
    console.log(val)
    if (Array.isArray(val)) {
        for (i of val) {
                list.push(i)
            }
    } 
        
    else {
                list.push(val)
            }
}

console.log(list)