document.getElementById("btn1").innerHTML = "Hello World"

//for Click event
function handleClick(){
    console.log("CLICKED")
    alert('clicked')
}

function Greeting(){
    console.log("Good morning")
    alert('good evening')
}

//method 2

const button2 = document.querySelector('.btn')

function handleClick2(){
    button2.innerHTML = "Clicked";
    //button2.style="background-color:brown"
    button2.style.background="brown";
    button2.style.color='yellow';
}

//Method3
const image = document.querySelector('.img1')

// image.addEventListener("click", function(){
//     image.width = "53"
//     image.style ="box"
// })

image.addEventListener("mouseover", function(){
    image.width = "530"
    image.style = "box shadow: 2px 4px 2px grey";
})
image.addEventListener("mouseout", function(){
    image.width = "20"
})

//method 4
function handleClick(element){
    console.log("clicked")
    element.style.background = "skyblue"
    element.style.color = 'white'
    element.innerHTML = "Clicked!"
}

function darkmode(){
    let Theme = document.body

    Theme.classList.toggle("dark_mode")
}

//Greeting
window.onload = function(){
    let time = new Date() //gets the current date

    let greetElement = document.getElementById("greeting")

    //before 12pm - morning

    if(time.getHours() < 12){
        greet = "Good morning!"

    }else if (time.getHours() < 18){
        greet = "Good Afternoon!"

    }else{
        greet = "Good evening"
    }
    greetElement.innerText = greet
}

//Countdown

const countDown = () => {
    const countDate = new Date("November 20, 2022 00:00:00").getTime();
    const today = new Date().getTime();
    const difference = countDate - today;


const second = 1000;
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const textDay = Math.floor(difference / day);
const textHour = Math.floor((difference % day) / hour);
const textMinute = Math.floor((difference % hour) / minute)
const textSecond = Math.floor((difference % minute)/ second)

document.querySelector(".day").textContent = textDay;
document.querySelector(".hour").textContent = textHour;
document.querySelector(".minute").textContent = textMinute;
document.querySelector(".second").textContent = textSecond;
}
setInterval(countDown, 1000);

d

