//Selectors
const todoInputall = document.querySelectorAll('.todo-input');
// const todoInput = todoInputall[1];//
let todoInput;
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener("click", adTodo);

todoList.addEventListener('click', deleteCheck)

//Functions
function adTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear Todo Input Value
    todoInput.value = "";
}

function deleteCheck(e) {
    // console.log(e.target);
    const item = e.target;
    //Delete Todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
            /* transitionend and animationend wait for
            (transition/animation) to end then executes the function */
        });
    };

    //Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}






function index(element){
    var sib = element.parentNode.childNodes;
    var n = 0;
    for (var i=0; i<sib.length; i++) {
         if (sib[i]==element) return n;
         if (sib[i].nodeType==1) n++;
    }
    return -1; 
}

alert(index.call(this,document.getElementById('two')));

function eq(index) {
   if(index>=0 && index < this.length)
    return this[index];
   else 
    return -1;
}
var e= document.getElementsByClassName('menu');
alert(eq.call(e,1).textContent);