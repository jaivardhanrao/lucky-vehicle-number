let ham = document.querySelector(".bars");
let cross = document.querySelector(".cross");
let content = document.querySelector(".nav-bar-items");

ham.addEventListener("click",()=>{
    ham.style.display = "none";
    cross.style.display = "block";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.gap = "1rem";
    content.style.position = "absolute";
    content.style.top = "10vh";
    content.style.left = "0vw";
    content.style.background = "linear-gradient(to right, #5c0000, #a40000)";
    content.style.padding = "1rem";
    content.style.zIndex = "5";
    content.style.boxShadow = "#5c0000 0px 0px 20px 5px";
})
cross.addEventListener("click",()=>{
    ham.style.display = "block";
    cross.style.display = "none";
    content.style.display = "none";
})