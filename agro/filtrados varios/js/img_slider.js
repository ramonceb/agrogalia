var marcas_agrogalia = ["https://drive.google.com/uc?export=view&id=1khq5bOz5a9Elgu81UGHRihUdGzY7QVAh","https://drive.google.com/uc?export=view&id=1vU04ZiZnBy2f4x90cTu68poa41YB_qFs"
,"https://drive.google.com/uc?export=view&id=1j3dLknw5pIglEPWgW1qK2P-wBfsGt9gp"
,"https://drive.google.com/uc?export=view&id=1-hA-isp18-GTHFlbtdP9_uHiC3hG2IJ7"
,"https://drive.google.com/uc?export=view&id=1l7DhtHn6REGYL1MN83pkU3dCy56kJKW3"
,"https://drive.google.com/uc?export=view&id=1oYREoQrxPcA_sAwi_ddLNXXh6hmEMzjp"
,"https://drive.google.com/uc?export=view&id=1vfi-A77zLIQEkogbc3-OJIeTjMwecBWA"
,"https://drive.google.com/uc?export=view&id=1jw5b5Lzp5RPxsehoQoUOup7L2hJ2fSQq"
,"https://drive.google.com/uc?export=view&id=1H7WPzl2Dkd4gwiR9SN5940_xM2JEasPi"
,"https://drive.google.com/uc?export=view&id=13ymwLvL0MNzdk78r3HxrOhQuTBPiOSQF"
,"https://drive.google.com/uc?export=view&id=1leIwO0TLbH_hWHI3Hv953ScScB2GK7a3"
,"https://drive.google.com/uc?export=view&id=1wCgtY5S4QRObwPPibsXHpbpRfUoOZ9GM"
,"https://drive.google.com/uc?export=view&id=1HdK2haO2dNSaXUhvVodTg6n81MyONc58"
,"https://drive.google.com/uc?export=view&id=1ri7XpMEn5JETqceUWqYUbAYv6fhLfyZp"
,"https://drive.google.com/uc?export=view&id=17dOSxd7AsoZYvOf0V74hP53oNscSQun5"
,"https://drive.google.com/uc?export=view&id=1SInFOh4OTA273cwAjekKXQr0azn6NTle"
,"https://drive.google.com/uc?export=view&id=1oebGyLhHA_ul5bk-smiu3ftrHwBfvpKt"
,"https://drive.google.com/uc?export=view&id=11b3_nl0jJtKr0m5mHn0hDMFB1bCkUJ7Q"
,"https://drive.google.com/uc?export=view&id=139k9C75Cf0fjQBoVl2h5OfK6BAw_D2h8"
,"https://drive.google.com/uc?export=view&id=1bR0Kb6no3MQ0jR-Q2E0MALgkMzmbaaNR"
,"https://drive.google.com/uc?export=view&id=1j9sLsRWBJZdyBFmGXHe_-U80lYFmKbJp"
,"https://drive.google.com/uc?export=view&id=1_YKFk18vQgGoqDDU1ulJlKULTWiEAKH2"]
;

