const form = document.querySelector("#form")

function mostrarForm(){
    if(form.style.display === 'flex') {
        form.style.display = 'none';
    }else{
        form.style.display = 'flex';
    }
}
