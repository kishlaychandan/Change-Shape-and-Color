let changeColor=document.getElementsByClassName("change-color")[0];
let changeShape=document.getElementsByClassName("change-shape")[0];
let changebgcolor=document.getElementsByClassName("change-bgcolor")[0];
let circle=document.getElementsByClassName("circle")[0];
let main=document.getElementsByClassName("main")[0];
let shape=document.getElementsByClassName("shape")[0];
let colors=["#fedcba","#ffbf00","#0000ff","#3f3fff","#abcdef"
    ,"#181716","#009c4a","#ff0000","#451800","#cbff00","#849974","#cbff00","#c0ff00",
    "#c6e2ff","#ff00ff","#fbc6da"
];
let shapes=["polygon(50% 0%, 0% 100%, 100% 100%)","polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)","polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)","polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
    ,"polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)","polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"];


changeColor.addEventListener("click",()=>{
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    circle.style.backgroundColor = randomColor;  
});
changeShape.addEventListener("click",()=>{
    // console.log("hii");
    let randomShape=shapes[Math.floor(Math.random()*shapes.length)]
    // console.log(randomShape);
    shape.style.clipPath=randomShape;
});
changebgcolor.addEventListener("click",()=>{
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    main.style.backgroundColor = randomColor;  
});
