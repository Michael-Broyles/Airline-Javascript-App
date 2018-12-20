//-----------------------JSON-OBJECT-MULTIDIMENTIONAL-ARRAY---------------------------------------//


var seat_info = document.getElementById("display");

var available = false;

var s1 = document.getElementById("seat_1");
var s2 = document.getElementById("seat_2");
var s3 = document.getElementById("seat_3");
var s4 = document.getElementById("seat_4");
var s5 = document.getElementById("seat_5");
var s6 = document.getElementById("seat_6");
var s7 = document.getElementById("seat_7");
var s8 = document.getElementById("seat_8");
var s9 = document.getElementById("seat_9");
var s10 = document.getElementById("seat_10");

var s11 = document.getElementById("seat_11");
var s12 = document.getElementById("seat_12");
var s13 = document.getElementById("seat_13");
var s14 = document.getElementById("seat_14");
var s15 = document.getElementById("seat_15");
var s16 = document.getElementById("seat_16");
var s17 = document.getElementById("seat_17");
var s18 = document.getElementById("seat_18");
var s19 = document.getElementById("seat_19");
var s20 = document.getElementById("seat_20");

var s21 = document.getElementById("seat_21");
var s22 = document.getElementById("seat_22");
var s23 = document.getElementById("seat_23");
var s24 = document.getElementById("seat_24");
var s25 = document.getElementById("seat_25");
var s26 = document.getElementById("seat_26");
var s27 = document.getElementById("seat_27");
var s28 = document.getElementById("seat_28");
var s29 = document.getElementById("seat_29");
var s30 = document.getElementById("seat_30");

var s31 = document.getElementById("seat_31");
var s32 = document.getElementById("seat_32");
var s33 = document.getElementById("seat_33");
var s34 = document.getElementById("seat_34");
var s35 = document.getElementById("seat_35");
var s36 = document.getElementById("seat_36");
var s37 = document.getElementById("seat_37");
var s38 = document.getElementById("seat_38");
var s39 = document.getElementById("seat_39");
var s40 = document.getElementById("seat_40");
//-----------------------------------------------------ARRAYS------------------------------------------------//
var seat_json = {
	_available: localStorage.available,
	_seat_num: 'Seat Number: ' + localStorage.seat_number,
	_row: 'ROW: ' + localStorage.row,
	_seat_loc: localStorage.seat_loc,
	_bulkhead: localStorage.bulk_head,
	_exit: localStorage.emergency_exit,
	_class: localStorage.class + ' Class',
	_price: 'Airfare: $' + localStorage.price,
	_flight: 'Flight: ' + localStorage.flight,
	_location: 'FROM: ' + localStorage.location,
	_destination: ' - TO: ' + localStorage.destination,
	_departure: 'Departing: ' + localStorage.departure,
	_arrival: ' - Arriving: ' + localStorage.arrival
};

function make_seat(){
	seat_info.innerHTML = 
	seat_json._seat_num + '<br/>' +
	seat_json._row + '<br/>' +
	seat_json._class + '<br/>' +
	seat_json._available + '<br/>' +
	seat_json._price + '<br/>' +
	seat_json._seat_loc + '<br/>' +
	seat_json._exit + '<br/>' +
	seat_json._bulkhead + '<br/>' +
	seat_json._flight + '<br/>' +
	seat_json._location +
	seat_json._destination + '<br/>' +
	seat_json._departure +
	seat_json._arrival;
	}

function no_sale(e){//---------------------------------------------------------------------------------------------------BUG-BUG-//
	if(available == false){
		this.style.cursor = "not-allowed";
	}
}

//---------------------------------FIRST_CLASS----------------------------------------------------------------//
function info_1(){
	localStorage.setItem("available", "Available");
	localStorage.setItem("seat_number", '1');
	localStorage.setItem("row", "1");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Window");
	localStorage.setItem("bulk_head", "Bulk Head");
	localStorage.setItem("emergency_exit", "Not By An Emergency Exit");
	localStorage.setItem("price", "1000.00");
	
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Window" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination +
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}

