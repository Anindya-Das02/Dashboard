window.onload = function(){
	var months = ['feburary','march','june','july','august','september','october','november','december'];
	
	var e = document.getElementById("select_id");
	for(let i=0;i<months.length;i++){
		var opt = document.createElement('option');
		opt.innerHTML = months[i];
		e.appendChild(opt);
	}

}

function large(ele_id){
	var e = document.getElementById(ele_id);
	e.style.height = '130px';
	e.style.border= '2px solid orange';
	e.style.backgroundColor = "#1d1138";

}

function small(ele_id){
	var e = document.getElementById(ele_id);
	e.style.height = '102px';
	e.style.border= '2px solid white';
	e.style.backgroundColor = "#110824";
}

