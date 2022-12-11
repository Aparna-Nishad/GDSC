// Addition of two numbers
console.log("Addition of two numbers:")
console.log(4 + 3)
// substraction
console.log("Subtraction:")
console.log(4 - 3)
// Multiplication
console.log("Multiplication: ")
console.log(4 * 3)
// Division
console.log("Division:")
console.log(4 / 3)

// print intput field in console
let nameInput = document.getElementById('name');

document.querySelector('form.ex').addEventListener('submit',
    function (e) {

        e.preventDefault();
        console.log(nameInput.value);
    });

// hover effect on <h1>
hover = document.querySelector('#hover')
hover.addEventListener("mouseover", function () {
    hover.style.background = "rgb(37, 20, 20)"
    hover.style.color = "white"
})
hover.addEventListener("mouseleave", function () {
    hover.style.background = "rgb(142, 126, 126)"
    hover.style.color = "black"
})

// change the text
function changeText() {
    changeTxt = document.querySelector('#change')
    changeTxt.innerHTML = "Hello, your text has been changed";
    // changeTxt.innerHTML = "<button>Hello, your text has been changed</button>";
    changeTxt.style.color = "White"
}

// change the tag from h1 to h5
function changeTextSize() {
    changeTxtSize = document.querySelector('#tag')
    changeTxtSize.innerHTML = "<h5>Font size has been changed</h5>";
}

// print team members name
let team = document.getElementById('teamMember');

document.querySelector('form.members').addEventListener('submit',
    function (e) {

        //prevent the normal submission of the form
        e.preventDefault();
        if (team.value == "7") {
            console.log("Team Members: Aparna Nishad, Marilyn Mathai, Kirti Pandey, Pritish Bali")
        }

        // console.log(team.value); 
        team.value = ""
    });
