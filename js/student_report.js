function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }


var html ="";
var student;


for (var i = 0;i < students.length; i+=1 ){
    student = students[i];
    html += "<h2>Student: "+student.Name+"</h2>";
    html += "<p>Track: " +student.Track+"</p>";
    html += "<p>Achievements: "+student.Achievements+"</p>";
    html += "<p>Points: "+student.Points+"</p>";
}



print(html);