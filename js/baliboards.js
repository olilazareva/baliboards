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
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("#side"); // тут указываем ID элемента
    var sidebutton = $('#s');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.hide() // скрываем его
      && sidebutton.show();
    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var divb = $("#bottom"); // тут указываем ID элемента
    var bottombutton = $('#b');
    if (!divb.is(e.target) // если клик был не по нашему блоку
        && divb.has(e.target).length === 0) { // и не по его дочерним элементам
      divb.hide() // скрываем его
      && bottombutton.show();
    }
  });
});













