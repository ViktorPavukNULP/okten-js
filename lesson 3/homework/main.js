// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ['misha', 'vasya', 'petya', 'nadya', 'topik'];
// let arr3 = [1, 'masha', true, 8, false];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


//-- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array[0] = 1;
// array[1] = false;
// array[2] = 'vasya';
// array[3] = [1,2];
// array[4] = true;
// console.log(array)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i=0; i<10; i++){
//     document.write('<div>Hello</div>');
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом
// всередині

// for (let i=0; i<10; i++){
//     document.write('<div>Hi ',i,'</div>');
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20){
//     document.write('<h1>Zdorov</h1>');
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20){
//     document.write('<h1>Zdorov ',i,'</h1>');
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

//     let arr = [1,2,3,4,5,6,7,8,9,0];
//     for (element of  arr){
//         console.log(element);
//     }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['misha','ganya','oksana','svitlana','klara','marta','petro','rostyk','rovyr','olya','opel'];
// for (element of  arr){
//     console.log(element);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1,'ganya',3,true,'klara',[1,2,3],'petro',25,false,'olya',24];
// for (element of  arr){
//     console.log(element);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою
// if та typeof вивести тільки булеві елементи

// let arr = [1,'ganya',3,true,'klara',[1,2,3],'petro',25,false,'olya',24];
// for (element of  arr){
//     if (typeof element == "boolean"){
//         console.log(element);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою
// if та typeof вивести тільки числові елементи

// let arr = [1,'ganya',3,true,'klara',[1,2,3],'petro',25,false,'olya',24];
// for (element of  arr){
//     if (typeof element == "number"){
//         console.log(element);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою
// if та typeof вивести тільки рядкові елементи

// let arr = [1,'ganya',3,true,'klara',[1,2,3],'petro',25,false,'olya',24];
// for (element of  arr){
//     if (typeof element == "string"){
//         console.log(element);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 10;
// arr[1] = true;
// arr[2] = 20;
// arr[3] = 'masha';
// arr[4] = false;
// arr[5] = true;
// arr[6] = 'petya';
// arr[7] = 'opel'
// arr[8] = 1.9;
// arr[9] = 'tdi';
// for (element of arr){
//     console.log(element)
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i<11; i++){
//     console.log("Крок ", i);
//     document.write("Крок ", i,'<br>');
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i<101; i++){
//     console.log("Крок ", i);
//     document.write("Крок ", i,'<br>');
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i<201; i+=2){
//     console.log("Крок ", i);
//     document.write("Крок ", i,'<br>');
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 1; i<101; i++){
//     if (i%2===0){
//         console.log("Крок ", i);
//         document.write("Крок ", i,'<br>');
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 1; i<101; i++){
    if (i%2!==0){
        console.log("Крок ", i);
        document.write("Крок ", i,'<br>');
    }
}