$(document).ready(function() {
	var total=marcas_agrogalia.length;
	var pos=1, resto=0;
	var dir="";
	var x = document.getElementsByClassName("item");
	// x[0].getElementById("activo").src=marcas_agrogalia[0];
	// x[1].getElementById("menos").src=marcas_agrogalia[1];
	// x[2].getElementById("mas").src=marcas_agrogalia[2];
		 var img1=document.getElementById("menos"),
	  img2=document.getElementById("activo"),
	  img3=document.getElementById("mas");
	  img1.setAttribute("src",marcas_agrogalia[0]);
	  
	img2.setAttribute("src",marcas_agrogalia[1]);
	img3.setAttribute("src",marcas_agrogalia[2]);
	$('#myCarouselAgro').on('slide.bs.carousel', function() {
   ////console.log(pos+"av");
    if(pos<total){
	pos++;
	}
	if(pos==total){
	pos=0;
	}
	 ////console.log(pos+"av");
	 mostrar(pos,"av");
});
	$('#back').click(function() {
atras(pos);
});	

/*click*/

});/*fin ready*/
	$('#next').click(function() {
	if(pos<total){
	pos++;
	}
	if(pos==total){
	pos=0;
	}
	 mostrar(pos,"av");
});
var init0=0,init1=1,init2=2, max=marcas_agrogalia.length;
function mostrar(pos,dir){
	 ////console.log(pos);
	 	 var it = document.getElementsByClassName("item");
		 	 var img1=document.getElementById("menos"),
	  img2=document.getElementById("activo"),
	  img3=document.getElementById("mas");
		 for(var j=0; j<it.length;j++){

			 	 if(it[j].className=="item active" && j==2){
					 if(init0<max && init1<max){
		 	 ////console.log(j+" active"+ init0+"=init0 "+init1+"=init1");
			 if(init0+3<max){
             img1.setAttribute("src",marcas_agrogalia[init0+3]);
			  init0=init0+3;}
		 if(init1+3<max){
		 img2.setAttribute("src",marcas_agrogalia[init1+3]); 
		  init1=init1+3;
		 }
			
			
			 
			 if(init0 >max ){
				 	 //console.log("init0 >ma "+init0);
				 init0=0;
			 }
			 if(init1 >max ){
				 	 //console.log("init1 >ma "+init1);
				  init0=0;
				 init1=1;
			 }
					 }else{
						   img1.setAttribute("src",marcas_agrogalia[0]);
	  
	img2.setAttribute("src",marcas_agrogalia[1]);
		 init0=0;
			 init1=1;
				 }}

	  else if(it[j].className=="item active" && j==0 ){
		 	 ////console.log(j+" active");
 if(init2<max && init2+3<max){     
				
			 img3.setAttribute("src",marcas_agrogalia[init2+3]); 
			 	 //console.log("----else if "+marcas_agrogalia[init2+3]);
			 init2=init2+3;
			 if(init2 >max ){
				 //console.log("init2 >ma "+init2);
				 init2=2
			 }

	 }else{
		 img3.setAttribute("src",marcas_agrogalia[2]); 
			 init2=2;
			 //console.log("----else "+img3.src);
	 }
		 }

		 }
}
function atras(pos){
	
 var it = document.getElementsByClassName("item");
		 	 var img1=document.getElementById("menos"),
	  img2=document.getElementById("activo"),
	  img3=document.getElementById("mas");
		 for(var j=0; j<it.length;j++){
	         if(it[j].className=="item active" && j==2){
	    	   if(init0<max && init1<max && pos>0){
				   init0=pos-2;
			     img1.setAttribute("src",marcas_agrogalia[init0]);
				 init1=pos-1;
			     img2.setAttribute("src",marcas_agrogalia[init1]); 
			     }else if (init0<max && init1<max && pos==0) {
					 pos=max-1;
                  init0=pos;
			     img1.setAttribute("src",marcas_agrogalia[init0]);
				 init1=pos-1;
			     img2.setAttribute("src",marcas_agrogalia[init1]); 
		      }else {
					 pos=max-1;
                 img1.setAttribute("src",marcas_agrogalia[0]);
                 img2.setAttribute("src",marcas_agrogalia[1]);
		         init0=0;
			     init1=1;
		      }
		    }
			else if(it[j].className=="item active" && j==0 ){
		 	 ////console.log(j+" active");
				if(init2<max && pos>2){            
				  img3.setAttribute("src",marcas_agrogalia[pos]); 
			      init2=init2-3;

	           }	if(init2<max && pos==2){    
			     init2=max;
				  img3.setAttribute("src",marcas_agrogalia[init2]); 
			      init2=max-3;

	           }else{
				    init2=pos;  
		          img3.setAttribute("src",marcas_agrogalia[init2-2]); 
			      init2=init2-2;
	           }
		    }
		 }
		 
}