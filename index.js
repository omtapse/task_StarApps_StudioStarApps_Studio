// Selectors 
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let pink = document.getElementById("pink");
let color = document.getElementsByClassName("color");
let umbrellaImage = document.getElementById("umbrellaImage");
let umbrellaImageContainer = document.getElementsByClassName("imageContainer")[0];
let uploadButton = document.getElementById("uploadButton");
let fileInput = document.getElementById("fileInput");
let logoImage = document.getElementById("previewLogoImage");
let uploadButtonText = document.getElementById("uploadButtonText");
let uploadicon = document.getElementById("uploadicon");
let loaderIcons = document.getElementsByClassName("loaderImage");

//Added setTimeout function because loader is not visible 
const runLoaderForHalfSec =() =>{
    umbrellaImageContainer.style.opacity = 0;
    uploadicon.style.opacity = 0;
    Array.from(loaderIcons).forEach(loaderIcon=>{
        loaderIcon.style.opacity = 1;
    })
    setTimeout(function() {
        Array.from(loaderIcons).forEach(loaderIcon=>{
            loaderIcon.style.opacity = 0;
        })
        umbrellaImageContainer.style.opacity = 1;
        uploadicon.style.opacity = 1;
    }, 1000);
} 

// Functions for handling Color
blue.addEventListener("click", function () {
    loaderIcons[0].style.fill = "#00a3e0"
    runLoaderForHalfSec();
    umbrellaImage.src = '/assets/Blue umbrella.png'
    for (var i = 0; i < color.length; i++) {
        color[i].classList.remove("selected");
    }
    blue.classList.add("selected")
    uploadButton.style.backgroundColor = "#00a3e0"
})

yellow.addEventListener("click", function () {
    loaderIcons[0].style.fill = "#fed141"

    runLoaderForHalfSec();
    umbrellaImage.src = '/assets/Yello umbrella.png'

    for (var i = 0; i < color.length; i++) {
        color[i].classList.remove("selected");
    }
    yellow.classList.add("selected")
    uploadButton.style.backgroundColor = "#fed141"
})

pink.addEventListener("click", function () {
    loaderIcons[0].style.fill = "#d0006f"
    runLoaderForHalfSec();
    umbrellaImage.src = '/assets/Pink umbrella.png'
    for (var i = 0; i < color.length; i++) {
        color[i].classList.remove("selected");
    }
    pink.classList.add("selected")
    uploadButton.style.backgroundColor = "#d0006f"
})


// function for adding logo 
uploadButton.addEventListener("click", function () {
    fileInput.click();
});

fileInput.addEventListener("change", function () {
    runLoaderForHalfSec();
    let selectedFile = fileInput.files[0];
    console.log("Selected file:", selectedFile);

    if (selectedFile && selectedFile.type.includes("image")) {
        var reader = new FileReader();
        reader.onload = function(e) {
            logoImage.src = e.target.result;
            uploadButtonText.innerText = selectedFile.name
        };
        reader.readAsDataURL(selectedFile);
    }
});
