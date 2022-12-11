const tbody = document.getElementById('tbody');
let users = [
    { name: "Abdussamad", age: 12 },
    { name: "Farhod", age: 19 },
    { name: "Jasur", age: 20 },
    { name: "Soyip", age: 16 },
    { name: "Qodir", age: 18 },
    { name: "Rustam", age: 17 },
    { name: "Nurillo", age: 17 },
    { name: "Samandar", age: 21 },
    { name: "Abror", age: 21 },
];

function writeToTable() {
    tbody.innerHTML = "";
    for (let f = 0; f < users.length; f++) {
        tbody.innerHTML += `<tr>
            <td>${f + 1}</td>
            <td>${users[f].name}</td>
            <td>${users[f].age}</td>
        </tr>`
    }
}
function forSort(){
    users = users.sort(function (a, b) {
        if(a.name < b.name) {
            return - 1;
        } 
    
        if(a.name > b.name) {
            return 1;
        }
    
        return 0;
    });
    console.log('Reverse boldi');
    writeToTable()
}
function teskarisiga(){
    users = users.sort(function (a, b) {
        if(a.name < b.name) {
            return 1;
        } 
    
        if(a.name > b.name) {
            return - 1;
        }
    
        return 0;
    });
    console.log('Teskarisiga boldi');
    writeToTable()
}
writeToTable()