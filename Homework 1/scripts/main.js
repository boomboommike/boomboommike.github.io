const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

let myVariable = 'Bob';

myVariable = 'Steve';

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector("html").addEventListener("click", () =>  {
    alert("Ouch! Stop poking me!")
  });


const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Firefox_logo,_2019.jpg") {
    myImage.setAttribute("src", "images/Firefox_logo_2.png");
  } else {
    myImage.setAttribute("src", "images/Firefox_logo,_2019.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };