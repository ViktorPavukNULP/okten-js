//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

function getUp(time, cb) {
    setTimeout(() => {
        if (time > 6) {
            cb(null, 'Прокинувся');
            return;
        }
        cb('Сплю далі', null);
    }, 300);
}

function eat(meal, cb) {
    setTimeout(() => {
        if (meal) {
            cb(null, 'Поїв ' + meal);
            return;
        }
        cb('Голодний', null);
    }, 600);
}

function brushTeeth(cb) {
    setTimeout(() => {
        cb('Почистив зуби');
    }, 150);
}

function code(cb) {
    setTimeout(() => {
        cb('Попрограмував');
    }, 1500);
}

function scrollMemes(cb) {
    setTimeout(() => {
        cb('Позалипав');
    }, 700);
}

function goToSleep(cb) {
    setTimeout(() => {
        cb('Спить');
    }, 100);
}

getUp(7, (err, up) => {
    if (err) {
        console.error(err);
    } else {
        console.log(up);
        brushTeeth((teeth) => {
            console.log(teeth);
            eat('Вівсянка', (err, lunch) => {
                if (err) {
                    console.error(err);
                    return
                }
                console.log(lunch);
                scrollMemes((memes1) => {
                    console.log(memes1);
                    code((program1) => {
                        console.log(program1);
                        eat('Рис', (err, dinner) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            console.log(dinner);
                            scrollMemes(memes2=>{
                                console.log(memes2);
                                code(program2=>{
                                    console.log(program2);
                                    eat('Курка',(err,supper)=>{
                                        if (err){
                                            console.error(err);
                                            return
                                        }
                                        console.log(supper);
                                        goToSleep(sleep=>{
                                            console.log(sleep);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
});


function getUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 6) {
                resolve('Прокинувся');
            }
            reject('Сплю далі');
        }, 300);
    });
}

function eat(meal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (meal) {
                resolve('Поїв ' + meal);
            }
            reject('Голодний');
        }, 600);
    });
}

function brushTeeth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Почистив зуби');
        }, 150);
    });
}

function code() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Попрограмував');
        }, 1500);
    });
}

function scrollMemes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Позалипав');
        }, 700);
    });
}

function goToSleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Спить');
        }, 100);
    });
}

//
// getUp(8)
//     .then(res => {
//         console.log(res);
//         return brushTeeth();
//     })
//     .then(teeth => {
//         console.log(teeth);
//         return eat('Вівсянка');
//     })
//     .then(meal => {
//         console.log(meal);
//         return scrollMemes()
//     })
//     .then(memes => {
//         console.log(memes);
//         return code();
//     })
//     .then(code => {
//         console.log(code);
//         return eat('Рис');
//     })
//     .then(meal => {
//         console.log(meal);
//         return scrollMemes();
//     })
//     .then(memes => {
//         console.log(memes);
//         return code();
//     })
//     .then(code => {
//         console.log(code);
//         return eat('Курка');
//     })
//     .then(meal => {
//         console.log(meal);
//         return goToSleep();
//     })
//     .then(sleep => {
//         console.log(sleep);
//     })
//     .catch(e => {
//         console.error(e);
//     })

// async function dailyRoutine(){
//     const gotUp = await getUp(7);
//     console.log(gotUp);
//
//     const teeth = await brushTeeth();
//     console.log(teeth);
//
//     const meal1 = await eat('Вівсянка');
//     console.log(meal1);
//
//     const memes1 = await scrollMemes();
//     console.log(memes1);
//
//     const code1 = await code();
//     console.log(code1);
//
//     const meal2 = await eat('Рис');
//     console.log(meal2);
//
//     const memes2 = await scrollMemes();
//     console.log(memes2);
//
//     const code2 = await code();
//     console.log(code2);
//
//     const meal3 = await eat('Курка');
//     console.log(meal3);
//
//     const sleep = await goToSleep();
//     console.log(sleep);
// }
// dailyRoutine();