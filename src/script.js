import inputBox from "../module/text_edtion.js";
import inputImg from "../module/img_edtion.js";
import inputDate from "../module/date_edtion.js";

const inputTextModal = document.getElementById('text-modal');
const fade = document.getElementById('fade');

const title = document.getElementById('title');

const subTitle1 = document.getElementById('subtitle1');
const subTitle2 = document.getElementById('subtitle2');
const subTitle3 = document.getElementById('subtitle3');
const subTitle4 = document.getElementById('subtitle4');
const subTitle5 = document.getElementById('subtitle5');
const subTitle6 = document.getElementById('subtitle6');
const subTitle7 = document.getElementById('subtitle7');
const subTitle8 = document.getElementById('subtitle8');

const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');
const description3 = document.getElementById('description3');
const description4 = document.getElementById('description4');
const description5 = document.getElementById('description5');
const description6 = document.getElementById('description6');
const description7 = document.getElementById('description7');


[title, subTitle1, subTitle2, subTitle3, subTitle4, subTitle5, subTitle6, subTitle7, subTitle8, description1, description2, description3, description4, description5, description6, description7].forEach((el) => {
    el.onclick = () => {
        inputBox(el.id);
        inputTextModal.classList.toggle("hide");
        fade.classList.toggle("hide");
    };

});



const date = document.getElementById("date");
const inputDateModal = document.getElementById("date-modal");

date.onclick = () => {
    inputDate(date);
    inputDateModal.classList.toggle("hide");
    fade.classList.toggle("hide");
};




const inputImgModal = document.getElementById('img-modal');
const boxImage1 = document.getElementById('boximg1');
const boxImage2 = document.getElementById('boximg2');
const boxImage2_1 = document.getElementById('boximg2-1');
const boxImage3 = document.getElementById('boximg3');


[boxImage1,boxImage2,boxImage2_1,boxImage3].forEach((el) => {
    el.onclick = () => {
        inputImg(el);
        inputImgModal.classList.toggle("hide");
        fade.classList.toggle("hide");
    };

});
