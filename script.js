console.log('hello');
// accesare dupa ID
const cardElement = document.getElementById('card');
console.log('card: ', cardElement);
console.log(`card: ${cardElement}`);

// cardElement.innerHTML = 'Altceva';

//accesare dupa class
const todos = document.getElementsByClassName('todo-item');
console.log(todos);
todos[0].id = 'new-id';

// accesare dupa name
const comment = document.getElementsByName('comment');
console.log(comment);
comment[0].value = 'Comment predefinit';

// accesare dupa nume tag
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// accesare dupa orice selector css valid
const cardParagraph = document.querySelector('#card > p');
console.log(cardParagraph);

// accesare a tuturor elementelor dupa un selector css valid
const allTodos = document.querySelectorAll('#card > ol > .todo-item');
console.log(allTodos);
console.log(allTodos[0].textContent);
console.log(allTodos[0].innerText);


// Manipularea DOM
const p = document.querySelector('p');
p.textContent = 'This was added with JS';

const footer =  document.querySelector('footer');
const author = 'John Doe';
footer.innerHTML = `<strong>Author: </strong><span>${author}</span>`;

const posts = [
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'my comment',
        title: 'card 1'
    },
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'my comment',
        title: 'card 2'
    },
    {
        author: 'Nick',
        todos: ['do 1', 'do 2'],
        comment: 'my comment',
        title: 'card 3'
    }
];

const body = document.querySelector('body');
let htmlContent = '';
for (const post of posts) {
    const article = document.createElement('article');
    article.classList.add('card');
    const card = `
                    <p>${post.title}</p>

                    <ol>
                        ${post.todos.map((el) => '<li class="todo-item">'+ el +'</li>')}
                    </ol>
                    <label for="comment">Comment</label>
                    <input type="text" id="comment" name="comment" value="${post.comment}">
                    <footer>
                    <strong>Author:</strong> ${post.author} <span></span>
                    </footer>
                `;
    article.innerHTML = card;
    const com = article.querySelector('input');
    com.addEventListener('keydown', (event) => {
        console.log('event: ', event);
        const key = event.key;
        const numbers = '123456789';
        if (numbers.includes(key)) {
            event.preventDefault();
            alert('no numbers allowed!');
        }
    });

    body.appendChild(article);
}

// body.textContent = htmlContent;

// innerText vs textContent
const firstp = document.querySelector('p');
console.log(firstp);
console.log(firstp.textContent);
firstp.textContent = 'ast';
console.log(firstp.innerText);
firstp.innerText = 'asdsad';
console.log(firstp.innerText);
console.log(firstp.textContent);

const firstInput = document.querySelectorAll('input');
console.log('input: ', firstInput);
console.log('....');

firstInput[0].readOnly = true;

// getAttribute & setAttribute
firstInput[1].setAttribute('readonly', true);

let firstInputValue = firstInput[0].getAttribute('value');
console.log('firstValue = ', firstInputValue);

// manipulare clase CSS
const allP = document.querySelectorAll('p');
for (const paragraph of allP) {
    paragraph.classList.add('red', 'underline');
}
let index = 0;
for(const paragraph of allP) {
    if (index %2 > 0) {
        paragraph.classList.remove('red');
    }
    index++;
}


// manipulare style
for(const paragraph of allP) {
    paragraph.style.textTransform = 'uppercase';
}


// creare de elemente HTML
const newParagraph = document.createElement('p');
newParagraph.textContent = 'My new paragraph';
console.log(newParagraph);

body.appendChild(newParagraph);

const span = document.createElement('span');
span.textContent = ' altceva';
span.classList.add('red');
newParagraph.appendChild(span);

// stergere elemente
const allCards = document.querySelectorAll('.card');
allCards[allCards.length - 1].remove();

// event listeners
const interactive = document.getElementById('interactive-text');

const onClick = () => {
    if (interactive.classList.contains('red')) {
        interactive.classList.remove('red');
    } else {
        interactive.classList.add('red');
    }
}

interactive.addEventListener('click', onClick);
