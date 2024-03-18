console.log('hello');
// accesare dupa ID
const cardElement = document.getElementById('card');
console.log('card: ', cardElement);
console.log(`card: ${cardElement}`);

// accesare dupa class
const todo = document.getElementsByClassName('todo-item');
console.log(todo);
todo[0].id='new-id';

// accesare dupa nume
const comment = document.getElementsByName('comment');
console.log(comment);
comment[0].value = 'Comment predefinit';

// accesare dupa nume tag
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// accesare dupa orice selector CSS valid
const cardParagraph = document.querySelector('#card > p');
console.log(cardParagraph);

// accesare a tuturor elementelor dupa un selector CSS valid
const allTodos = document.querySelectorAll('#card > ol > .todo-item');
console.log(allTodos);
