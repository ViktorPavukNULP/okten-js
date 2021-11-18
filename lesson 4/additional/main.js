// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function one_return_two_add(){
//     if (arguments.length === 1){
//         return arguments[0];
//     } else if (arguments.length === 2){
//         return arguments[0] + arguments[1];
//     }
//     return "Забагато аргументів";
// }
// console.log(one_return_two_add(1));
// console.log(one_return_two_add(1,2));
// console.log(one_return_two_add(1,2,3));
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function add_arrs(arr1,arr2){
//     if (arr1.length !== arr2.length){
//         return 'error'
//     }
//     sum_arr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         sum_arr[i] = arr1[i] + arr2[i];
//     }
//     return sum_arr;
// }
// console.log(add_arrs([1,2,3],[3,2,1]));
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function all_keys(obj_arr){
//     keys = [];
//     for (obj of obj_arr) {
//         for (key of Object.keys(obj)){
//             keys.push(key);
//         }
//     }
//     return keys;
// }
// console.log(all_keys([{name: 'Dima', age: 13}, {model: 'Camry'}]))
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function all_values(obj_arr){
    values = [];
    for (obj of obj_arr) {
        for (key of Object.keys(obj)){
            values.push(obj[key]);
        }
    }
    return values;
}
console.log(all_values([{name: 'Dima', age: 13}, {model: 'Camry'}]));
