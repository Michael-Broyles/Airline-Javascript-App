//localStorage.clear();
//------------------------------------------------- SEAT DASHBOARD BACKGROUND ---------------------------------------\\
var seat_bg = document.createElement('div');
seat_bg.id = "seat_background";
document.body.appendChild(seat_bg);
//------------------------------------------------- FLIGHT SELECT TITLE ---------------------------------------------\\
var title = document.createElement("h1");
title.id = "flight_title";
title.className = "title_class";
title.innerHTML = "Flight Selector";
//------------------------------------------------- FLIGHT SELECT LISTS TITLES---------------------------------------\\
var from_title = document.createElement("h2");
from_title.id = "f_title";
from_title.className = "title_class";
from_title.innerHTML = "Select A Starting Location";
var to_title = document.createElement("h2");
to_title.id = "t_title";
to_title.className = "title_class";
to_title.innerHTML = "Select A Destination";
//------------------------------------------------- FLIGHT SELECT LISTS ---------------------------------------------\\
//------------------------------------------------- SELECT LIST PARENT ELEMENTS -------------------------------------//
var from_list = document.createElement("select");
from_list.setAttribute("id", "f_list");
from_list.className = "list_class";

var to_list = document.createElement("select");
to_list.setAttribute("id", "t_list");
to_list.className = "list_class";
//------------------------------------------------- FROM SELECT LIST OPTIONS ---------------------------------------\\
var f_option_1 = document.createElement("option");
f_option_1.value = "";
f_option_1.innerHTML = "";

var f_option_2 = document.createElement("option");
f_option_2.value = "atlanta";
f_option_2.innerHTML = "Atlanta";

var f_option_3 = document.createElement("option");
f_option_3.value = "jacksonville";
f_option_3.innerHTML = "Jacksonville";

var f_option_4 = document.createElement("option");
f_option_4.value = "nashville";
f_option_4.innerHTML = "Nashville";

from_list.appendChild(f_option_1);
from_list.appendChild(f_option_2);
from_list.appendChild(f_option_3);
from_list.appendChild(f_option_4);
//------------------------------------------------- TO SELECT LIST OPTIONS -----------------------------------------\\
var t_option_1 = document.createElement("option");
t_option_1.value = "";
t_option_1.innerHTML = "";

var t_option_2 = document.createElement("option");
t_option_2.value = "atlanta";
t_option_2.innerHTML = "Atlanta";

var t_option_3 = document.createElement("option");
t_option_3.value = "jacksonville";
t_option_3.innerHTML = "Jacksonville";

var t_option_4 = document.createElement("option");
t_option_4.value = "nashville";
t_option_4.innerHTML = "Nashville";

