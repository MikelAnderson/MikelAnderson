function cambiaPic(){
    var image = document.getElementById('myFPImage');
    if (image.src.match("green")){
        image.src = "galaxia.jpg";
    }else {
        image.src = "luna.jpg";
    }
}

function myFunction(){
    var x = document.getElementById("mytxt");
    x.style.fontSize= "25px";
    x.style.color  ="red";
    console.log("sintesis, ejemplo de consola");
    window.alert("buenas noches");
}