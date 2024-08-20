export default function inputBox(where) {

    textEdtion(where);
};

function textEdtion(where) {

    const textEdit = document.getElementById(`${where}`);
    const textModal = document.getElementById("text-modal");
    const fade = document.getElementById('fade');
    const inputText = document.getElementById("inputText");
    const buttonGetOut  = document.getElementById("buttonOut-textmodal");
    const buttonSend  = document.getElementById("buttonSend-textmodal");

    function testText() {
        textEdit.innerHTML = inputText.value ? inputText.value : textEdit.innerText;
        textModal.classList.toggle("hide");
        fade.classList.toggle("hide");
        inputText.value=''
    }

    inputText.onkeyup = (event) => {

        if (event.key === 'Enter') {
            testText();
          };

    };


    buttonGetOut.onclick = () => {
        textModal.classList.toggle("hide");
        fade.classList.toggle("hide");
        inputText.value=''
    }

    buttonSend.onclick = () => {
        testText();
    }
    
}