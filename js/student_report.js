function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }


var html ="";
var student;


for (var i = 0;i < students.length; i+=1 ){
    student = students[i].Name;
    html += "<h2> Student: "+student+"</h2>";
    for(key in students[i]) {
        
        html += key+": "+students[i][key]+"<br>";
    }
    html += "<br>";
}



print(html);