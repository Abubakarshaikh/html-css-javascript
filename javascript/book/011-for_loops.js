var most_polluted_cities = ["Patna", "Gurugram", "Lucknow", "Karachi", "Ulaabaatar"];

var cityToCheck = prompt();

for (i in most_polluted_cities){
    if (cityToCheck == most_polluted_cities[i]){
        document.write("it's one of the Poluted City.");
    } else {
        document.write("It's not in the list ..")
        break
    }
}