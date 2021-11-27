// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email,
// phone створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arr = [
    new User(1,'Vasya','Borow','bor@gmail.com',972283369),
    new User(2,'Petya','Tsik','tsik@gmail.com',972283312),
    new User(3,'Styopa','Melnik','stepa@gmail.com',978223369),
    new User(4,'Stefan','Anjey','anj@gmail.com',972283371),
    new User(5,'Andriy','Denys','adnden@gmail.com',972283895),
    new User(6,'Misha','Stakh','stah@gmail.com',972283111),
    new User(7,'Ostap','Yaremko','ostap@gmail.com',972283855),
    new User(8,'Taras','Bilyk','bilyk@gmail.com',972283456),
    new User(9,'Mykola','Pchel','chel@gmail.com',972283789),
    new User(10,'Pablo','Zadorov','pablo@gmail.com',972283123),
];

console.log(arr);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arr.filter(value => value.id%2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr.sort((a,b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
clients = [
    new Client(1,'Vasya','Borow','bor@gmail.com',972283369,123),
    new Client(2,'Petya','Tsik','tsik@gmail.com',972283312,452),
    new Client(3,'Styopa','Melnik','stepa@gmail.com',978223369,2),
    new Client(4,'Stefan','Anjey','anj@gmail.com',972283371,1),
    new Client(5,'Andriy','Denys','adnden@gmail.com',972283895,24),
    new Client(6,'Misha','Stakh','stah@gmail.com',972283111,76),
    new Client(7,'Ostap','Yaremko','ostap@gmail.com',972283855,33),
    new Client(8,'Taras','Bilyk','bilyk@gmail.com',972283456,90),
    new Client(9,'Mykola','Pchel','chel@gmail.com',972283789,10),
    new Client(10,'Pablo','Zadorov','pablo@gmail.com',972283123,12),
];
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a,b) => a.order-b.order));
