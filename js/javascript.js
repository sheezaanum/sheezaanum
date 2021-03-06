//Get the button
mybutton=document.getElementById('myBtn');
//When user scrolls down 20px from the top of the document, shoe the button
window.onscroll=function(){scrollFunction()};

function scrollFunction(){scrollFunction()};

function scrollFunction(){
	if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
		mybutton.style.display="block";
	}else{
		mybutton.style.display="none";
	}
}
//When the use clicks on the button,scroll to the top of the document
function topFunction(){
	document.body.scrollTop=0;//FOR SAfari
	document.documentElement.scrollTop=0;//for chrome,firefox,IE and Opera
}