////////// M //////////
class Course{
    constructor(title , instructor , price , description){
        this.title = title;
        this.instructor = instructor;
        this.price = price;
        this.description = description;
    }
}

let DOMNames = {
    containerr: '#course-list',
    titleInput: '#title',
    instructorInput: '#instructor',
    priceInput: '#price',
    descriptionInput: '#description',
    button: '.btnn',
    removeBtn: '.delete-course'
}

let InputValues = {
    titleValue: document.querySelector(DOMNames.titleInput).value,

    instructorValue: document.querySelector(DOMNames.instructorInput).value,
            
    priceValue: document.querySelector(DOMNames.priceInput).value,

    descriptionValue: document.querySelector(DOMNames.descriptionInput).value
}



//////////Display on the UI//////////
function displayItems(course) {
    
    html = `
    <tr class="c">
    <td>${course.title}</td>
    <td>${course.instructor}</td>
    <td>${course.price}</td>
    <td>${course.description}</td>
    <td class="c"> 
        <a class="btn btn-danger delete-course"><i class="fas fa-trash-alt"></i></a>
    </td>
    </tr>
    `
    
    document.querySelector(DOMNames.containerr).insertAdjacentHTML('beforeend', html);
}

function showMessages(messageText , className){
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(messageText));
    const form = document.getElementById('courses-form');
    const formSection = document.querySelector('.form-section');
    formSection.insertBefore(div , form);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 5000);
}

//////////Controller//////////
function setEventListeners() {

    document.querySelector(DOMNames.button).addEventListener('click', addItem)
    
    document.querySelector(DOMNames.containerr).addEventListener('click', deleteItem)

};

function addItem() {

    let InputValues = {
        titleValue: document.querySelector(DOMNames.titleInput).value,
        instructorValue: document.querySelector(DOMNames.instructorInput).value,
        priceValue: document.querySelector(DOMNames.priceInput).value,
        descriptionValue: document.querySelector(DOMNames.descriptionInput).value
    }

    if (InputValues.titleValue === '' || InputValues.instructorValue === '' || InputValues.priceValue === '' || InputValues.descriptionValue === '' ) {
        showMessages('ALL Fields Are Required', 'danger');
    } else if ( InputValues.priceValue < 500) {
        showMessages('Cann\'t Add Price Less Than 500', 'danger');
    } else {
        const course = new Course(InputValues.titleValue, InputValues.instructorValue, InputValues.priceValue, InputValues.descriptionValue);
    
        displayItems(course);
    }


};

function deleteItem(event) {
    let x = event.target.parentNode.parentNode;
    console.log(x)
    if (x.classList.contains('c')) {
        x.parentNode.removeChild(x);
    }

}

function init() {
    setEventListeners();
}

init();