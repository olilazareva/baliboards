"user strict";


function closeBottom(){
	y=document.getElementById('bottom');
	y.style.display="none";
	z=document.getElementById("b");
	z.style.display="block";
}



function openBottom(){
	y=document.getElementById('bottom');
	y.style.display="block";
	x=document.getElementById('side');
	x.style.display="none";
	z=document.getElementById("b");
	z.style.display="none";
	o=document.getElementById('s');
	o.style.display="block";
}

function closeSide(){
	x=document.getElementById('side');
	x.style.display="none";
	o=document.getElementById('s');
	o.style.display="block";


}

function openSide(){
	x=document.getElementById('side');
	x.style.display="block";
	y=document.getElementById('bottom');
	y.style.display="none";
	o=document.getElementById('s');
	o.style.display="none";
	z=document.getElementById("b");
	z.style.display="block";

}

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $("#side"); 
    var sidebutton = $('#s');
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.hide() 
      && sidebutton.show();
    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var divb = $("#bottom"); 
    var bottombutton = $('#b');
    if (!divb.is(e.target) 
        && divb.has(e.target).length === 0) { 
      divb.hide() 
      && bottombutton.show();
    }
  });
});













