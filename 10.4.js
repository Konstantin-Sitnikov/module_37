let userName = prompt ("Введите имя");
let userDate = +prompt ("Введите год рождения");


if (userName && userDate) {

    let userAge = 2025 - userDate

if ((userAge % 10) === 0 || (5 <= (userAge % 10) && (userAge % 10) <= 9)) {

    alert (`${userName}: ${userAge} лет!`) 
}
if ((userAge % 10) === 1) {
    alert (`${userName}: ${userAge} год!`)
}

if (2 <= (userAge % 10) && (userAge % 10) <= 4) {
    alert (`${userName}: ${userAge} года!`)
}


} else {
  alert ("Год не число или пустое имя!")
}

