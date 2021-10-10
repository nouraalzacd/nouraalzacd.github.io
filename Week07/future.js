var job = ["entrepreneur", "programmer", "Lawyer", "Othodontist"];
var geoLocation = ["Brazil", "Italy", "Australia", "Texas"];
var spouse = ["Fahad", "Khaled", "Dawood", "Fhahed"];
var numKids = [1,0,2,3];

var generator = Math.floor(Math.random() * 4);

function fortune(job,geoLocation,spouse,numKids) {
document.write("You will be a " + job + " in " + geoLocation + ", and married to " + spouse + " with " + numKids + " kids.");
}

fortune (job[generator], geoLocation[generator],spouse[generator], numKids[generator])
