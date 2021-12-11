// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (const post of posts) {
//             let div = document.createElement('div');
//             div.classList.add('post');
//             let title = document.createElement('h2');
//             title.innerText = post.id + '. ' + post.title;
//             let postBody = document.createElement('p');
//             postBody.innerText = post.body;
//             div.appendChild(title);
//             div.appendChild(postBody);
//             document.body.appendChild(div);
//         }
//     });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        console.log(comments);
        for (const comment of comments) {
            let div = document.createElement('div');
            div.classList.add('comment');
            let name = document.createElement('h2');
            name.innerText = comment.name;
            let email = document.createElement('h4');
            email.innerText = comment.email;
            let commentBody = document.createElement('p');
            commentBody.innerText = comment.body;
            div.appendChild(name);
            div.appendChild(email);
            div.appendChild(commentBody);
            document.body.appendChild(div);
        }
    });