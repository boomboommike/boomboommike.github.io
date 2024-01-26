const myHeading = document.getElementById("name");
myHeading.textContent = 'Hello World!';

let myVariable = 'Bob';

myVariable = 'Steve';

let Value = "chocolate";
if (Value === "chocolate") {
  alert("Welcome to my personal page");
} else {
  alert("Please leave...");
}


const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc == 'images/Madrid.png') {
    myImage.setAttribute("src", 'images/madrid2.png');
  } else if (mySrc == 'images/madrid2.png'){
    myImage.setAttribute("src", 'images/madrid3.png');
  }else {
    myImage.setAttribute("src", 'images/Madrid.png');
  }
};

let myButton = document.getElementById("myButton");


function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi, ${myName}. Lets get to know me a little bit.`;
}

if (!localStorage.getItem("name")) {
  setUserName( );
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hi,${storedName}. Lets get to know me a little bit.`;
}

myButton.onclick = () => {
    setUserName();
  };
  