// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const min = (a,b,c)=>{
//     if (a<=b & a<=c){
//         return a;
//     } else if (b<=a & b<=c){
//         return b;
//     }
//     return c;
// }
// console.log(min(3,4,3));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const max = (a,b,c)=>{
//     if (a>=b & a>=c){
//         return a;
//     } else if (b>=a & b>=c){
//         return b;
//     }
//     return c;
// }
// console.log(max(4,4,5));
// - створити функцію яка повертає найбільше число з масиву
const arr_max = (arr)=>{
    let max = arr[0];
    for (element of arr) {
        if (element>max){
            max = element;
        }
    }
    return max;
}
// console.log(arr_max([4,5,6,4]));
// - створити функцію яка повертає найменьше число з масиву
const arr_min = (arr)=>{
    let min = arr[0];
    for (element of arr) {
        if (element<min){
            min = element;
        }
    }
    return min;
}
// console.log(arr_min([4,5,6,3]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const arr_sum = (arr)=>{
//     let sum = 0;
//     for (element of arr) {
//         sum+=element;
//     }
//     return sum;
// }
// console.log(arr_sum([1,2,3,4]));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const arr_mean = (arr)=>{
//     let sum = 0;
//     for (element of arr) {
//         sum+=element;
//     }
//     return sum/arr.length;
// }
// console.log(arr_mean([1,2,3,4]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function printmax_returnmin(){
//     console.log(arr_max(arguments));
//     return arr_min(arguments);
// }
// const printmax_returnmin = ( ...args)=>{
//     console.log(arr_max(args));
//     return arr_min(args);
// }
// console.log(printmax_returnmin(1,2,3,4));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// const arr_random = ()=>{
//     let arr = [];
//     for (let i=0; i<10; i++){
//         arr[i] = Math.round(Math.random()*100);
//     }
//     return arr;
// }
// console.log(arr_random());
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const arr_random_limit = (limit)=>{
//     let arr = [];
//     for (let i=0; i<10; i++){
//         arr[i] = Math.round(Math.random()*limit);
//     }
//     return arr;
// }
// console.log(arr_random_limit(7));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr){
//     let new_arr = [];
//     for (let i = arr.length-1; i >=0 ; i--) {
//         new_arr.push(arr[i])
//     }
//     return new_arr;
// }
const reverse = (arr)=>{
    let new_arr = [];
    for (let i = arr.length-1; i >=0 ; i--) {
        new_arr.push(arr[i])
    }
    return new_arr;
}
console.log(reverse([1,2,3]));