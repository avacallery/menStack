var theAngularHotel = {
 roomType: ["Single", "Double", "Queen", "King"],
 roomNumbers: [[101, 102, 103], [104, 105, 106], [201, 202, 203], [300, 305]],
 roomPrices: [[60], [75], [85], [100]],
 bookedRooms: [ [], [], [], []],   
    listHotelRooms: function() {
        var availableRooms = "<select id='selectedRoomNumber'>";
        for (var i = 0; i < this.roomNumbers.length; i++) {
            availableRooms += "<optgroup label ="+this.roomType[i]+'-'+this.roomPrices[i]+">"
            for (var j = 0; j < this.roomNumbers[i].length; j++) {
                availableRooms += "<option value="+this.roomNumbers[i][j]+">" 
                +this.roomNumbers[i][j]+"</option>";
            }
            availableRooms += "</optgroup>";
        }
        availableRooms += "</select>";
        document.getElementById("hotelRooms").innerHTML = availableRooms;  
    }, 
    bookRoom: function() {
        var selectSingleRoom = document.getElementById("selectedRoomNumber").value;
            // selectSingleRoom = 105
            alert(selectSingleRoom);
            for (var i =0; i < this.roomNumbers.length; i++) {
                for (var j =0; j < this.roomNumbers[i].length; j++) {
                    if (selectSingleRoom == this.roomNumbers[i][j]){ // i=0, j=0
                this.bookedRooms[i].push(this.roomNumbers[i].splice(j,1)[0]);  
            }   
               }
               this.listHotelRooms();
               this.unavailableRooms();
}
  },
unavailableRooms: function() {
var roomsUnavailable= "<select id='unavailableRoomNumbers'>";
for (var i = 0; i <this.bookedRooms.length; i++) {
    roomsUnavailable += "<optgroup label="+this.roomType[i]+'-'+this.roomPrices[i]+">"
        for (var j = 0; j <this.bookedRooms[i].length; j++){
            roomsUnavailable+= "<option value="+this.bookedRooms[i][j]+">"
                +this.bookedRooms[i][j]+"</option>";
        }
        roomsUnavailable += "</optgroup>";
}
roomsUnavailable += "</select>";
document.getElementById("hotelRoomsBooked").innerHTML = roomsUnavailable;
    },
 };
