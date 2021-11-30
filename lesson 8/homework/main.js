// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content.innerText);
// -- отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules.innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
// let content = document.getElementById('content');
// content.innerText = 'Контент';
// -- замініть текст параграфа з id 'rules' на будь-який інший
// let rules = document.getElementById('rules');
// rules.innerText = 'Правила';
// -- змініть кожному елементу колір фону на червоний
// for (element of document.body.getElementsByTagName('*')){
//     element.style.background = 'red';
// }
// -- змініть кожному елементу колір тексту на синій
// for (element of document.body.getElementsByTagName('*')){
//     element.style.color = 'blue';
// }
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// rules = document.getElementById('rules');
// console.log(rules.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
fc_rules = document.getElementsByClassName('fc_rules');
for (const rule of fc_rules) {
    rule.style.color = 'red';
}
