var difficulty = -1; //Will keep updating throughout the script

function dif_selected() {
    //Enable the start button if it wasn't already
    document.getElementById("btn01").disabled = false;
    //Grab the radio form and loop through it looking for the selected btn
    var rdio = document.getElementById("dif_radio");
    for (var i = 0; i < rdio.length ;i++) {
        //Set difficulty accordingly
        if(rdio.elements[i].checked) difficulty = i;
    }
}
