export default function inputBox(where) {

    const place = where;
    textEdtion(place);
};

function textEdtion(place) {

    const textEdit = document.getElementById(`${place}`);
    const inputModal = document.getElementById("input-modal")
    const inputText = document.getElementById("inputText");
    const buttonGetOut  = document.getElementById("buttonOut");
    const buttonSend  = document.getElementById("buttonSend");

    inputText.onkeyup = (event) => {

        if (event.key === 'Enter') {
            textEdit.innerHTML = inputText.value;
          };

    };


    buttonGetOut.onclick = () => {
        inputModal.classList.toggle("hide")
        inputText.value=''
    }

    buttonSend.onclick = () => {
        textEdit.innerHTML = inputText.value;
        inputModal.classList.toggle("hide")
        inputText.value=''
    }
    
}