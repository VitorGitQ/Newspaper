export default function inputImg(el) {

    const fade = document.getElementById('fade');
    const buttonGetOut  = document.getElementById("buttonOut-imgmodal");
    const buttonSend  = document.getElementById("buttonSend-imgmodal");
    const inputImgModal = document.getElementById('img-modal');

    const chooseImg = document.getElementById("chooseimg");
    const preview = document.getElementById("preview");
    const textLabel = document.getElementById("textlabel");


    chooseImg.onchange = () => {

        preview.src = URL.createObjectURL(chooseImg.files[0]);
        
        if (preview.src.length !== 0) {
            textLabel.classList.add("hide");
            preview.classList.remove("hide");
            
        } else {
            preview.classList.add("hide");
            textLabel.classList.remove("hide");
        }
        
    }

    buttonGetOut.onclick = () => {
        inputImgModal.classList.toggle("hide");
        fade.classList.toggle("hide");
        preview.classList.add("hide");
        textLabel.classList.remove("hide");
    }

    buttonSend.onclick = () => {
        inputImgModal.classList.toggle("hide");
        fade.classList.toggle("hide");
        preview.classList.add("hide");
        textLabel.classList.remove("hide");

        el.src = preview.src;

    }

};
