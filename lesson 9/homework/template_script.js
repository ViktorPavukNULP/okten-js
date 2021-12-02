// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.


let arr = ['Main','Products','About us','Contacts'];
menu = document.getElementsByClassName('menu')[0];
for (const element of arr) {
    let li = document.createElement('li');
    li.innerText = element;
    menu.appendChild(li);
}