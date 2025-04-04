document.querySelector(".btn").addEventListener("click", changeColor);

function changeColor(){
    let colors = ["Lightblue","Pink","Purple","Violet","Lightgreen","Lavender","BurlyWood","DarkSalmon","GreenYellow","LightCoral","LightGray","LightPink","MistyRose","Turquoise","Teal"];
    let randomColor = Math.floor(Math.random()* colors.length);
    console.log(randomColor);

    document.querySelector("span").innerText = colors[randomColor];
    document.querySelector("body").style.backgroundColor = colors[randomColor]
    document.querySelector(".btn").style.backgroundColor = colors[randomColor]
    document.querySelector("h2").style.backgroundColor = "black";
    document.querySelector("h2").style.color = "white"
    document.querySelector("h2").style.padding = "0.7em"

} 
   





