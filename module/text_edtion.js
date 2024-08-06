export default function inputBox(where) {

    textEdtion(where);
};

function textEdtion(where) {

    const textEdit = document.getElementById(`${where}`);
    const inputModal = document.getElementById("input-modal");
    const fade = document.getElementById('fade');
    const inputText = document.getElementById("inputText");
    const buttonGetOut  = document.getElementById("buttonOut");
    const buttonSend  = document.getElementById("buttonSend");

    function testText() {
        textEdit.innerHTML = inputText.value ? inputText.value : textEdit.innerText;
        inputModal.classList.toggle("hide");
        fade.classList.toggle("hide");
        inputText.value=''
    }

    inputText.onkeyup = (event) => {

        if (event.key === 'Enter') {
            testText();
          };

    };


    buttonGetOut.onclick = () => {
        inputModal.classList.toggle("hide");
        fade.classList.toggle("hide");
        inputText.value=''
    }

    buttonSend.onclick = () => {
        testText();
    }
    
}