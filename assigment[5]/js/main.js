$( document ).ready(function() {
	
	$("#submit-btn").click(function( event ) {
		event.preventDefault();
		var city = $("#city-type").val();

		if ( city == "New York" || city == "NY" || city == "NYC" ) {
			$('body').attr("class", 'nyc' );
			console.log("New York is awesome.");
		} else if ( city == "San Francisco" || city == "SF" || city == "Bay Area" ) {
			$('body').attr("class", 'sf' );
		} else if ( city == "Los Angeles" || city == "LA" || city == "LAX" ) {
			$('body').attr("class", 'la' );
		} else if ( city == "Austin" || city == "ATX" ) {
			$('body').attr("class", 'austin' );
		} else if ( city == "Sydney" || city == "SYD" ) {
			$('body').attr("class", 'sydney' );
		} else {
			alert("Bye!");
		}
	});





});


// var cities = ["NY","LA","SYD","LND"];
// var index = 1
// console.log("the first city is" + cities[0]); NYC
// console.log("the second city is" + cities[index]);LA
// console.log("the third city is" + cities[2]);SYD
// console.log("the four city is" + cities[3]);SYD
// if (condition_1) {
//   statement_1;
// } else if (condition_2) {
//   statement_2;
// } else if (condition_n) {
//   statement_n;
// } else {
//   statement_last;
// }