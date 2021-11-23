const pi = 3.14;
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// rect_s = (a,b)=> a*b;
// console.log(rect_s(10,20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// circ_s = (r)=> pi*r**2;
// console.log(circ_s(5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// cylinder_s = (r,h)=> 2*pi*r*h;
// console.log(cylinder_s(10,20));
// - створити функцію яка приймає масив та виводить кожен його елемент
// print_arr = (arr)=>{
//     for (element of arr) {
//         console.log(element);
//     }
// }
// print_arr([1,2,3,4,5]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// create_p = (text)=>{
//     document.write(`<p>${text}</p>`);
// }
// create_p('hello world');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// create_ul = (li)=>{
//     document.write(`<ul>
//         <li>${li}</li>
//         <li>${li}</li>
//         <li>${li}</li>
//     </ul>`);
// }
// create_ul('zdorov');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// create_ul2 = (li,n)=>{
//     document.write(`<ul>`);
//     for (let i =0; i<n; i++){
//         document.write(`<li>${li}</li>`);
//     }
//     document.write(`</ul>`);
// }
// create_ul2('hello',10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// create_list = (arr)=>{
//     document.write(`<ul>`);
//     for (element of arr){
//         document.write(`<li>${element}</li>`);
//     }
//     document.write(`</ul>`);
// }
// create_list(['hello',123,true,'okten',140,false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

write_objects = (arr)=>{
    document.write(`<div>`);
    for (element of arr) {
        document.write(`<h3>${element.id} ${element.name} ${element.age}</h3>`);
    }
    document.write(`</div>`);
}
write_objects([{id: 1, name: 'Rostik', age: 18},
    {id: 2, name: 'Vova', age: 30},
    {id: 3, name: 'Pasha', age: 23},
    {id: 4, name: 'Misha', age: 19}]);