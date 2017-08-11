import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	//document.body.style.height = "400px";

	@HostListener('window:scroll', ['$event']) onScrollEvent($event){
		let date = Date();
		//console.log($event);

		console.log("AppComponent:document.documentElement.clientHeight: " + document.documentElement.clientHeight);
		console.log("AppComponent:onScrollEvent:scrolling at " + date + ". document.documentElement.scrollTop: " + document.documentElement.scrollTop + ", window.pageYOffset: " + window.pageYOffset + ", document.body.scrollTop: " + document.body.scrollTop);
		let navbar = document.getElementById("myNavbar");
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
	    } else {
	        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
	    }
	} 

/*	@HostListener('scroll', ['$event'])
	onScroll(event) {
 		console.log("AppComponent:onScroll:event.id: " + event.id);
	}
/*
	window.onscroll = function() { myFunction() };

	function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}
*/
	ngOnInit() {
		let imageHeight = document.documentElement.clientHeight;
		let imageTarget = document.getElementById("home");
		imageTarget.style.height = "" + imageTarget + "px"; //imageHeight;
		imageTarget.style.height = "621px"; 
		console.log("AppComponent:ngOnInit:imageTarget.style.height set to " + imageTarget.style.height );
	}

	toggleMenu() {
		let x = document.getElementById("navDemo"); 
	    if (x.className.indexOf("w3-show") == -1) {
	        x.className += " w3-show";
	    } else {
	        x.className = x.className.replace(" w3-show", "");
	    }
	}

}
