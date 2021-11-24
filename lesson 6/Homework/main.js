// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hello_length = 'hello world'.length;
// console.log(hello_length);
// let lorem_length = 'lorem ipsum'.length;
// console.log(lorem_length);
// let js_length = 'javascript is cool'.length;
// console.log(js_length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hello_upper = 'hello world'.toUpperCase();
// console.log(hello_upper);
// let lorem_upper = 'lorem ipsum'.toUpperCase();
// console.log(lorem_upper);
// let js_upper = 'javascript is cool'.toUpperCase();
// console.log(js_upper);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hello_lower = 'HELLO WORLD'.toLowerCase();
// console.log(hello_lower);
// let lorem_lower = 'LOREM IPSUM'.toLowerCase();
// console.log(lorem_lower);
// let js_lower = 'JAVASCRIPT IS COOL'.toLowerCase();
// console.log(js_lower);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// str = str.trim();
// console.log(str);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// const stringToarray = (string)=> string.split(' ');
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// const delete_characters = (string,n)=> string.slice(0,n);
// let str = 'Каждый охотник желает знать';
// console.log(delete_characters(str, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.

// const insert_dash = (string) => {
//     return string.replaceAll(' ','-').toUpperCase();
// }
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з
// нижнього регістру у верхній.

// const to_capital = (string)=>{
//     return string.replace(string[0],string[0].toUpperCase());
// }
// let str = "viktor";
// console.log(to_capital(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

const capitalize = (string)=>{
    let arr = string.split(' ');
    let new_str = '';
    for (word of arr){
        new_str = new_str.concat(word.replace(word[0],word[0].toUpperCase()),' ');
    }
    new_str = new_str.slice(0,new_str.length-1);
    return new_str;
}
let str = "функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої";
console.log(capitalize(str));