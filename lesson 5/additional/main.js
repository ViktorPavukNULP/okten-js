// - Дано натуральное число n. Выведите все числа от 1 до n.
// const range1 = (n)=>{
//     for (let i=1; i<n+1;i++){
//         console.log(i);
//     }
// }
// range1(12);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// const range2 = (a,b)=>{
//     if (a<b){
//         for (let i=a; i<b+1;i++){
//             console.log(i);
//         }
//     }else{
//         for (let i=a; i>b-1; i--){
//             console.log(i);
//         }
//     }
// }
// range2(40,20);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// const foo = (arr, i)=>{
//     if (i<arr.length-1){
//         let temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
//     return arr;
// }
// console.log(foo([1,2,3,4],0));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
const move_zeros = (arr)=>{
    let new_arr = [];
    let zeros = [];
    for (item of arr){
        if (item !== 0){
            new_arr.push(item);
        } else{
            zeros.push(item);
        }
    }
    for (item of zeros){
        new_arr.push(item);
    }
    return new_arr;
}
console.log(move_zeros([0,2,1,0,30,0,98]));