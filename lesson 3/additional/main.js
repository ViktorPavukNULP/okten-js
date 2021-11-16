// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i<50; i++){
//     arr[i] = Math.floor(Math.random()*25)*2
// }
// console.log(arr)
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i<50; i++){
//     arr[i] = Math.floor(Math.random()*25)*2+1
// }
// console.log(arr)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*50)
// }
// console.log(arr)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*724)+8;
// }
// console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемент
// let arr = [];
// for (let i = 0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*724)+8;
// }
// for (let i = 0; i<arr.length; i+=3){
//     console.log(arr[i]);
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [];
// for (let i = 0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*724)+8;
// }
// for (let i = 0; i<arr.length; i+=3){
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [];
// for (let i = 0; i<20; i++){
//     arr[i] = Math.floor(Math.random()*724)+8;
// }
// new_arr = [];
// for (let i = 0; i<arr.length; i+=3){
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//         new_arr.push(arr[i]);
//     }
// }
// console.log(new_arr)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr=[ 1, 2, 3, 5, 7, 9, 56, 8, 67, 8 ];
// for (let i=0; i<arr.length;i++){
//     if (arr[i+1]%2===0){
//         console.log(arr[i]);
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let list = [100,250,50,168,120,345,188];
// let average = 0;
// for (item of list){
//     average += item;
// }
// average = average/list.length;
// console.log(average)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// rand_arr = [];
// for (let i = 0; i<50; i++){
//     rand_arr.push(Math.floor(Math.random()*50))
// }
// console.log(rand_arr)
// let new_rand_arr = [];
// for (element of rand_arr){
//     new_rand_arr.push(element*5);
// }
// console.log(new_rand_arr);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = [1, true, 'opel', 223, 'bmw', false, 'volkswagen', 23, true];
// let another_arr = [];
// for (element of arr){
//     if (typeof element ==='number'){
//         another_arr.push(element);
//     }
// }
// console.log(another_arr);
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// let usersWithCities = [];
// for (let i = 0; i < 4; i++) {
//     let id = citiesWithId[i].user_id - 1;
//     usersWithCities.push({
//         id: usersWithId[id].id,
//         name: usersWithId[id].id,
//         age: usersWithId[id].age,
//         status: usersWithId[id].status,
//         address: {
//             user_id: citiesWithId[i].user_id, // <===
//             country: citiesWithId[i].country,
//             city: citiesWithId[i].city
//         }
//     });
// }
// console.log(usersWithCities);
//
//
//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i<arr.length; i++){
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr_copy = [];
// for (let i = 0; i<arr.length; i++){
//     arr_copy[i] = arr[i];
// }
// console.log(arr_copy)
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let letters = [ 'a', 'b', 'c'];
// let word = '';
// for (let i=0; i<letters.length; i++){
//     word = word + letters[i];
// }
// console.log(word)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let letters = [ 'a', 'b', 'c'];
// let word = '';
// let i = 0;
// while   (i<letters.length){
//     word = word + letters[i];
//     i++;
// }
// console.log(word)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let letters = [ 'a', 'b', 'c'];
// let word = '';
// for (letter of letters){
//     word = word + letter;
// }
// console.log(word)
