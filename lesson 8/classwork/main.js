// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let main_header = document.getElementById('main_header');
// console.log(main_header);
// main_header.setAttribute('class','SEP-2021');
// b) робить шириниу елементу ul 400px
// let uls = document.getElementsByTagName('ul');
// for (const ul of uls){
//     ul.style.width = '400px';
// }
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkLists = document.getElementsByClassName('linkList');
// for (const linkList of linkLists) {
//     linkList.style.width = '50%';
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let listElements2 = document.getElementsByClassName('listElement2');
// console.log(listElements2[0].textContent);
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let lis = document.getElementsByTagName('li');
// for (const li of lis) {
//    li.style.background = 'grey';
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let as = document.getElementsByTagName('a');
// for (const a of as) {
//    a.setAttribute('class','anchar');
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let as = document.getElementsByTagName('a');
// for (const a of as) {
//     if (a.textContent ==='link3'){
//         a.style.fontSize = '40px';
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let as = document.getElementsByTagName('a');
// for (const a of as) {
//     a.setAttribute('class','element'+'_'+a.textContent);
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let shs = document.getElementsByClassName('sub-header');
// let color = prompt('Enter color');
// for (const sh of shs) {
//     sh.style.color = color;
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let shs = document.getElementsByClassName('sub-header');
// let color = prompt('Enter color');
// for (const sh of shs) {
//     if (sh.textContent === 'content 2 segment'){
//         sh.style.color = color;
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let contents_1 = document.getElementsByClassName('content_1');
// let text = prompt('Enter text');
// contents_1[0].textContent = text;
// l) отримати елементи p та змінити їм padding на 20px
// let ps = document.getElementsByTagName('p');
// for (const p of ps) {
//     p.style.padding = '20px';
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let texts2 = document.getElementsByClassName('text2');
for (const text2Element of texts2) {
    text2Element.textContent = 'SEP-2021';
}
