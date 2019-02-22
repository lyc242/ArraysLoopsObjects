var student;
var search;
var html = "";

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }

function getReport(student) {
    var report = "<h2>Student: "+student.Name+"</h2>";
    report += "<p>Track: " +student.Track+"</p>";
    report += "<p>Achievements: "+student.Achievements+"</p>";
    report += "<p>Points: "+student.Points+"</p>";
    return report;
}



while (true) {
    search = prompt("Please enter the name,Enter 'Q' to quit");
    if (search.toLowerCase()=== "q" || search === null){
        break;
    }
    for (var i = 0;i < students.length; i+=1 ){
        student = students[i];
        if (student.Name.toLowerCase() === search.toLowerCase()) {
            html = getReport(student);
            print(html);
        }
    }
    break;

}





