let number = +prompt ("Введите число")
let list = []

if (number) {
    for (i = 0; i <= number; i += 1) {
        list.push(i)
    }

    console.log(list)
} else {
    console.log("Вы ввели не число")
}