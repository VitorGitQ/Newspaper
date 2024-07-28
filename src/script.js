import inputBox from "../module/text_edtion.js";

const title = document.getElementById('title');
const subTitle1 = document.getElementById('subtitle1');
const subTitle2 = document.getElementById('subtitle2');

title.onclick = () => {
    inputBox("title");
}

subTitle1.onclick = () => {
    inputBox("subtitle1");
}

subTitle2.onclick = () => {
    inputBox("subtitle2");
}
