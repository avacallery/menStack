
        document.getElementById("button").addEventListener("click", getStudentData);

        function getStudentData() {

            var xhr = new XMLHttpRequest();
            console.log(xhr);

            xhr.open('GET', 'http://localhost:5000/api/graduates/', true);
            xhr.onload = function () {
            
                if (xhr.status == 200) {

                    var parsedData = JSON.parse(xhr.responseText);
                    var dataList = ""; 

                    for (var i = 0; i < parsedData.length; i++) {
                        dataList += "<p> Name: " + parsedData[i].name + "<br>" +
                        "Email: " + parsedData[i].email + "<br>" +
                        "Date of Graduation:" + parsedData[i].dateOfGraduation + "<br>" +
                        "Bio: " + parsedData[i].bio + "</p>"
                        + "<button id='deleteButton' onclick='removeOneStudent'>Delete Student</button>";
                    }

                    document.getElementById("data").innerHTML = dataList 
                } else {
                    console.log("That is an error.");
                }
            }
            xhr.send();
        }

        function removeOneStudent() {

            var url = "http://localhost:5000/api/graduates"
            var xhr = new XMLHttpRequest();
            console.log(xhr); 

                    // const id = document.getElementById("deleteButton").value;
                    console.log(id);
                    
                    //how can we get a specific id of a graduate? 
                    
                     xhr.open('DELETE', url + id, true);
                     xhr.onload = function () {
            
                if (xhr.status == 200) {

                    var graduates = JSON.parse(xhr.responseText);
                    console.log(graduates);

                    console.log("Success.")
                } else {
                    console.log("That is an error.");
                }
            }
            xhr.send();
        }
