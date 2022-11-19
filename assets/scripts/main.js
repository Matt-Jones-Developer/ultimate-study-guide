
// create vars for button and heading 
let myBtn = document.querySelector('button');

// to find a specific element (not all the H2 in the doc!) use All!
let welcomeHeading = document.querySelector('div.header-welcome #user');

// create setUserName() function
//func     // name
function setUserName() {
    // constant var myName which prompts on load or let??
    const myName = prompt('Please enter your username.');

    // conditional
    if (!myName) {
        // run again 
        setUserName();
    } else {
        // store new value
        localStorage.setItem('name', myName);
        // on which element?
        // welcomeHeading.textContext = `Welcome, ${myName}!`;
        welcomeHeading.innerHTML = 'Welcome,  ' + myName + '!';
    }
}

// call the function on-load 
// if localstorage has name - call setUserName()
if (!localStorage.getItem('name')) {
    // update user with welcome alert
    // Display anti-boomer welcome message!
    alert('Welcome to Ultimate Study Guide!\nPlease enter a username to get started.');
    setUserName();
} else {
    // else retrieve stored name and display it
    let storedName = localStorage.getItem('name');
    welcomeHeading.innerHTML = 'Welcome,  ' + storedName + '!';
}

// on-click event handler 
myBtn.onclick = () => {
    setUserName();
}

// searchbar feature

function highlight(param) {

    // Select the whole paragraph
    var ob = new Mark(document.querySelector(".searchable"));

    // First unmark the highlighted word or letter
    ob.unmark();

    // Highlight letter or word
    ob.mark(
        document.getElementById("searched").value,
        { className: 'a' + param }
    );
}