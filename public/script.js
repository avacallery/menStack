document.getElementById("all").addEventListener("click", getData);

function getData() {
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open('GET', 'http://localhost:3000/api/nasa', true);
    xhr.onload = function () {
    
        if (xhr.status == 200) {

            var parsedData = JSON.parse(xhr.responseText);

            console.log(parsedData); 
            var dataList = ""; 

            for (var i = 0; i < parsedData.length; i++) {
                dataList += "<p> Check In: " + parsedData[i].checkIn + "<br>" +
                "Check Out: " + parsedData[i].checkOut + "<br>" +
                "Number Of Nights:" + parsedData[i].numberOfNights + "<br>" +
                "Room Type: " + parsedData[i].roomType + "</p>"
                +`<button id='all' onclick='dataList' value='${parsedData[i].id}'>Get All Rooms</button>`;

            }

            document.getElementById("data").innerHTML = dataList; 
        } else {
            console.log("That is an error.");
        }
    }
    xhr.send();
}