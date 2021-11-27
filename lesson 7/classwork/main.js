// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, brand, year, top_speed, engine){
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.top_speed = top_speed;
//     this.engine = engine;
//     this.drive = () => console.log(`їдемо зі швидкістю ${this.top_speed} кілометрів на годину`);
//     this.info = () => {
//         for (let value in this){
//             if (typeof this[value] !== 'function'){
//                 console.log(value,'-',this[value]);
//             }
//         }
//     }
//     this.increaseMaxSpeed = (newSpeed) => this.top_speed = newSpeed;
//     this.changeYear = (newYear) => this.year = newYear;
//     this.addDriver = (driver) => this.driver = driver;
// }
// my_car = new Car('model 3', 'Tesla', 2017, 256, 2.0);
// my_car.increaseMaxSpeed(230);
// my_car.changeYear(2019);
// my_car.addDriver({name: 'Viktor', age: '21'});
// my_car.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model, brand, year, top_speed, engine) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.top_speed = top_speed;
//         this.engine = engine;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.top_speed} кілометрів на годину`);
//     }
//     info(){
//         for (let value in this){
//             if (typeof this[value] !== 'function'){
//                 console.log(value,'-',this[value]);
//             }
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         this.top_speed = newSpeed;
//     }
//     changeYear(newYear) {
//         this.year = newYear;
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// my_car = new Car('Supra','Toyota',1993,230,3);
// my_car.increaseMaxSpeed(280);
// my_car.drive();
// my_car.changeYear(1992);
// my_car.addDriver({name: 'Viktor', age: '21'});
// my_car.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
cind_arr = [
    new Cinderella('Olya',16,41),
    new Cinderella('Sveta',14,43),
    new Cinderella('Nastya',15,40),
    new Cinderella('Katya',16,39),
    new Cinderella('Ira',17,41),
    new Cinderella('Lesya',14,40),
    new Cinderella('Larysa',18,43),
    new Cinderella('Klara',20,39),
    new Cinderella('Ella',19,38),
    new Cinderella('Maria',16,40)
]
class Prince{
     constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
prince = new Prince('Charming',21,38)

for (girl of cind_arr){
    if (girl.foot_size === prince.shoe){
        console.log(girl);
    }
}
console.log(cind_arr.find(element => element.foot_size === 38));
