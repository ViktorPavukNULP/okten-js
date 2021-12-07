// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement('form');
// form1.name = 'form1';
// document.body.appendChild(form1);
// let input1 = document.createElement('input');
// input1.name = 'input1';
// form1.appendChild(input1);
// let input2 = document.createElement('input');
// input2.name = 'input2';
// form1.appendChild(input2);
//
// let form2 = document.createElement('form');
// form2.name = 'form2';
// document.body.appendChild(form2);
// let input3 = document.createElement('input');
// input3.name = 'input3';
// form2.appendChild(input3);
// let input4 = document.createElement('input');
// input4.name = 'input4';
// form2.appendChild(input4);
//
// let btn1 = document.createElement('button');
// btn1.innerText = 'submit';
// document.body.appendChild(btn1);
// btn1.onclick = ()=>{
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input3.value);
//     console.log(document.forms.form2.input4.value);
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк. При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом. (Додатковачастина для завдання)

let input1 = document.createElement('input');
document.body.appendChild(input1);

let input2 = document.createElement('input');
document.body.appendChild(input2);

let input3 = document.createElement('input');
document.body.appendChild(input3);

let btn1 = document.createElement('button');
btn1.innerText = 'submit';
document.body.appendChild(btn1);
btn1.onclick = ()=>{
    let table = document.createElement('table');

    for (let i = 0; i<input1.value; i++){
        let tr = document.createElement('tr');
        for (let j=0; j<input2.value; j++){
            let td = document.createElement('td');
            td.innerText = input3.value;
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['сука','хуй','пизда','блять'];
// const checkBadWords = (word)=>{
//     word = word.toLowerCase();
//     for (const badWord of badWords){
//         if (word === badWord){
//             return true
//         }
//     }
//     return false;
// }
// let textInput = document.createElement('input');
// textInput.type = 'text';
// textInput.onkeypress = (e)=>{
//     if(e.keyCode === 13){
//         e.preventDefault(); // Ensure it is only this code that runs
//         if (checkBadWords(textInput.value)){
//             alert('Матюк');
//         }
//     }
// }
// document.body.appendChild(textInput);

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['сука', 'хуй', 'пизд', 'блять'];
// const checkBadWords = (word) => {
//     word = word.toLowerCase();
//     for (const badWord of badWords) {
//         if (word.startsWith(badWord)) {
//             return true
//         }
//     }
//     return false;
// }
// let textInput = document.createElement('input');
// textInput.type = 'text';
// textInput.onkeypress = (e) => {
//     if (e.keyCode === 13) {
//         e.preventDefault(); // Ensure it is only this code that runs
//         let arr = textInput.value.split(' ');
//         for (const element of arr)
//             if (checkBadWords(element)) {
//                 alert('Матюк');
//                 break;
//             }
//         textInput.value = '';
//     }
// }
// document.body.appendChild(textInput);
