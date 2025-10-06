let userName = prompt ("Введите имя");
let userAge = +prompt ("Введите год рождения");


if (userAge) {
  alert (`${userName}: ${2025 - userAge}`)

} else {
  alert ("Год должен быть числом!")
}

