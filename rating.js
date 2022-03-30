const divs = document.querySelectorAll(".circle");

divs.forEach(div => {
    div.addEventListener("click",function(){
        divs.forEach(d => d.classList.remove("active"));
        div.classList.add("active");
    });
});
