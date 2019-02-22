var students = [
    {Name:"Nikle",Track:"Front End Development",Achievements:10,Points:2000},
    {Name:"Ken",Track:"IOS",Achievements:30,Points:4000},
    {Name:"Coco",Track:"Full stack JavaScript",Achievements:25,Points:4500},
    {Name:"Tom",Track:"Python",Achievements:19,Points:2854},
    {Name:"Rick",Track:"PHP",Achievements:40,Points:6895}
];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }


var html ="<p>";

for (var i = 0;i < students.length; i+=1 ){
    for(key in students[i]) {
        
        html += key+": "+students[i][key]+"<br>";
    }
    html += "<br>";
}

html +="</p>";

print(html);