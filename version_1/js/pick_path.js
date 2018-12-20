document.addEventListener("load", pop_loc);
document.addEventListener("load", pop_dest);

//----------------------------------------------------------POPULATE-FROM-LOCATIONS---------------//
	
function pop_all(){
	var l = document.getElementById("select_loc");
	var d = document.getElementById("select_dest");
	pop_loc();
	pop_dest();
}

//--------------------------------------------------------------POPULATE-LOCATIONS---------------//
function pop_loc() {
	var l = document.getElementById("select_loc");
	var loca = document.getElementById("loca");
	var random = Math.floor((Math.random() * 999) + 1);
	
	if(l.value == "jax"){
		loca.innerHTML = "FROM: Jacksonville";
		localStorage.setItem("location", "Jacksonville");
		localStorage.setItem("departure", "1:05pm");
		localStorage.setItem("flight", random);
		localStorage.setItem("gate", "32");
		
	} else if(l.value == "atlanta"){
		loca.innerHTML = "FROM: Atlanta";
		localStorage.setItem("location", "Atlanta");
		localStorage.setItem("departure", "2:10pm");
		localStorage.setItem("flight", random);
		localStorage.setItem("gate", "44");
		
	} else if(l.value == "new_york"){
		loca.innerHTML = "FROM: New York";
		localStorage.setItem("location", "New York");
		localStorage.setItem("departure", "3:20pm");
		localStorage.setItem("flight", random);
		localStorage.setItem("gate", "66");
		
	} else if(l.value == "nash"){
		loca.innerHTML = "FROM: Nashville";
		localStorage.setItem("location", "Nashville");
		localStorage.setItem("departure", "4:30pm");
		localStorage.setItem("flight", random);
		localStorage.setItem("gate", "39");
	}	
}
//--------------------------------------------------------------POPULATE-DESTINATIONS---------------//
function pop_dest() {
	var d = document.getElementById("select_dest");
	var dest = document.getElementById("dest");
	
	if(d.value == "jax"){
		dest.innerHTML = "TO: Jacksonville";
		localStorage.setItem("destination", "Jacksonville");
		localStorage.setItem("arrival", "7:00pm");
		
	} else if(d.value == "atlanta"){
		dest.innerHTML = "TO: Atlanta";
		localStorage.setItem("destination", "Atlanta");
		localStorage.setItem("arrival", "7:00pm");
		
	} else if(d.value == "new_york"){
		dest.innerHTML = "TO: New York";
		localStorage.setItem("destination", "New York");
		localStorage.setItem("arrival", "7:00pm");
		
	} else if(d.value == "nash"){
		dest.innerHTML = "TO: Nashville";
		localStorage.setItem("destination", "Nashville");
		localStorage.setItem("arrival", "7:00pm");
	}
}
//-----------------------------------------------------------------MEDIA-QUERRY-BY-JAVASCRIPT--------//







