import inputBox from "../module/text_edtion.js";

const inputModal = document.getElementById('input-modal')
const title = document.getElementById('title');
const subTitle1 = document.getElementById('subtitle1');
const subTitle2 = document.getElementById('subtitle2');


[title, subTitle1, subTitle2].forEach((el) => {
    console.log(el.id);
    el.onclick = () => {
        inputBox(el.id);
        inputModal.classList.toggle("hide");
    };

});

