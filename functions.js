// Declare variables
const h1Tag = document.querySelector('h1');
const h2Tag = document.querySelector('.student');
const buttonTag = document.querySelector('.newStudent');
const toggleButton = document.querySelector('.toggleNewStudent')
console.log(h1Tag)


// function printHello() {
//     console.log("Hello");
// }

// var printHello = () => {
//     console.log("Hello");
// }

// var printHello = function () {
//     console.log("Hello");
// }

// printHello();

let newStudent = true;

function toggleNewStudent() {
    newStudent = !newStudent
    // if(newStudent) {
    //     newStudent = false;
    // } else if(!newStudent) {
    //     newStudent = true;
    // }
}

function pickRandomStudent() {
    let thisClass = [
        "Eric", "Lauren", "Shay", "Aidan", "Anthony", "Belal", "Bushra"
    ];
    
    let randomNumber = Math.floor(Math.random() * thisClass.length);
    
    if(newStudent) {
        h2Tag.innerHTML = thisClass[randomNumber]
        h2Tag.classList.add('blue');
        h2Tag.classList.remove('orange')
    } else {
        h2Tag.classList.add('orange');
        h2Tag.classList.remove('blue');
    }
}

// Event listeners

buttonTag.addEventListener('click', pickRandomStudent);
toggleButton.addEventListener('click', toggleNewStudent);