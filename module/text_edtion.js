export default function inputBox(where) {
    const body = document.getElementById("body");

    body.innerHTML += `
    <div class="input-box p-4">
        <input id="input" type="text" name="name" placeholder="Digite o título">
    </div>`

    const place = where;
    textEdtion(place);
};

function textEdtion(place) {

    const input = document.getElementById("input");

    input.onkeyup = (event) => {

        if (event.key === 'Enter') {
            const textEdit = document.getElementById(`${place}`);
            textEdit.innerHTML = input.value;
          };

    };
    
}