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
