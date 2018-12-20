//alert("check_out.js was loaded");


window.onload = function see_ticket(){
	var preview = document.getElementById("ticket_preview");
	tools.make_price();
	preview.innerHTML = "<div id='title'>e-ticket</div><br/><hr/>" + Date() + "<hr/>" +
		"<br/>" + "Belonging To : " + localStorage.f_name.toUpperCase() + " " + localStorage.l_name.toUpperCase() +
		"<br/>" + "Phone: " + localStorage.phone_number +
		"<br/>" + "E-Mail: " + localStorage.e_mail.toUpperCase() +
		"<br/>" + "Ticket Number: " + Math.floor(Math.random()*9999) +
		"<br/>" + "Flight: " + localStorage.flight + " - " + localStorage.class + " Class" +
		"<br/>" + "Airfare: $" + localStorage.price +
		"<br/>" + "From: " + localStorage.location + " - To: " + localStorage.destination +
		"<br/>" + "Departing: " + localStorage.departure + " - Arriving: " + localStorage.arrival +
		"<br/>" + "Gate: " + localStorage.gate +
		"<br/>" + "Seat Number: " + localStorage.seat_number + 
		"<br/>" + "Row: " + localStorage.row +
		"<br/>" + "Seat Location: " + localStorage.seat_loc +
		"<br/>" + "Bulk Head: " + localStorage.bulk_head +
		"<br/>" + "Emergency Exit: " + localStorage.emergency_exit;
}



