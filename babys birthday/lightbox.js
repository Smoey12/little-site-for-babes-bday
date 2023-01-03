function lightboxboot(){
var lightbox=document.createElement("div")
lightbox.id="lightbox"
var ul=document.getElementsByTagName("ul")
ul[0].insertBefore(lightbox)
for (var x=1;x<100;x++){
    setTimeout(function(x){
        lightbox.style.width=x+"%";
        lightbox.style.height=x+"%";
    },x*50,x)
}
}
var image=document.getElementsByClassName("preview")
for (var i=0;i<image.length;i++){
image[i].onclick=lightboxboot;
}