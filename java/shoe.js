function imggallery(){
    const imghighlight = document.querySelector(".highlight");
    const imgpreview = document.querySelectorAll(".shoepreview img");

    imgpreview.forEach(imgpreviews =>{
        imgpreviews.addEventListener('click', function() {
            const smallSrc =this.src;
            const bigSrc = smallSrc.replace('small','big');
            imghighlight.src = bigSrc;
            imgpreview.forEach(imgpreviews => imgpreviews.classList.remove("shoeactive"));
            imgpreviews.classList.add('shoeactive');
        });
    });
}

imggallery();