function info_2(){
	localStorage.setItem("seat_number", '2');
	localStorage.setItem("row", "2");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Window");
	localStorage.setItem("bulk_head", "Not By a Bulk Head");
	localStorage.setItem("emergency_exit", "Not By An Emergency Exit");
	localStorage.setItem("price", "1000.00");
	
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Window" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination +
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}

function info_3(){
	var available = true;
	localStorage.setItem("seat_number", "3");
	localStorage.setItem("row", "3");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Window");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Window" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination +
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_4(){
	var available = true;
	localStorage.setItem("seat_number", "4");
	localStorage.setItem("row", "1");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "Yes");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination +
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_5(){
	var available = true;
	localStorage.setItem("seat_number", "5");
	localStorage.setItem("row", "2");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination +
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_6(){
	localStorage.setItem("seat_number", "6");
	localStorage.setItem("row", "3");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination +
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_7(){
	localStorage.setItem("seat_number", "7");
	localStorage.setItem("row", "1");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "Yes");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_8(){
	localStorage.setItem("seat_number", "8");
	localStorage.setItem("row", "2");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_9(){
	localStorage.setItem("seat_number", "9");
	localStorage.setItem("row", "3");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_10(){
	available = false;
	localStorage.setItem("seat_number", "10");
	localStorage.setItem("row", "1");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Window");
	localStorage.setItem("bulk_head", "Yes");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: No<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Window" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
	no_sale();
}
function info_11(){
	available = true;
	no_sale();
	localStorage.setItem("seat_number", "11");
	localStorage.setItem("row", "2");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Window");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Window" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_12(){
	localStorage.setItem("seat_number", "12");
	localStorage.setItem("row", "3");
	localStorage.setItem("class", "First");
	localStorage.setItem("seat_loc", "Window");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "1000.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "First Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Window" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
//---------------------------------BUISNESS_CLASS----------------------------------------------------------------//
function info_13(){
	localStorage.setItem("seat_number", "13");
	localStorage.setItem("row", "4");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_14(){
	localStorage.setItem("seat_number", "14");
	localStorage.setItem("row", "4");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_15(){
	localStorage.setItem("seat_number", "15");
	localStorage.setItem("row", "4");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_16(){
	localStorage.setItem("seat_number", "16");
	localStorage.setItem("row", "4");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_17(){
	localStorage.setItem("seat_number", "17");
	localStorage.setItem("row", "5");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_18(){
	localStorage.setItem("seat_number", "18");
	localStorage.setItem("row", "5");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_19(){
	localStorage.setItem("seat_number", "19");
	localStorage.setItem("row", "5");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_20(){
	localStorage.setItem("seat_number", "20");
	localStorage.setItem("row", "5");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: No<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_21(){
	localStorage.setItem("seat_number", "21");
	localStorage.setItem("row", "6");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_22(){
	localStorage.setItem("seat_number", "22");
	localStorage.setItem("row", "6");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_23(){
	localStorage.setItem("seat_number", "23");
	localStorage.setItem("row", "6");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_24(){
	localStorage.setItem("seat_number", "24");
	localStorage.setItem("row", "6");
	localStorage.setItem("class", "Buisness");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "800.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Buisness Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
//---------------------------------ECONOMY_CLASS----------------------------------------------------------------//
function info_25(){
	localStorage.setItem("seat_number", "25");
	localStorage.setItem("row", "7");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "Yes");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_26(){
	localStorage.setItem("seat_number", "26");
	localStorage.setItem("row", "7");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "Yes");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_27(){
	localStorage.setItem("seat_number", "27");
	localStorage.setItem("row", "7");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "Yes");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_28(){
	localStorage.setItem("seat_number", "28");
	localStorage.setItem("row", "7");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "Yes");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_29(){
	localStorage.setItem("seat_number", "29");
	localStorage.setItem("row", "8");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_30(){
	localStorage.setItem("seat_number", "30");
	localStorage.setItem("row", "8");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: No<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_31(){
	localStorage.setItem("seat_number", "31");
	localStorage.setItem("row", "8");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>" +
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_32(){
	localStorage.setItem("seat_number", "32");
	localStorage.setItem("row", "8");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_33(){
	localStorage.setItem("seat_number", "33");
	localStorage.setItem("row", "9");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_34(){
	localStorage.setItem("seat_number", "34");
	localStorage.setItem("row", "9");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_35(){
	localStorage.setItem("seat_number", "35");
	localStorage.setItem("row", "9");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Center");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_36(){
	localStorage.setItem("seat_number", "36");
	localStorage.setItem("row", "9");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_37(){
	localStorage.setItem("seat_number", "37");
	localStorage.setItem("row", "10");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_38(){
	localStorage.setItem("seat_number", "38");
	localStorage.setItem("row", "10");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_39(){
	localStorage.setItem("seat_number", "39");
	localStorage.setItem("row", "10");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: Yes<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Center" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}
function info_40(){
	localStorage.setItem("seat_number", "40");
	localStorage.setItem("row", "10");
	localStorage.setItem("class", "Economy");
	localStorage.setItem("seat_loc", "Aisle");
	localStorage.setItem("bulk_head", "No");
	localStorage.setItem("emergency_exit", "No");
	localStorage.setItem("price", "550.00");
	seat_info.innerHTML = "Seat Number: " + localStorage.seat_number + "<br/>"+
	"ROW: " + localStorage.row + "<br/>" + "Economy Class<br/>Available: No<br/>"+
	"Airfare: $" + localStorage.price + "<br/>" +
	"Seat Location: Aisle" + "<br/>" +
	"FROM: " + localStorage.location + "<br/>TO: " + localStorage.destination+
	"<br/>" + "Flight: " + localStorage.flight + "<br/>" + "Departing: " + localStorage.departure +
	" - " + " Arriving: " + localStorage.arrival;
}

function dis_none(){
	seat_info.innerHTML = "";
}

//------------------------------------HIGHLIGHT-CLASSES---------------------------------------------------//

var first_tag = document.getElementById("first_legend");
var second_tag = document.getElementById("second_legend");
var third_tag = document.getElementById("third_legend");

var gold_shadow = document.getElementById("gold_box");
var silver_shadow = document.getElementById("silver_box");
var green_shadow = document.getElementById("green_box");

//----------------------------------------------------------------------ONMOUSEOVER------------------------//
first_tag.onmouseover = function highlight_1st(){
	gold_shadow.style.boxShadow = "0px 0px 20px 8px gold";
	gold_shadow.style.border = "2px solid black";
}

second_tag.onmouseover = function highlight_2nd(){
	silver_shadow.style.boxShadow = "0px 0px 20px 8px red";
	silver_shadow.style.border = "2px solid black";
}

third_tag.onmouseover = function highlight_third(){
	green_shadow.style.boxShadow = "0px 0px 20px 8px lawngreen";
	green_shadow.style.border = "2px solid black";
}

//----------------------------------------------------------------------ONMOUSEOUT------------------------//
first_tag.onmouseout = function no_highlight_1st(){
	gold_shadow.style.boxShadow = "0px 0px 20px 8px transparent";
	gold_shadow.style.border = "2px solid transparent";
}

second_tag.onmouseout = function no_highlight_2nd(){
	silver_shadow.style.boxShadow = "0px 0px 20px 8px transparent";
	silver_shadow.style.border = "2px solid transparent";
}

third_tag.onmouseout = function no_highlight_third(){
	green_shadow.style.boxShadow = "none";
	green_shadow.style.border = "2px double transparent";
}



//----------------------MEDIA-QUERRY-CLASS-SELECT-LIST----------------------//
function pop_seats_by_class(){
	var class_list = document.getElementById("class_select_list");
	var f_class_list = document.getElementById("first_class_seat_select_list");
	var b_class_list = document.getElementById("buisness_class_seat_select_list");
	var e_class_list = document.getElementById("economy_class_seat_select_list");
	
	if(class_list.value == "first_class"){
			f_class_list.style.display = "block";
			b_class_list.style.display = "none";
			e_class_list.style.display = "none";
	} else if(class_list.value == "buisness_class"){
			f_class_list.style.display = "none";
			b_class_list.style.display = "block";
			e_class_list.style.display = "none";  
	} else if(class_list.value == "economy_class"){
			f_class_list.style.display = "none";
			b_class_list.style.display = "none";
			e_class_list.style.display = "block";  
	} else if(class_list.value == ""){
			f_class_list.style.display = "none";
			b_class_list.style.display = "none";
			e_class_list.style.display = "none";
	}
}
//-----------------------------------------------------MEDIA-QUERRY-FIRST-CLASS-SEAT-SELECT-LIST----------------------//
function first_class_seat_info(){
	var f_class_list = document.getElementById("first_class_seat_select_list");
	
	if(f_class_list.value == "s1"){
	   	info_1();
	} else if(f_class_list.value == "s2"){
		info_2();
	} else if(f_class_list.value == "s3"){
		info_3();
	} else if(f_class_list.value == "s4"){
		info_4();
	} else if(f_class_list.value == "s5"){
		info_5();
	} else if(f_class_list.value == "s6"){
		info_6();
	} else if(f_class_list.value == "s7"){
		info_7();
	} else if(f_class_list.value == "s8"){
		info_8();
	} else if(f_class_list.value == "s9"){
		info_9();
	} else if(f_class_list.value == "s10"){
		info_10();
	} else if(f_class_list.value == "s11"){
		info_11();
	} else if(f_class_list.value == "s12"){
		info_12();
	} else if(f_class_list.value == "s13"){
		info_13();
	} else if(f_class_list.value == "s14"){
		info_14();
	} else if(f_class_list.value == "s15"){
		info_15();
	} else if(f_class_list.value == "s16"){
		info_16();
	} else if(f_class_list.value == "s17"){
		info_17();
	} else if(f_class_list.value == "s18"){
		info_18();
	} else if(f_class_list.value == "s19"){
		info_19();
	} else if(f_class_list.value == "s20"){
		info_20();
	} else if(f_class_list.value == "s21"){
		info_21();
	} else if(f_class_list.value == "s22"){
		info_22();
	} else if(f_class_list.value == "s23"){
		info_23();
	} else if(f_class_list.value == "s24"){
		info_24();
	}
}


//----------------------------------------------------MEDIA-QUERRY-BUISNESS-CLASS-SEAT-SELECT-LIST----------------------//
function buisness_class_seat_info(){
	var b_class_list = document.getElementById("buisness_class_seat_select_list");
	
	if(b_class_list.value == "s13"){
	   info_13();
	} else if(b_class_list.value == "s14"){
		info_14();
	} else if(b_class_list.value == "s15"){
		info_15();
	} else if(b_class_list.value == "s16"){
		info_16();
	} else if(b_class_list.value == "s17"){
		info_17();
	} else if(b_class_list.value == "s18"){
		info_18();
	} else if(b_class_list.value == "s19"){
		info_19();
	} else if(b_class_list.value == "s20"){
		info_20();
	} else if(b_class_list.value == "s21"){
		info_21();
	} else if(b_class_list.value == "s22"){
		info_22();
	} else if(b_class_list.value == "s23"){
		info_23();
	} else if(b_class_list.value == "s24"){
		info_24();
	}
}

//----------------------------------------------------MEDIA-QUERRY-ECONOMY-CLASS-SEAT-SELECT-LIST----------------------//
function economy_class_seat_info(){
	var e_class_list = document.getElementById("economy_class_seat_select_list");
	
	if(e_class_list.value == "s25"){
		info_25();
	} else if(e_class_list.value == "s26"){
		info_26();
	} else if(e_class_list.value == "s27"){
		info_27();
	} else if(e_class_list.value == "s28"){
		info_28();
	} else if(e_class_list.value == "s29"){
		info_29();
	} else if(e_class_list.value == "s30"){
		info_30();
	} else if(e_class_list.value == "s31"){
		info_31();
	} else if(e_class_list.value == "s32"){
		info_32();
	} else if(e_class_list.value == "s33"){
		info_33();
	} else if(e_class_list.value == "s34"){
		info_34();
	} else if(e_class_list.value == "s35"){
		info_35();
	} else if(e_class_list.value == "s36"){
		info_36();
	} else if(e_class_list.value == "s37"){
		info_37();
	} else if(e_class_list.value == "s38"){
		info_38();
	} else if(e_class_list.value == "s39"){
		info_39();
	} else if(e_class_list.value == "s40"){
		info_40();
	}
}

