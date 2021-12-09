// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку
// об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних
// на попередньому етапі.
let favourites = [];
for (const user of users) {
    let div = document.createElement('div');
    let name = document.createElement('h2');
    name.innerText = user.name;
    let age = document.createElement('h2');
    age.innerText = user.age;
    let status = document.createElement('h3');
    status.innerText = user.status;
    let btn = document.createElement('button');
    btn.innerText = 'додати до улюблених';

    btn.onclick = ()=>{
        if (!favourites.includes(user)){
            favourites.push(user);
        }
        console.log(favourites);
        localStorage.setItem('fav',JSON.stringify(favourites));
    }

    div.appendChild(name);
    div.appendChild(age);
    div.appendChild(status);
    div.appendChild(btn);
    document.body.appendChild(div);
}