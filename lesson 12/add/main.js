// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            let userName = document.createElement('h2');
            userName.innerText = user.name;
            let userBtn = document.createElement('button');
            userBtn.innerText = 'Show posts';

            userBtn.onclick = ()=>{
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        posts = posts.filter(post => user.id === post.userId);
                        let postsDiv = document.createElement('div');
                        postsDiv.classList.add('posts');
                        for (const post of posts) {
                            let postDiv = document.createElement('div');
                            postDiv.classList.add('post');
                            let title = document.createElement('h2');
                            title.innerText = post.id + '. ' + post.title;
                            let postBody = document.createElement('p');
                            postBody.innerText = post.body;
                            let btn = document.createElement('button');
                            btn.innerText = 'Show comments';

                            btn.onclick = () => {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(response => response.json())
                                    .then(comments => {
                                        comments = comments.filter(comment => comment.postId === post.id);
                                        let commentsDiv = document.createElement('div');
                                        commentsDiv.classList.add('comments');
                                        console.log(comments);
                                        for (const comment of comments) {
                                            let commentDiv = document.createElement('div');
                                            commentDiv.classList.add('comment');
                                            let name = document.createElement('h3');
                                            name.innerText = comment.name;
                                            let email = document.createElement('h6');
                                            email.innerText = comment.email;
                                            let commentBody = document.createElement('p');
                                            commentBody.innerText = comment.body;
                                            commentDiv.appendChild(name);
                                            commentDiv.appendChild(email);
                                            commentDiv.appendChild(commentBody);
                                            commentsDiv.appendChild(commentDiv);
                                        }
                                        postDiv.appendChild(commentsDiv);
                                        btn.innerText = 'Hide comments';
                                        btn.onclick = () => {
                                            if (commentsDiv.style.display !== 'none') {
                                                commentsDiv.style.display = 'none';
                                                btn.innerText = 'Show comments';
                                            } else {
                                                commentsDiv.style.display = 'block';
                                                btn.innerText = 'Hide comments';
                                            }
                                        }
                                    });
                            }
                            postDiv.appendChild(title);
                            postDiv.appendChild(postBody);
                            postDiv.appendChild(btn);
                            postsDiv.appendChild(postDiv);
                            userBtn.innerText = 'Hide posts';
                            userBtn.onclick = () => {
                                if (postsDiv.style.display !== 'none') {
                                    postsDiv.style.display = 'none';
                                    userBtn.innerText = 'Show posts';
                                } else {
                                    postsDiv.style.display = 'block';
                                    userBtn.innerText = 'Hide posts';
                                }
                        }}
                        userDiv.appendChild(postsDiv);
                    });

            }
            userDiv.appendChild(userName);
            userDiv.appendChild(userBtn);
            wrapper.appendChild(userDiv);
        }

    });

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (const post of posts) {
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post');
//             let title = document.createElement('h2');
//             title.innerText = post.id + '. ' + post.title;
//             let postBody = document.createElement('p');
//             postBody.innerText = post.body;
//             let btn = document.createElement('button');
//             btn.innerText = 'Show comments';
//
//             btn.onclick = () => {
//                 fetch('https://jsonplaceholder.typicode.com/comments')
//                     .then(response => response.json())
//                     .then(comments => {
//                         comments = comments.filter(comment => comment.postId === post.id);
//                         let commentsDiv = document.createElement('div');
//                         commentsDiv.classList.add('comments');
//                         console.log(comments);
//                         for (const comment of comments) {
//                             let commentDiv = document.createElement('div');
//                             commentDiv.classList.add('comment');
//                             let name = document.createElement('h3');
//                             name.innerText = comment.name;
//                             let email = document.createElement('h6');
//                             email.innerText = comment.email;
//                             let commentBody = document.createElement('p');
//                             commentBody.innerText = comment.body;
//                             commentDiv.appendChild(name);
//                             commentDiv.appendChild(email);
//                             commentDiv.appendChild(commentBody);
//                             commentsDiv.appendChild(commentDiv);
//                         }
//                         postDiv.appendChild(commentsDiv);
//                         btn.innerText = 'Hide comments';
//                         btn.onclick = () => {
//                             if (commentsDiv.style.display !== 'none') {
//                                 commentsDiv.style.display = 'none';
//                                 btn.innerText = 'Show comments';
//                             } else {
//                                 commentsDiv.style.display = 'block';
//                                 btn.innerText = 'Hide comments';
//                             }
//                         }
//                     });
//             }
//             postDiv.appendChild(title);
//             postDiv.appendChild(postBody);
//             postDiv.appendChild(btn);
//             wrapper.appendChild(postDiv);
//         }
//     });