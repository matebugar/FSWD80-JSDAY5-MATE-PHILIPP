console.log("hallo");

var sandwiches = { "sandwich": "hamburger", "calories": "260" };

var fries = { "fries_size": "Large French Fries", "calories": "570" };

document.write("My favorite sandwich is a " + sandwiches.sandwich + " which has approximately " + sandwiches.calories +", along with it I enjoy eating " + fries.fries_size + " which have about " + fries.calories + " calories.");

var data = {"data_sets" : [{
	"id":"01", 
	"first_name":"Clemens", 
	"last_name":"Sauer", 
	"email_address":"clemens.sauer@gmx.net", 
	"job_title":"supervisor", 
	"salary":"45000"
}, {
	"id":"02",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}, { 
	"id":"03",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}, { 
	"id":"04",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}, {
	"id":"05",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}, {
	"id":"06",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}, {
	"id":"07",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}, {
	"id":"08",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}, {
	"id":"09",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}, {
	"id":"10",
	"first_name":"Clemens",
	"last_name":"Sauer",
	"email_address":"clemens.sauer@gmx.net",
	"job_title":"supervisor",
	"salary":"45000"
}]
}
var i = 0
    document.writeln("<table border='2'><tr>");
    for (i = 0; i < data.data_sets.length; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>Id</b></td><td width=50>" + data.data_sets[i].id + "</td></tr>");
        document.writeln("<tr><td><b>First_name</b></td><td width=50>" + data.data_sets[i].first_name + "</td></tr>");
        document.writeln("<tr><td><b>Last_name</b></td><td width=50>" + data.data_sets[i].last_name + "</td></tr>");
        document.writeln("<tr><td><b>Email-address</b></td><td width=50>" + data.data_sets[i].email_address + "</td></tr>");
        document.writeln("<tr><td><b>Job_title-address</b></td><td width=50>" + data.data_sets[i].job_title + "</td></tr>");
  		document.writeln("<tr><td><b>Salary</b></td><td width=50>" + data.data_sets[i].salary + "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td>");
    };