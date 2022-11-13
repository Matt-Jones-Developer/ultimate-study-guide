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
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    welcomeHeading.innerHTML = 'Welcome,  ' + storedName + '!';
}

// on-click event handler 
myBtn.onclick = () => {
    setUserName();
}
