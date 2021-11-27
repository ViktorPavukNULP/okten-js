// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ
// далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com,
// і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// const validator = (email)=>{
//     if (email.indexOf('@')>1){
//         let arr = email.split('@')
//         let before = arr[0].length > 0;
//         let after = arr[1].indexOf('.')>1;
//         return !!(before & after);
//     }
//     return false;
// }
// console.log(validator('someemail@gmail.com'));
// console.log(validator('omeeMAIL@gmail.com'));
// console.log(validator('someeMAIL@i.ua'));
// console.log(validator('some.email@gmail.com'));

// - є масивlet
// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// console.log(coursesArray.sort((a, b) => a.modules.length - b.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// const count = (str, stringsearch) =>{
//     let n = 0;
//     let len = stringsearch.length;
//     for (let i=0; i<str.length; i++){
//         if (str.slice(i,i+len)===stringsearch){
//             n++
//         }
//     }
//     return n;
// }
//
// console.log(count('Астрономия это наука о небесных объектах','о'))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

const cutString = (str, n)=>{
    let arr = str.split(' ');
    let new_str = '';
    for (let i=0; i<n; i++){
        new_str = new_str.concat(arr[i],' ');
    }
    new_str = new_str.slice(0,new_str.length-1);
    return new_str;
}

console.log(cutString("Сила тяжести приложена к центру масс тела",5));