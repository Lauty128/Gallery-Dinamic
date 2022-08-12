let images = document.querySelectorAll(".contentImages div");
let imagesChild = [];
let imagesSrc = [];
let indexImg = 0;

class Slider {

    hideButton = (next, previous)=>{
        if(indexImg == imagesSrc.length - 1) next.style.opacity = "0"
        console.log(indexImg)
        console.log(imagesSrc.length - 1)
        if(indexImg < imagesSrc.length - 1) next.style.opacity = "1"
        if(indexImg == 0) previous.style.opacity = "0"
        if(indexImg > 0) previous.style.opacity = "1"
    }

    loadSlider = (e, imagesSrc)=>{
        document.querySelector(".imageSliderMain").firstElementChild.src = e.target.src      
        document.getElementById("containerSliderImages").style.display = "flex";
        this.hideButton(document.getElementById("nextSliderButton"),document.getElementById("previousSliderButton"))
        if(indexImg < imagesSrc.length - 1) document.querySelector(".imageSliderMain").nextElementSibling.firstElementChild.src = imagesSrc[indexImg + 1]
        if(indexImg > 0) document.querySelector(".imageSliderMain").previousElementSibling.firstElementChild.src = imagesSrc[indexImg - 1]
        setTimeout(()=>{document.querySelector(".contentSlider").style.opacity = "1";}, 50)
    }
    
    nextImgSlider = (cant, index)=>{
        document.getElementById("slider").style.transition = "all 0.2s";
        indexImg = indexImg + index;       
        document.getElementById("slider").style.marginLeft = cant;
        setTimeout(()=>{
            document.getElementById("slider").style.transition = "none";
            document.querySelector(".imageSliderMain").firstElementChild.src = imagesSrc[indexImg]
            document.getElementById("slider").firstElementChild.firstElementChild.src = imagesSrc[indexImg - 1]
            document.getElementById("slider").lastElementChild.firstElementChild.src = imagesSrc[indexImg + 1]
            document.getElementById("slider").style.marginLeft = "-100%"
        },200)
    }

    hideContainer = ()=>{
        document.querySelector(".contentSlider").style.opacity = "0";
        setTimeout(()=>{
            document.getElementById("containerSliderImages").style.display = "none"
        }, 300)
    }
}

window.addEventListener("DOMContentLoaded",()=>{
    images.forEach(image=>{
            if(image.firstElementChild.clientWidth < image.firstElementChild.clientHeight){
                image.classList.add("imgTall");
            }
            document.querySelector(".contentImages").style.display = "grid";
            image.classList.add("image");
            
            imagesChild.push(image)
    })
})

let sliderObject = new Slider();

document.querySelector(".contentImages").addEventListener("click",e=>{
    imagesSrc = imagesChild.map(container=>container.firstElementChild.src)
    if(e.target.src){
        indexImg = imagesSrc.indexOf(e.target.src)
        sliderObject.loadSlider(e, imagesSrc);
    }
})


document.getElementById("containerSliderImages").addEventListener("click",e=>{
    if(e.target.id == "containerSliderImages") sliderObject.hideContainer()
    if(e.target.id == "nextSliderButton" && indexImg < imagesSrc.length - 1) sliderObject.nextImgSlider("-200%", 1)
    if(e.target.id == "previousSliderButton" && indexImg > 0){ sliderObject.nextImgSlider("0%", -1) }
    sliderObject.hideButton(document.getElementById("nextSliderButton"),document.getElementById("previousSliderButton"))
})

// let loadSlider = (e, imagesSrc)=>{
//     console.log(imagesSrc)
//     document.getElementById("containerSliderImages").style.display = "flex";
//     document.querySelector(".imageSliderMain").firstElementChild.src = e.target.src
//     document.querySelector(".imageSliderMain").nextElementSibling.firstElementChild.src = imagesSrc[indexImg + 1]
//     document.querySelector(".imageSliderMain").previousElementSibling.firstElementChild.src = imagesSrc[indexImg - 1]
// }









//if(imagen.clientWidth < imagen.clientHeight) console.log("Fina")
//else console.log("Ancha")

//CREAR UNA FUNCION QUE PRIMERO ANALICE LA IMAGEN PARA 
//VER SU TAMANNIO, Y UNA VEZ QUE SEPAMOS SI SU ANCHURA ES 
//MAYOR QUE SU ALTURA DECIDIMOS QUE CLASE TENDRA 
//(DE IMAGEN ANCHA O FINA)