
var tools = {
	clock: 
	function clock(){
	var clock = document.getElementById("clock");
	clock.innerHTML = "Today's date is "+Date();
	setTimeout("tools.clock()",1000);
	},
	make_price:
	function make_price(){
	if(localStorage.class == "First"){
	localStorage.price = 1000.00;
	} else if(localStorage.class == "Buisness"){
	localStorage.price = 800.00;
	} else
	localStorage.price = 550.00;
	},
	set_class:
	function set_class(){
	if(localStorage.seat_number <= 12){
		localStorage.setItem("class", "First");
	} else if(localStorage.seat_number > 12 && localStorage.seat_number <= 24){
		localStorage.setItem("class", "Buisness");
	} else {
		localStorage.setItem("class", "Economy");
	}
	}
};



var buttons = {
	pick_seat:
	function pick_seat(){
	var l = document.getElementById("select_loc");
	var d = document.getElementById("select_dest");
	if(l.value != "" && d.value != ""){
		if(l.value == d.value){
			localStorage.setItem("flight", "Get a taxi!!!");
			localStorage.setItem("departure", "1:05pm");
			localStorage.setItem("arrival", "1:45pm");
		}
		location.replace("sub_pages/airline.html");
	} else
		alert("Starting location and final destination must be selected \n before seating arrangements may be made.");
	},
	back_seat:
	function back_to_seat(){
	location.replace("sub_pages/airline.html");
	},
	back_home:
	function back_home(){
	location.replace("../pick_path.html");
	localStorage.clear();
	},
	check_out:
	function out(){
	//alert(document.id);
	location.replace("../sub_pages/info_form.html");
	},
	no_check_out:
	function no_out(){
	alert("We're sorry! This seat has already been purchased.\n Please select an available seat.");
	},
	check_out_page:
	function check_out_page(){
	location.replace("check_out.html");
	},
	reset_ticket:
	function reset_ticket(){
	localStorage.clear();
	},
	additional_ticket:
	function purchase_ticket(){
	alert("This feature is not active.");
	},
	back_to_info:
	function back_to_info(){
	location.replace("../sub_pages/info_form.html");
	},
	print_ticket:
	function print_ticket(){
	var x = document.getElementById("ticket_preview").innerHTML;
	document.body.innerHTML = x;
	window.print();
	buttons.check_out_page();
	}
};


