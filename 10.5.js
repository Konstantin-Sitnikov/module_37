
let userAge = +prompt ("Введите ваш возраст");
let maxCount = 0


if (userAge) {

    if (userAge  < 18) {
        alert ("Вам нет 18 лет, мы не можем выдать вам кредит")
    }

    if (18 <= userAge && userAge <= 21) {
        maxCount = 50000
    }

    if (22 <= userAge && userAge <= 35) {
        maxCount = 400000
    }

    if (36 <= userAge && userAge <= 65) {
        maxCount = 1000000
    }

    if (userAge > 65) {
        alert ("Вам больше 65 лет, к сожалению мы не можем выдать вам кредит")
    }

    if (18 <= userAge && userAge <= 65) {
        let userCount = +prompt (`мы можем вым выдать максимум ${maxCount}.\nВведите сумму кратную 1000`);
        if (userCount) {
            if (userCount <= maxCount) {

                if (userCount % 1000 === 0 ) {
                    alert (`Отлично!!! мы можем вам выдать: ${userCount}`)
                } else {
                    alert (`Вы ввели сумму не кратную 1000, можем выдать вам ${userCount - userCount % 1000}`)
                }
            } else {
                alert (`Вы указали сумму ${userCount}, но к содалению мы не можем вам выдать сумму больше: ${maxCount}`)
            }

        } else {
            alert ("Введите сумму кредита числом!!!")
        }
    }


} else {
  alert ("Возраст может быть только числом!")
}

