// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі
// на занятті https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок
//     всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        for (const post of posts) {
            let div = document.createElement('div');
            div.classList.add('post');
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
                        div.appendChild(commentsDiv);
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
            div.appendChild(title);
            div.appendChild(postBody);
            div.appendChild(btn);
            wrapper.appendChild(div);
            document.body.appendChild(wrapper);
        }
    });