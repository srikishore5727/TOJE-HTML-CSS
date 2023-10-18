document.getElementById("instruction-icon").addEventListener("click",()=>{
    document.getElementById('instruction-page').style.display = "inherit "
});

document.getElementById("exit-icon").addEventListener("click",()=>{
    document.getElementById('instruction-page').style.display = "none "
});

document.getElementById("play-btn").addEventListener("click",()=>{
    window.location.href = "game.html";
});
