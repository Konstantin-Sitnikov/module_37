let text = prompt ("введите фразу:")

let newText = ""

const arrSymbol = [" ", "!", "\"", "#", "$", "%", 
    "&", "\'", "(", ")", "*", "+", ",", "-", ".",  "/", 
    ";", ":", "<", "=", ">", "?", "@", "[", "\\", "]", "^", 
    "_", "`", "{", "}", "|", "~" ]

for (i = 0; i < text.length; i += 1)
    //удаляем все знаки препинания и пробелы приводим к нижнему регистру
    if ( arrSymbol.includes(text[i])) {
        continue;
    } else {
        newText += text[i].toLowerCase()
    }


let reverseText = ""

//Переворачиваем текст
for (i = (newText.length - 1); i >= 0; i -= 1) {
    reverseText += newText[i]
}

//сравниваем исходный и перевернутый тексты выводим соответствующие сообщения
if (newText === reverseText) {
    alert(`Фраза: ${text} является палиндромом`)
} else {
    alert(`Фраза: ${text} не является палиндромом`)
}

