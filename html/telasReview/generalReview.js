const nota = document.getElementById('nota');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (event) => {
    event.preventDefault();  

    let a = document.createElement('a');
    let p = document.createElement('p');
    a.classList = '';
    p.classList = 'p-2 d-flex text-wrap flex-wrap';
    a.innerHTML = `Nota: ${nota.value}`;
    p.innerHTML = `${textComment.value}`;
    commentPost.appendChild(a);
    commentPost.appendChild(p);
    nota.value = '';
    textComment.value = '';     
});