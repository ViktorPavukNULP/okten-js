// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//              lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// function User(id,name,username,email,a_street,a_suite,a_city,a_zipcode,a_g_lat,a_g_lng,phone,website,c_name,c_catchPhrase,c_bs){
//     id;
//     name;
//     username;
//     email;
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.adress = {
//         street: a_street,
//         suite: a_suite,
//         city: a_city,
//         zipcode: a_zipcode,
//         geo: {
//             lat:a_g_lat,
//             lng:a_g_lng
//         }
//     };
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         name: c_name,
//         catchPhrase: c_catchPhrase,
//         bs: c_bs
//     };
// }
// user = new User(1,'Leane','leane221','leane@gmail.com','Yanova','Apt 556',
//     'Lviv','80730', 45,28,978221789,'news.com','Crona',
//     'Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Tag(title, action, attrs) {
    this.title = title;
    this.action = action;
    this.attrs = attrs;
}

a = new Tag('a', "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.",
    [{ titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
        {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.}'
    }]);
console.log(a);

div = new Tag('div', "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.",
    [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
    ]);
console.log(div);

h1 = new Tag('h1', "Так, тег <h1> представляет собой наиболее важный заголовок первого уровня",
    [
        {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.',}
    ]);
console.log(h1);

span = new Tag('span', "Тег <span> предназначен для определения строчных элементов документа.",
    []);
console.log(span);

input = new Tag('input', "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",
    [{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
        {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'}
    ]);
console.log(input);

form = new Tag('form', "Тег <form> устанавливает форму на веб-странице.",
    [
        {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
        {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
        {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'}
    ]);
console.log(form);

option = new Tag('option', "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.",
    [
        {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
        {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка'},
        {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
    ]);
console.log(option);

select = new Tag('select', "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.",
    [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
        {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
        {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'}
    ]);
console.log(select);