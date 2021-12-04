// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.getElementById('text');
// text.onclick = ()=>{
//     text.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.createElement('button');
// btn.innerText = 'submit';
// btn.onclick = ()=>{
//     btn.style.display = 'none';
// }
// document.body.appendChild(btn);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let textInput = document.createElement('input');
// textInput.type = 'text';
// textInput.id = 'text_input';
// textInput.placeholder = 'Введіть вік';
// document.body.appendChild(textInput);
//
// let btnInput = document.createElement('input');
// btnInput.type = 'button';
// btnInput.id = 'btn_input';
// btnInput.value = 'submit';
// document.body.appendChild(btnInput);
//
// btnInput.onclick = ()=>{
//     if (textInput.value > 18){
//         alert('Вік більше 18');
//     } else {
//         alert('Вік менше 18');
//     }
//
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menuBtn = document.createElement('button');
// menuBtn.innerText = 'Menu';
// document.body.appendChild(menuBtn);
//
// let ul = document.createElement('ul');
// for (let i=0; i<10; i++){
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     a.innerText = 'action ' + i;
//     a.href = '#';
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);
//
// menuBtn.onclick = ()=>{
//     if (ul.style.display ==='none'){
//         ul.style.display = 'block';
//     } else {
//         ul.style.display = 'none';
//     }
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'lorem1', body: 'lorem ipsum dolo'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'}
];

for (const comment of comments) {
    let div = document.createElement('div')
    let title = document.createElement('h2');
    title.innerText = comment.title;
    btn = document.createElement('button');
    btn.innerText = 'show/hide body';
    btn.onclick = () => {
        if (body.style.display === 'none') {
            body.style.display = 'block';
        } else {
            body.style.display = 'none';
        }
    }
    let body = document.createElement('p');
    body.innerText = comment.body;

    div.appendChild(title);
    div.appendChild(btn);
    div.appendChild(body);
    document.body.appendChild(div);
}



