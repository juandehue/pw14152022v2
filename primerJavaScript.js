function quitarSITEC(){
    let quitar = confirm("Seguro de quitar SITEC?")
    if(quitar === true ){
        alert("Se fue SITEC")
        let arti = document.getElementById("sitec")
        arti.innerHTML = "CHALECOS"
        console.log("Esto no se mira en la pagina, pero chalecos")
    }else{
        alert("No se fue SITEC")
    }
}

function darClic(){
    alert("di clic")
}
