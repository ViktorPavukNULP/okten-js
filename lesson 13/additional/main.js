// - Імітуємо наповнення інтернет магазину товарами :
//   Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let btn = document.getElementsByName('inputSubmit')[0];

btn.onclick = e => {
    e.preventDefault();
    let goods = localStorage.getItem('goods');
    goods = JSON.parse(goods);
    let id = 0;
    if (goods === null){
        goods = [];
    } else{
        id = goods[goods.length-1].id + 1;
    }

    let good = {
        id: id,
        name: document.forms.form1.inputName.value,
        quantity: document.forms.form1.inputQuantity.value + ' шт.',
        price: document.forms.form1.inputPrice.value + ' грн',
        image: document.forms.form1.inputImage.value
    };
    goods.push(good);
    localStorage.setItem('goods', JSON.stringify(goods));
}