to_list.appendChild(t_option_1);
to_list.appendChild(t_option_2);
to_list.appendChild(t_option_3);
to_list.appendChild(t_option_4);
//------------------------------------------------ APPENDING CHILD ELEMENTS ---------------------------------------\\
seat_bg.appendChild(title);
seat_bg.appendChild(from_title);
seat_bg.appendChild(from_list);
seat_bg.appendChild(to_title);
seat_bg.appendChild(to_list);
//----------------------------------------------------------------------------------------------------\\
//--------------------------------------------SELECT_LIST_LOGIC---------------------------------------//
f_list.onchange = function departing_flight_list_logic(){
	if(f_list.value == "nashville"){
		from_title.innerHTML = "Deaparting from Nashville";
		localStorage.setItem("from", "Nashville");
	} else if(f_list.value == "atlanta"){
		from_title.innerHTML = "Deaparting from Atlanta";
		localStorage.setItem("from", "Atlanta");
	} else if(f_list.value == "jacksonville"){
		from_title.innerHTML = "Deaparting from Jacksonville";
		localStorage.setItem("from", "Jacksonville");
	}
	get_flight_data();
}
t_list.onchange = function arriving_flight_list_logic(){
	if(t_list.value == "nashville"){
		to_title.innerHTML = "Arriving at Nashville";
		localStorage.setItem("to", "Nashville");
	} else if(t_list.value == "atlanta"){
		to_title.innerHTML = "Arriving at Atlanta";
		localStorage.setItem("to", "Atlanta");
	} else if(t_list.value == "jacksonville"){
		to_title.innerHTML = "Arriving at Jacksonville";
		localStorage.setItem("to", "Jacksonville");
	}
	get_flight_data();
	
}
function get_flight_data(){
	if(f_list.value == "jacksonville" && t_list.value == "nashville"){
		localStorage.setItem("flight", 525);
		localStorage.setItem("gate", "B2");
		localStorage.departure_time = "8:30AM";
		localStorage.arrival_time = "10:50AM";
		seats = 44;
		crazy_loop();
	} else if(f_list.value == "jacksonville" && t_list.value == "atlanta"){
		localStorage.setItem("flight", 626);
		localStorage.setItem("gate", "B3");
		localStorage.departure_time = "8:10AM";
		localStorage.arrival_time = "10:35AM";
		seats = 40;
		crazy_loop();
	} else if(f_list.value == "nashville" && t_list.value == "jacksonville"){
		localStorage.setItem("flight", 828);
		localStorage.setItem("gate", "C2");
		localStorage.departure_time = "7:50AM";
		localStorage.arrival_time = "9:20AM";
		seats = 40;
		crazy_loop();
	} else if(f_list.value == "nashville" && t_list.value == "atlanta"){
		localStorage.setItem("flight", 929);
		localStorage.setItem("gate", "C3");
		localStorage.departure_time = "8:00AM";
		localStorage.arrival_time = "9:20AM";
		seats = 40;
		crazy_loop();
	} else if(f_list.value == "atlanta" && t_list.value == "jacksonville"){
		localStorage.setItem("flight", 112);
		localStorage.setItem("gate", "D2");
		localStorage.departure_time = "11:00AM";
		localStorage.arrival_time = "12:20PM";
		seats = 40;
		crazy_loop();
	} else if(f_list.value == "atlanta" && t_list.value == "nashville"){
		localStorage.setItem("flight", 122);
		localStorage.setItem("gate", "D3");
		localStorage.departure_time = "10:30AM";
		localStorage.arrival_time = "12:10PM";
		seats = 40;
		crazy_loop();
	} else {
		localStorage.setItem("flight", "No flights are currently avaiable");
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------//
var reset_button = document.createElement('input');
	reset_button.type = "button";
	reset_button.id = "reset_b";
	reset_button.className = "button_class";
	reset_button.value = "Reset Flight";
	

reset_button.onclick = function reload_page(){
	location.replace('dynamic_airline.html');
}
//------------------------------------------------ SEAT SECTION TITLE ------------------------------------------\\
var seat_head = document.createElement('h1');
seat_head.id = "seatHeader";
seat_head.className = "title_class";
seat_head.innerHTML = "Seat Selector";
seat_bg.appendChild(seat_head);
//------------------------------------------------ SELECT SEAT SECTION -----------------------------------------\\
var seat_div = document.createElement("div");
seat_div.id = "seatDiv";
seat_bg.appendChild(seat_div);

var seat = document.createElement('img');
seat_div.appendChild(seat);
//------------------------------------------------ SEAT DISPLAY AREA -------------------------------------------\\
var display_area = document.createElement('div');
display_area.id = "displayArea";
seat_bg.appendChild(display_area);
//------------------------------------------------ SEAT FUNCTION -----------------------------------------------\\
//seat.onclick = function go_to_form(){
//	seat_head.style.display = "none";
//	seat_div.style.display = "none";
//	display_area.style.display = "none";
//	form_head.style.display = "block";
//	form_div.style.display = "block";
//	
//	//localStorage.setItem("seat", u_seat);
//}
//----------------------------------------------- SEAT FOR LOOP ------------------------------------------------\\
var seats = 4;//---- up to 44 for a good fit -------------\\
var z = Seat_1;

function crazy_loop(){
	
	from_list.style.display = 'none';
	to_list.style.display = 'none';
	seat_bg.appendChild(reset_button);
    
	for(i = 1; i <= seats; i++){
    var seat = document.createElement("img");
    var myName = 'Seat '+i;
    x = "images/chair.png";
    seat.setAttribute("id", myName);
    seat.setAttribute("name", myName);
    seat.setAttribute("src", x);
    seat.height = 30;
    seat.width = 32;
    seat.style.cursor = "pointer";
    seat.style.marginLeft = "10%";
    seat.style.marginTop = ".5%";

    seat.onmouseover = function(){
        display_area.innerHTML = this.name + "<br/>";

	if(this.name == "Seat 1"){
			z = Seat_1;
			localStorage.seat = this.name;
			localStorage.class = Seat_1.Class;
			localStorage.row = Seat_1.Row;
			localStorage.airfare = Seat_1.Airfare;
			alert(z.Available + " This seat has already been purchased and is unavailable.");
			seat_loop();
		} else if(this.name == "Seat 2"){
			z = Seat_2;
			localStorage.seat = this.name;
			localStorage.class = Seat_2.Class;
			localStorage.row = Seat_2.Row;
			localStorage.airfare = Seat_2.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 3"){
			z = Seat_3;
			localStorage.seat = this.name;
			localStorage.class = Seat_3.Class;
			localStorage.row = Seat_3.Row;
			localStorage.airfare = Seat_3.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 4"){
			z = Seat_4;
			localStorage.seat = this.name;
			localStorage.class = Seat_4.Class;
			localStorage.row = Seat_4.Row;
			localStorage.airfare = Seat_4.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 5"){
			z = Seat_5;
			localStorage.seat = this.name;
			localStorage.class = Seat_5.Class;
			localStorage.row = Seat_5.Row;
			localStorage.airfare = Seat_5.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 6"){
			z = Seat_6;
			localStorage.seat = this.name;
			localStorage.class = Seat_6.Class;
			localStorage.row = Seat_6.Row;
			localStorage.airfare = Seat_6.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 7"){
			z = Seat_7;
			localStorage.seat = this.name;
			localStorage.class = Seat_7.Class;
			localStorage.row = Seat_7.Row;
			localStorage.airfare = Seat_7.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 8"){
			z = Seat_8;
			localStorage.seat = this.name;
			localStorage.class = Seat_8.Class;
			localStorage.row = Seat_8.Row;
			localStorage.airfare = Seat_8.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 9"){
			z = Seat_9;
			localStorage.seat = this.name;
			localStorage.class = Seat_9.Class;
			localStorage.row = Seat_9.Row;
			localStorage.airfare = Seat_9.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 10"){
			z = Seat_10;
			localStorage.seat = this.name;
			localStorage.class = Seat_10.Class;
			localStorage.row = Seat_10.Row;
			localStorage.airfare = Seat_10.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 11"){
			z = Seat_11;
			localStorage.seat = this.name;
			localStorage.class = Seat_11.Class;
			localStorage.row = Seat_11.Row;
			localStorage.airfare = Seat_11.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 12"){
			z = Seat_12;
			localStorage.seat = this.name;
			localStorage.class = Seat_12.Class;
			localStorage.row = Seat_12.Row;
			localStorage.airfare = Seat_12.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 13"){
			z = Seat_13;
			localStorage.seat = this.name;
			localStorage.class = Seat_13.Class;
			localStorage.row = Seat_13.Row;
			localStorage.airfare = Seat_13.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 14"){
			z = Seat_14;
			localStorage.seat = this.name;
			localStorage.class = Seat_14.Class;
			localStorage.row = Seat_14.Row;
			localStorage.airfare = Seat_14.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 15"){
			z = Seat_15;
			localStorage.seat = this.name;
			localStorage.class = Seat_15.Class;
			localStorage.row = Seat_15.Row;
			localStorage.airfare = Seat_15.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 16"){
			z = Seat_16;
			localStorage.seat = this.name;
			localStorage.class = Seat_16.Class;
			localStorage.row = Seat_16.Row;
			localStorage.airfare = Seat_16.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 17"){
			z = Seat_17;
			localStorage.seat = this.name;
			localStorage.class = Seat_17.Class;
			localStorage.row = Seat_17.Row;
			localStorage.airfare = Seat_17.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 18"){
			z = Seat_18;
			localStorage.seat = this.name;
			localStorage.class = Seat_18.Class;
			localStorage.row = Seat_18.Row;
			localStorage.airfare = Seat_18.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 19"){
			z = Seat_19;
			localStorage.seat = this.name;
			localStorage.class = Seat_19.Class;
			localStorage.row = Seat_19.Row;
			localStorage.airfare = Seat_19.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 20"){
			z = Seat_20;
			localStorage.seat = this.name;
			localStorage.class = Seat_20.Class;
			localStorage.row = Seat_20.Row;
			localStorage.airfare = Seat_20.Airfare;
			alert(z.Available + " This seat has already been purchased and is unavailable.");
			seat_loop();	  
		} else if(this.name == "Seat 21"){
			z = Seat_21;
			localStorage.seat = this.name;
			localStorage.class = Seat_21.Class;
			localStorage.row = Seat_21.Row;
			localStorage.airfare = Seat_21.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 22"){
			z = Seat_22;
			localStorage.seat = this.name;
			localStorage.class = Seat_22.Class;
			localStorage.row = Seat_22.Row;
			localStorage.airfare = Seat_22.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 23"){
			z = Seat_23;
			localStorage.seat = this.name;
			localStorage.class = Seat_23.Class;
			localStorage.row = Seat_23.Row;
			localStorage.airfare = Seat_23.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 24"){
			z = Seat_24;
			localStorage.seat = this.name;
			localStorage.class = Seat_24.Class;
			localStorage.row = Seat_24.Row;
			localStorage.airfare = Seat_24.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 25"){
			z = Seat_25;
			localStorage.seat = this.name;
			localStorage.class = Seat_25.Class;
			localStorage.row = Seat_25.Row;
			localStorage.airfare = Seat_25.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 26"){
			z = Seat_26;
			localStorage.seat = this.name;
			localStorage.class = Seat_26.Class;
			localStorage.row = Seat_26.Row;
			localStorage.airfare = Seat_26.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 27"){
			z = Seat_27;
			localStorage.seat = this.name;
			localStorage.class = Seat_27.Class;
			localStorage.row = Seat_27.Row;
			localStorage.airfare = Seat_27.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 28"){
			z = Seat_28;
			localStorage.seat = this.name;
			localStorage.class = Seat_28.Class;
			localStorage.row = Seat_28.Row;
			localStorage.airfare = Seat_28.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 29"){
			z = Seat_29;
			localStorage.seat = this.name;
			localStorage.class = Seat_29.Class;
			localStorage.row = Seat_29.Row;
			localStorage.airfare = Seat_29.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 30"){
			z = Seat_30;
			localStorage.seat = this.name;
			localStorage.class = Seat_30.Class;
			localStorage.row = Seat_30.Row;
			localStorage.airfare = Seat_30.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 31"){
			z = Seat_31;
			localStorage.seat = this.name;
			localStorage.class = Seat_31.Class;
			localStorage.row = Seat_31.Row;
			localStorage.airfare = Seat_31.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 32"){
			z = Seat_32;
			localStorage.seat = this.name;
			localStorage.class = Seat_32.Class;
			localStorage.row = Seat_32.Row;
			localStorage.airfare = Seat_32.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 33"){
			z = Seat_33;
			localStorage.seat = this.name;
			localStorage.class = Seat_33.Class;
			localStorage.row = Seat_33.Row;
			localStorage.airfare = Seat_33.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 34"){
			z = Seat_34;
			localStorage.seat = this.name;
			localStorage.class = Seat_34.Class;
			localStorage.row = Seat_34.Row;
			localStorage.airfare = Seat_34.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 35"){
			z = Seat_35;
			localStorage.seat = this.name;
			localStorage.class = Seat_35.Class;
			localStorage.row = Seat_35.Row;
			localStorage.airfare = Seat_35.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 36"){
			z = Seat_36;
			localStorage.seat = this.name;
			localStorage.class = Seat_36.Class;
			localStorage.row = Seat_36.Row;
			localStorage.airfare = Seat_36.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 37"){
			z = Seat_37;
			localStorage.seat = this.name;
			localStorage.class = Seat_37.Class;
			localStorage.row = Seat_37.Row;
			localStorage.airfare = Seat_37.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 38"){
			z = Seat_38;
			localStorage.seat = this.name;
			localStorage.class = Seat_38.Class;
			localStorage.row = Seat_38.Row;
			localStorage.airfare = Seat_38.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 39"){
			z = Seat_39;
			localStorage.seat = this.name;
			localStorage.class = Seat_39.Class;
			localStorage.row = Seat_39.Row;
			localStorage.airfare = Seat_39.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 40"){
			z = Seat_40;
			localStorage.seat = this.name;
			localStorage.class = Seat_40.Class;
			localStorage.row = Seat_40.Row;
			localStorage.airfare = Seat_40.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 41"){
			z = Seat_41;
			localStorage.seat = this.name;
			localStorage.class = Seat_41.Class;
			localStorage.row = Seat_41.Row;
			localStorage.airfare = Seat_41.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 42"){
			z = Seat_42;
			localStorage.seat = this.name;
			localStorage.class = Seat_42.Class;
			localStorage.row = Seat_42.Row;
			localStorage.airfare = Seat_42.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 43"){
			z = Seat_43;
			localStorage.seat = this.name;
			localStorage.class = Seat_43.Class;
			localStorage.row = Seat_43.Row;
			localStorage.airfare = Seat_43.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 44"){
			z = Seat_44;
			localStorage.seat = this.name;
			localStorage.class = Seat_44.Class;
			localStorage.row = Seat_44.Row;
			localStorage.airfare = Seat_44.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 45"){
			z = Seat_45;
			localStorage.seat = this.name;
			localStorage.class = Seat_45.Class;
			localStorage.row = Seat_45.Row;
			localStorage.airfare = Seat_45.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 46"){
			z = Seat_46;
			localStorage.seat = this.name;
			localStorage.class = Seat_46.Class;
			localStorage.row = Seat_46.Row;
			localStorage.airfare = Seat_46.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 47"){
			z = Seat_47;
			localStorage.seat = this.name;
			localStorage.class = Seat_47.Class;
			localStorage.row = Seat_47.Row;
			localStorage.airfare = Seat_47.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 48"){
			z = Seat_48;
			localStorage.seat = this.name;
			localStorage.class = Seat_48.Class;
			localStorage.row = Seat_48.Row;
			localStorage.airfare = Seat_48.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 49"){
			z = Seat_49;
			localStorage.seat = this.name;
			localStorage.class = Seat_49.Class;
			localStorage.row = Seat_49.Row;
			localStorage.airfare = Seat_49.Airfare;
			seat_loop();	  
		} else if(this.name == "Seat 50"){
			z = Seat_50;
			localStorage.seat = this.name;
			localStorage.class = Seat_50.Class;
			localStorage.row = Seat_50.Row;
			localStorage.airfare = Seat_50.Airfare;
			seat_loop();	  
		}

		function seat_loop(){
			for(var key in z){
				display_area.innerHTML += key + ": " + z[key] + "<br/>";
			}
		}
	}
	seat_div.appendChild(seat);
//----------------------------------------- DATA COLLECTION & FORM BUTTON FUNCTION ---------------------------------------\\
		seat.onclick = function(){
		seat_bg.style.display = "none";
    	form_head.style.display = "block";
    	form_div.style.display = "block";
		}
	}
}
//--------------------- praise Jesus all day, all night----------------------------------------------------------------------------\\
//---------------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------FORM_HEADER--------------------------------------------------//
var form_head = document.createElement('h1');
form_head.id = "formHeader";
form_head.innerHTML = "Customer Data Form";
document.body.appendChild(form_head);
//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------------CUSTOMER_DATA_FORM_SECTION---------------------------------//
var form_div = document.createElement('div');
form_div.id = "formDiv";
document.body.appendChild(form_div);
//-----------------------------------FORM---------------------------------------------------// 
var data_form = document.createElement('form');
form_div.appendChild(data_form);
//-----------------------------------FIELDSETS---------------------------------------------//
//--NAME--//
var name_fieldset = document.createElement('fieldset');
name_fieldset.id = "nameFieldset";
data_form.appendChild(name_fieldset);
name_fieldset.innerHTML = "Customer Identification<br/>";
//--ADDRESS--//
var address_fieldset = document.createElement('fieldset');
address_fieldset.id = "addressFieldset";
data_form.appendChild(address_fieldset);
address_fieldset.innerHTML = "Customer Address<br/>";
//--RADIO--//
var radio_fieldset = document.createElement('fieldset');
radio_fieldset.id = "radioFieldset";
data_form.appendChild(radio_fieldset);
radio_fieldset.innerHTML = "Payment Option<br/>";
//--BANK--//
var bank_fieldset = document.createElement('fieldset');
bank_fieldset.id = "bankFieldset";
data_form.appendChild(bank_fieldset);
bank_fieldset.innerHTML = "Banking Information<br/>";
//--CREDIT_CARD--//
var cc_fieldset = document.createElement('fieldset');
cc_fieldset.id = "ccFieldset";
data_form.appendChild(cc_fieldset);
cc_fieldset.innerHTML = "Credit Card Information<br/>";
//-----------------------------------FIELDS------------------------------------------------//
//------------------CUSTOMER_CONTACT_INFO---//
//--FIRST_NAME--//
//-------------//
name_fieldset.innerHTML += "First Name: ";
var fname_field = document.createElement('input');
fname_field.type = "text";
fname_field.id = "fName";
fname_field.className = "form_fields";
name_fieldset.appendChild(fname_field);
name_fieldset.innerHTML += "<br/>";
//--LAST_NAME--//
//------------//
name_fieldset.innerHTML += "Last Name: ";
var lname_field = document.createElement('input');
lname_field.type = "text";
lname_field.id = 'lName';
lname_field.className = "form_fields";
name_fieldset.appendChild(lname_field);
name_fieldset.innerHTML += "<br/>";
//--E_MAIL--//
//---------//
name_fieldset.innerHTML += "e-mail: ";
var email_field = document.createElement('input');
email_field.type = "email";
email_field.id = "eMail";
email_field.className = "form_fields";
name_fieldset.appendChild(email_field);
name_fieldset.innerHTML += "<br/>";
//--PHONE--//
//--------//
name_fieldset.innerHTML += "Telephone: ";
var phone_field = document.createElement('input');
phone_field.type = "tel";
phone_field.id = "phonex";
phone_field.className = "form_fields";
name_fieldset.appendChild(phone_field);
name_fieldset.innerHTML += "<br/>";
//------------------CUSTOMER_ADDRESS---//
//--STREET--//
//---------//
address_fieldset.innerHTML += "Street: ";
var street_field = document.createElement('input');
street_field.type = "text";
street_field.id = "streetx";
street_field.className = "form_fields";
address_fieldset.appendChild(street_field);
address_fieldset.innerHTML += "<br/>";
//--CITY--//
//-------//
address_fieldset.innerHTML += "City: ";
var city_field = document.createElement('input');
city_field.type = "text";
city_field.id = "cityx";
city_field.className = "form_fields";
address_fieldset.appendChild(city_field);
address_fieldset.innerHTML += "<br/>";
//--STATE--//
//--------//
address_fieldset.innerHTML += "State: ";
var state_field = document.createElement('input');
state_field.type = "text";
state_field.id = "statex";
state_field.className = "form_fields";
address_fieldset.appendChild(state_field);
address_fieldset.innerHTML += "<br/>";
//--ZIPCODE--//
//----------//
address_fieldset.innerHTML += "Zipcode: ";
var zipcode_field = document.createElement('input');
zipcode_field.type = "text";
zipcode_field.id = "zipcodex";
zipcode_field.className = "form_fields";
address_fieldset.appendChild(zipcode_field);
address_fieldset.innerHTML += "<br/>";
//--RADIO_BUTTONS--------//
//----------------------//
var check_radio = document.createElement('input');
var card_radio = document.createElement('input');
check_radio.type = 'radio';
card_radio.type = 'radio';
check_radio.name = 'payment_type';
card_radio.name = 'payment_type';
check_radio.id = "check_r";
card_radio.id = "card_r";
radio_fieldset.innerHTML += "e-check ";
radio_fieldset.appendChild(check_radio);
radio_fieldset.innerHTML += "Credit Card ";
radio_fieldset.appendChild(card_radio);
//---------------------------------------------------------------------------------------\\
//----------------------------------------------------RADIO_FUNCTION---------------------//
radio_fieldset.onchange = function radio_logic(){
	if(check_r.checked == true){
		bank_fieldset.style.display = "block";
		cc_fieldset.style.display = "none";
	} else if(card_r.checked == true){
		cc_fieldset.style.display = "block";
		bank_fieldset.style.display = "none";
	}
}
//-----------------------------//
//------------------BANKING---//
//--BANK_NAME--//
//------------//
bank_fieldset.innerHTML += "Bank Name: ";
var bank_field = document.createElement('input');
bank_field.type = "text";
bank_field.id = "bankx";
bank_field.className = "form_fields";
bank_fieldset.appendChild(bank_field);
bank_fieldset.innerHTML += "<br/>";
//--ROUTING_NUMBER--//
//-----------------//
bank_fieldset.innerHTML += "Routing Number: ";
var routing_field = document.createElement('input');
routing_field.type = "text";
routing_field.id = "routingx";
routing_field.className = "form_fields";
bank_fieldset.appendChild(routing_field);
bank_fieldset.innerHTML += "<br/>";
//--ACCOUNT_NUMBER--//
//-----------------//
bank_fieldset.innerHTML += "Account Number: ";
var account_field = document.createElement('input');
account_field.type = "text";
account_field.id = "accountx";
account_field.className = "form_fields";
bank_fieldset.appendChild(account_field);
bank_fieldset.innerHTML += "<br/>";
//------------------CREDIT_CARD---//
//--CARD_TYPE--//
//------------//
cc_fieldset.innerHTML += "Card Type: ";
var type_field = document.createElement('input');
type_field.type = "text";
type_field.id = "ccType";
type_field.className = "form_fields";
cc_fieldset.appendChild(type_field);
cc_fieldset.innerHTML += "<br/>";
//--CARD_NUMBER--//
//--------------//
cc_fieldset.innerHTML += "Card Number: ";
var card_num_field = document.createElement('input');
card_num_field.type = "text";
card_num_field.id = "ccNum";
card_num_field.className = "form_fields";
cc_fieldset.appendChild(card_num_field);
cc_fieldset.innerHTML += "<br/>";
//--EXPIRATION_DATE--//
//------------------//
cc_fieldset.innerHTML += "Expiration Date: ";
var edate_field = document.createElement('input');
edate_field.type = "month";
edate_field.id = "ccDate";
edate_field.className = "form_fields";
cc_fieldset.appendChild(edate_field);
cc_fieldset.innerHTML += "<br/>";

//--------------------------------------------------------------------------------------------\\
//----------------------------------------------------FORM_SUBMIT_BUTTON----------------------//
var submit_button = document.createElement('input');
submit_button.type = "button";
submit_button.value = "Check Out";
submit_button.className = "button_class";
submit_button.id = "submitButton";
submit_button.onclick = check_data;
data_form.appendChild(submit_button);

//------------------------------------------------------------------------------------------------------\\
//--------------------FORM_FUNCTION---------------------------------------------------------------------//
function check_data(){
    
	if(fName.value == ""){
		alert("Enter First Name");
	} else if(lName.value == ""){
		alert("Enter Last Name");
	} else if(eMail.value == ""){
		alert("Enter email Address");
	} else if(phonex.value == ""){
		alert("Enter telephone number");
	} else if(streetx.value == ""){
		alert("Enter street address");
	} else if(cityx.value == ""){
		alert("Enter city");
	} else if(statex.value == ""){
		alert("Enter state");
	} else if(zipcodex.value == ""){
		alert("Enter zipcode");
	} else if(check_r.checked == false && card_r.checked == false){
		alert("Select a payment type");
	} else if(check_r.checked == true){
		
		if(bankx.value == ""){
		alert("Enter your bank's name");
		} else if(routingx.value == ""){
		alert("Enter bank routing number");
		} else if(accountx.value == ""){
		alert("Enter bank account number");
		} else {
		var fv_fname = fName.value;
		var fv_lname = lName.value;
		var fv_email = eMail.value;
		var fv_phone = phonex.value;
		localStorage.setItem("f_name", fv_fname);
		localStorage.setItem("l_name", fv_lname);
		localStorage.setItem("e_mail", fv_email);
		localStorage.setItem("phone_number", fv_phone);
		customer_purchase_data.push(localStorage.f_name);
		customer_purchase_data.push(localStorage.l_name);
		customer_purchase_data.push(localStorage.e_mail);
		customer_purchase_data.push(localStorage.phone_number);
		var fv_street = streetx.value;
		var fv_city = cityx.value;
		var fv_state = statex.value;
		var fv_zipcode = zipcodex.value;
		localStorage.setItem("street", fv_street);
		localStorage.setItem("city", fv_city);
		localStorage.setItem("state", fv_state);
		localStorage.setItem("zipcode", fv_zipcode);
		customer_purchase_data.push(localStorage.street);
		customer_purchase_data.push(localStorage.city);
		customer_purchase_data.push(localStorage.state);
		customer_purchase_data.push(localStorage.zipcode);
		var fv_bank = bankx.value;
		var fv_routing = routingx.value;
		var fv_account = accountx.value;
		localStorage.setItem("bank_name", fv_bank);
		localStorage.setItem("routing_num", fv_routing);
		localStorage.setItem("account_num", fv_account);
		customer_purchase_data.push(localStorage.bank_name);
		customer_purchase_data.push(localStorage.routing_num);
		customer_purchase_data.push(localStorage.account_num);
		form_head.style.display = "none";
		form_div.style.display = "none";
		preview.style.display = "block";
		ticket.style.display = "block";
		window.print();
		}
	} else if(card_r.checked == true){
		
		if(ccType.value == ""){
		alert("Enter credit card type");
		} else if(ccNum.value == ""){
		alert("Enter credit card number");
		} else if(ccDate.value == ""){
		alert("Select your credit card's expiration date");
		} else {
			var fv_fname = fName.value;
			var fv_lname = lName.value;
			var fv_email = eMail.value;
			var fv_phone = phonex.value;
			localStorage.setItem("f_name", fv_fname);
			localStorage.setItem("l_name", fv_lname);
			localStorage.setItem("e_mail", fv_email);
			localStorage.setItem("phone_number", fv_phone);
			customer_purchase_data.push(localStorage.f_name);
			customer_purchase_data.push(localStorage.l_name);
			customer_purchase_data.push(localStorage.e_mail);
			customer_purchase_data.push(localStorage.phone_number);
			var fv_street = streetx.value;
			var fv_city = cityx.value;
			var fv_state = statex.value;
			var fv_zipcode = zipcodex.value;
			localStorage.setItem("street", fv_street);
			localStorage.setItem("city", fv_city);
			localStorage.setItem("state", fv_state);
			localStorage.setItem("zipcode", fv_zipcode);
			customer_purchase_data.push(localStorage.street);
			customer_purchase_data.push(localStorage.city);
			customer_purchase_data.push(localStorage.state);
			customer_purchase_data.push(localStorage.zipcode);
			var fv_cc_type = ccType.value;
			var fv_cc_num = ccNum.value;
			var fv_cc_date = ccDate.value;
			localStorage.setItem("cc_type", fv_cc_type);
			localStorage.setItem("cc_num", fv_cc_num);
			localStorage.setItem("cce_date", fv_cc_date);
			customer_purchase_data.push(localStorage.cc_type);
			customer_purchase_data.push(localStorage.cc_num);
			customer_purchase_data.push(localStorage.cce_date);
			form_head.style.display = "none";
			form_div.style.display = "none";
			preview.style.display = "block";
			window.print();
		}
	} else {
//-------------------------------------------------------E_TICKET_DISPLAY--------------------------------//
		preview.innerHTML = display_test();
		
//-------------------------------------------------------------------------------------------------------//
//		var fv_fname = fName.value;
//		var fv_lname = lName.value;
//		var fv_email = eMail.value;
//		var fv_phone = phonex.value;
//		localStorage.setItem("f_name", fv_fname);
//		localStorage.setItem("l_name", fv_lname);
//		localStorage.setItem("e_mail", fv_email);
//		localStorage.setItem("phone_number", fv_phone);
//		var fv_street = streetx.value;
//		var fv_city = cityx.value;
//		var fv_state = statex.value;
//		var fv_zipcode = zipcodex.value;
//		localStorage.setItem("street", fv_street);
//		localStorage.setItem("city", fv_city);
//		localStorage.setItem("state", fv_state);
//		localStorage.setItem("zipcode", fv_zipcode);
	}
}
//---------------------------------------------------------------------------------------\\
//-----------------------------------TICKET_PREVIEW--------------------------------------//
var preview = document.createElement('p');
document.body.appendChild(preview);

//-----------------------------------------------------------------------------------------------------\\
var customer_purchase_data = [
	localStorage.f_name,
	localStorage.l_name,
	localStorage.e_mail,
	localStorage.phone_number,
	localStorage.street,
	localStorage.city,
	localStorage.state,
	localStorage.zipcode,
	localStorage.cc_type,
	localStorage.cc_num,
	localStorage.cce_date
];

for(var i=0; i < customer_purchase_data.length; i++){
	document.write(customer_purchase_data[i] + "<br/>");
};




