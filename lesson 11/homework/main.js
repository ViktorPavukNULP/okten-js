// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form = document.createElement('form');
// form.name = 'form1';
// let name_input = document.createElement('input');
// name_input.name = 'name_input';
// name_input.placeholder = 'Enter name';
// let age_input = document.createElement('input');
// age_input.name = 'age_input';
// age_input.placeholder = 'Enter age';
//
// let btn = document.createElement('button');
// btn.innerText = 'Submit';
// //document.forms.form1.name_input.value
// btn.onclick = ()=>{
//     let user = {name: document.forms.form1.name_input.value,
//     age: document.forms.form1.age_input.value};
//     localStorage.setItem('key',JSON.stringify(user));
// }
//
// form.appendChild(name_input);
// form.appendChild(age_input);
// document.body.appendChild(form);
// document.body.appendChild(btn);


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form = document.createElement('form');
form.name = 'form1';
let model_input = document.createElement('input');
model_input.name = 'model_input';
model_input.placeholder = 'Enter model';
let type_input = document.createElement('input');
type_input.name = 'type_input';
type_input.placeholder = 'Enter type';
let volume_input = document.createElement('input');
volume_input.name = 'volume_input';
volume_input.placeholder = 'Enter volume';

let btn = document.createElement('button');
btn.innerText = 'Submit';
//document.forms.form1.name_input.value
btn.onclick = ()=>{
    let car = {model: document.forms.form1.model_input.value,
        type: document.forms.form1.type_input.value,
        volume: document.forms.form1.volume_input.value};
    localStorage.setItem('car',JSON.stringify(car));
}

form.appendChild(model_input);
form.appendChild(type_input);
form.appendChild(volume_input);
document.body.appendChild(form);
document.body.appendChild(btn);