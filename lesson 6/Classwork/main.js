// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// const normalize = string=>{
//     let new_string = string.replace('.',' ').replaceAll('.',' ')
//         .replace('-',' ').replaceAll('-','')
//         .replace('_',' ').replaceAll('_','');
//     return new_string;
// }
// console.log(normalize(n1));
// console.log(normalize(n2));
// console.log(normalize(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const random_arr = n =>{
    output_arr = [];
    for (let i = 0; i<n;i++){
        output_arr.push(Math.round(Math.random()*100));
    }
    return output_arr;
}
// let arr = random_arr(10);
// console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arr = random_arr(10);
// console.log(arr);
// console.log(arr.sort((a,b)=>a-b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arr = random_arr(10);
// console.log(arr);
// console.log(arr.filter(item=>!(item%2)));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = random_arr(10);
// console.log(arr);
// console.log(arr.map(item=>item+''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// const sortNums = (arr, direction)=>{
//     if (direction === 'ascending'){
//         return arr.sort((a,b)=>a-b);
//     } else if (direction === 'descending'){
//         return arr.sort((a,b)=>b-a);
//     }
//     return 0;
// }
// let nums = [11,21,3];
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]
// console.log(sortNums(nums, 'desфівending'));

// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a,b)=>a.monthDuration-b.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(item=>item.monthDuration>5));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
const cutString = (str,n)=>{
    res_arr = [];
    for (let i=0; i<str.length; i=i+n){
        res_arr.push(str.slice(i,i+n));
    }
    return res_arr;
}
console.log(cutString('наслаждение',3)); // [нас,лаж,ден,ие]