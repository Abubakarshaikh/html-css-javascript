var firstName = ["Abubakar", "Fuzail", "Noman", "ahsaan", "Khizer"];
var lastName = ["Arain", "Deswali", "Mughal", "Shaikh", "Malik"];

var fullName = [];
for (var i=0; i < firstName.length; i++){
    for (var j=0; j < lastName.length; j++){
        fullName.push(firstName[i] + lastName[j]);
    }
}
