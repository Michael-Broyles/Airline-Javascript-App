//alert("info_form.js file loaded");
/*-------------------------------------------------------------------------------------------------------------------------------*/
function do_right(da_fname, da_lname, da_phone, da_city, da_zipcode, da_routing_num, da_account_num, da_card_num){
	var da_fname = document.getElementById("f_name_field");
	var da_lname = document.getElementById("l_name_field");
	var da_phone = document.getElementById("phone_field");
	/*---------//-----NOT DONE YET---------//---------//---------//-------//-*/
	var da_city = document.getElementById("city_field");
	var da_zipcode = document.getElementById("zipcode_field");
	var da_routing_num = document.getElementById("routing_number_field");
	var da_account_num = document.getElementById("account_number_field");
	var da_card_num = document.getElementById("card_number_field");
	/*---------//-----NOT DONE YET---------//---------//---------//-------//-*/
	var regex_no_numbers = /[^a-z]/gi;
	var regex_no_letters = /[^0-9]/gi;
	da_fname.value = da_fname.value.replace(regex_no_numbers, "");
	da_lname.value = da_lname.value.replace(regex_no_numbers, "");
	da_phone.value = da_phone.value.replace(regex_no_letters, "");
	da_city.value = da_city.value.replace(regex_no_numbers, "");
	da_zipcode.value = da_zipcode.value.replace(regex_no_letters, "");
	da_routing_num.value = da_routing_num.value.replace(regex_no_letters, "");
	da_account_num.value = da_account_num.value.replace(regex_no_letters, "");
	da_card_num.value = da_card_num.value.replace(regex_no_letters, "");
	}
//--------------------------------------------------------------------------------------------------------------------//
function payment_type(){
	//var holder = document.getElementById("radio_holder");
	var check_radio = document.getElementById("check");
	var credit_radio = document.getElementById("card");
	var check_fieldset = document.getElementById("echeck_info_fieldset");
	var credit_fieldset = document.getElementById("credit_card_info_fieldset");
	
	if(check_radio.checked == true){
		alert("Thank You. \n You have selected an e-check as Payment. \n If you do not want this method as payment,\n you may select a different option at anytime.");
		credit_fieldset.style.display = "none";
		check_fieldset.style.display = "block";
		
	} else if(credit_radio.checked == true){
		alert("Thank You. \n You have selected a Credit Card as Payment. \n If you do not want this method as payment,\n you may select a different option at anytime.");
		check_fieldset.style.display = "none";
		credit_fieldset.style.display = "block";
		}
	}
//-----------------------------------------------------------------------------------------------------------------//
function check_data(){
	var first_name = document.getElementById("f_name_field");
	var last_name = document.getElementById("l_name_field");
	var email = document.getElementById("email_field");
	var phone = document.getElementById("phone_field");
	
	var street = document.getElementById("street_field");
	var city = document.getElementById("city_field");
	var s = document.getElementById("select_state_list");
	var zipcode = document.getElementById("zipcode_field");
	
	var check_radio = document.getElementById("check");
	var credit_radio = document.getElementById("card");
	
	var bank_name = document.getElementById("bank_name_field");
	var routing_num = document.getElementById("routing_number_field");
	var account_num = document.getElementById("account_number_field");
	
	var card_type = document.getElementById("select_cc_list");
	var card_num = document.getElementById("card_number_field");
	var card_expire_date = document.getElementById("expiration_date_field");
	
	var fname_fv = first_name.value;
	var lname_fv = last_name.value;
	var email_fv = email.value;
	var phone_fv = phone.value;
	var street_fv = street.value;
	var city_fv = city.value;
	var state_fv = s.value;
	var zipcode_fv = zipcode.value;
	
	
	if(first_name.value == "" || first_name.value == null){
		alert("Enter your FIRST NAME to continue");
		
	} else if(last_name.value == "" || last_name.value == null){
		alert("Enter your LAST NAME to continue");
		
	} else if(email.value == "" || email.value == null){
		alert("Enter your EMAIL ADDRESS to continue");
		
	} else if(phone.value == "" || phone.value == null){
		alert("Enter your CONTACT TELEPHONE to continue");
		
	} else if(street.value == "" || street.value == null){
		alert("Enter your STREET ADDRESS to continue");
		
	} else if(city.value == "" || city.value == null){
		alert("Enter your CITY to continue");
		
	} else if(s.value == ""){
		alert("Please select your STATE to continue");
		
	} else if(zipcode.value == "" || zipcode.value == null){
		alert("Enter your ZIPCODE to continue");
		
	} else if(check_radio.checked == false && credit_radio.checked == false){
		alert("Select a PAYMENT TYPE to continue");
/*-------------------------------------------------------------------------------------------------------------------------------*/		
	} else if(check_radio.checked == true){
		if(bank_name.value == ""){
			alert("Please enter your BANK's NAME to continue.");
		} else if(routing_num.value == ""){
			alert("Please enter your BANK's ROUTING NUMBER to continue.");
		} else if(account_num.value == ""){
			alert("Please enter your BANKING ACCOUNT NUMBER to continue.");
		} else {
			location.replace("../sub_pages/check_out.html");
		}
/*-------------------------------------------------------------------------------------------------------------------------------*/	
	} else if(credit_radio.checked == true){
			if(card_type.value == ""){
				alert("Please enter your CREDIT CARD TYPE to continue.");
			} else if(card_num.value == ""){
				alert("Please enter your CREDIT CARD NUMBER to continue.");
			} else if(card_expire_date.value == ""){
				alert("Please enter your CREDIT CARD EXPIRATION DATE to continue.");
			} else {
				location.replace("../sub_pages/check_out.html");
			}
/*-------------------------------------------------------------------------------------------------------------------------------*/
		} else {
		//alert(street_fv+ "\n" +city_fv+ "\n" +state_fv+ "\n" +zipcode_fv+ "\n");
		location.replace("../sub_pages/check_out.html");
	}
/*-------------------------------------------------------------------------------------------------------------------------------*/
	localStorage.setItem("f_name", fname_fv);
	localStorage.setItem("l_name", lname_fv);
	localStorage.setItem("e_mail", email_fv);
	localStorage.setItem("phone_number", phone_fv);
	localStorage.setItem("street", street_fv);
	localStorage.setItem("city", city_fv);
	localStorage.setItem("state", state_fv);
	localStorage.setItem("zipcode", zipcode_fv);
}
/*-------------------------------------------------------------------------------------------------------------------------------*/
function marquee(){
	var ticket_marquee_display = document.getElementById("ticket_marquee");

	ticket_marquee_display.innerHTML = 
		" - Flight Number: " + localStorage.flight + " - Destination: " + localStorage.location +
		" - " + localStorage.class + " Class " + " - Row: " + localStorage.row + " Seat Number: " + localStorage.seat_number +
		" - Airfare: $" + localStorage.price + " - Departure: " + localStorage.departure + " - Arrival: " + localStorage.arrival +
		" - ";
}
/*-------------------------------------------------------------------------------------------------------------------------------*/

