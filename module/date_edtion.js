export default function inputDate(date) {

    const buttonGetOut = document.getElementById('buttonOut-datemodal');
    const buttonSend = document.getElementById('buttonSend-date');
    const dateModal = document.getElementById('date-modal');
    const dateValue = document.getElementById('inputdate');
    const fade = document.getElementById('fade');

    buttonGetOut.onclick = () => {
        dateModal.classList.toggle("hide");
        fade.classList.toggle("hide");
    
    }


    buttonSend.onclick = () => {
        var valueDate = String(dateValue.value);
        date.innerHTML = editDate(valueDate);
    }
    

}


function editDate(dataValue) {
    var dateArray = [] = dataValue.split("");
    dateArray.splice(4,1);
    dateArray.splice(6,1);

    var day = [];
    var month = [];
    var year = [];

    for (var d = 6; d <= 7; d++) {
        day = day + (dateArray[d]);
    }

    for (var m = 4; m <= 5; m++) {
       month = month + (dateArray[m]);
       console.log(month)
    }

    for (var y = 0; y <= 3; y++) {
        year = year + (dateArray[y]);
    }

    var dateEdited = `${nameMonth(month)} ${day}TH, ${year}`
    return dateEdited;
    
}


function nameMonth(month) {

    const months = [ "January", "February", "March", "April", "May",
         "June", "July", "August", "September", "October", "November", "December"];

    var choose = months[parseInt(month) - 1];

    return choose;
}