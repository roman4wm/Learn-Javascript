/**
 * Eloquent JavaScript
 * http://eloquentjavascript.net/
 * https://karmazzin.gitbooks.io/eloquentjavascript_ru/
 * Program Structure
 * 2.3 Chess board
 * Created by Roman Yarovoy on 07.09.2017.
 */

var point = '', symbol = prompt("Символы:", '[]'), empty = prompt("Разделитель:", '  '), col = prompt("Количество колонок:", 8), row = prompt("Количество строк:", 8);

for (var i = 1; i <= row; i++) {
    for (var k = 1; k <= col; k++) {
        if (k % 2 == 0){
            point = point + empty;
        } else {
            point = point + symbol;
        }
    }
    console.log(point);
    if (i % 2 == 0){
        point = '';
    } else {
        point = empty;
    }
}