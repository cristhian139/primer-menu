let imagenes = document.querySelectorAll(".galery_img");
let modal = document.querySelector("#modal");
let img = document.querySelector("#modal_img");
let boton = document.querySelector("#modal_boton");

for (let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("click", function(){
        modal.classList.toggle("modal_open");
        

    }); 
} 

