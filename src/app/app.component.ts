import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	windowWidth: number;
	windowHeight: number;
	imageHeight: number;
	//document.body.style.height = "400px";

	@HostListener('window:scroll', ['$event']) onScrollEvent($event){
		let date = Date();
		//console.log($event);

		// OK console.log("AppComponent:document.documentElement.clientHeight: " + document.documentElement.clientHeight);
		// OK console.log("AppComponent:onScrollEvent:scrolling at " + date + ". document.documentElement.scrollTop: " + document.documentElement.scrollTop + ", window.pageYOffset: " + window.pageYOffset + ", document.body.scrollTop: " + document.body.scrollTop);
		let navbar = document.getElementById("myNavbar");
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
	    } else {
	        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
	    }
	} 

	@HostListener('window:resize', ['$event'])
	onResize(event) {
	  event.target.innerWidth;
	  this.elementSizes();
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
		this.elementSizes();

		let resizeSet:string[] = ['home', 'portfolioParallax', 'contactParallax'];

		for (let celement of resizeSet) {
			let imageTarget = document.getElementById(celement);
			imageTarget.style.height = "" + imageTarget + "px"; //imageHeight;
			imageTarget.style.height = "621px"; 
		}

		/*
		let imageTarget = document.getElementById("home");

		imageTarget.style.height = "" + imageTarget + "px"; //imageHeight;
		imageTarget.style.height = "621px"; 
		console.log("AppComponent:ngOnInit:imageTarget.style.height set to " + imageTarget.style.height );
		*/
	}

	toggleMenu() {
		let x = document.getElementById("navDemo"); 
	    if (x.className.indexOf("w3-show") == -1) {
	        x.className += " w3-show";
	    } else {
	        x.className = x.className.replace(" w3-show", "");
	    }
	}

	elementSizes() {
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
		this.imageHeight = document.documentElement.clientHeight;

	}

	portfolioDetail(element) {
		console.log("AppComponent:portfolioDetail:typeof element.alt: " +typeof element);
		let ekeys = Object.keys(element);
		console.log("AppComponent:portfolioDetail:ekeys.length " + ekeys.length);
		for (let k of ekeys) {
			console.log("## " + k + ": " + element.k + " ##");
		}
		// document.getElementById("img01").src = element.src;
		let image = document.getElementById("img01"); //.src = element.src;
		let ikeys = Object.keys(image);
		// OK console.log("AppComponent:portfolioDetail:ikeys.length " + ikeys.length);
		document.getElementById("modal01").style.display = "block";
		//let captionText = document.getElementById("caption");
		//captionText.innerHTML = element.alt;
	}
}
