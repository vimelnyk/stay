import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Header extends React.Component {
componentDidMount(){
//function for converting degrees into radians
function getTanDeg(deg) {
	  let rad = deg * Math.PI/180;
	  return Math.tan(rad);
	}

//function for creating beautiful responsive triangles in the header 

function headerResizing() {

	let inSecWidth = document.querySelector('.header').offsetWidth;	
	let blockHeight1 = (inSecWidth/3)*getTanDeg(30) + 'px';
	let blockHeight2 = (2*inSecWidth/3)*getTanDeg(12.5) + 'px';	
	let leftEls = document.querySelectorAll('.header .pseudo-1, .header .pseudo-1 .pseudo-in');

	for (let i = 0; i < leftEls.length; i++) {
	   	leftEls[i].style.height = blockHeight1 ;
	}

	let rightEls = document.querySelectorAll('.header .pseudo-2, .header .pseudo-2 .pseudo-in');
	for (let i = 0; i < rightEls.length; i++) {
		rightEls[i].style.height = blockHeight2 ;
	}
	}

	document.addEventListener("DOMContentLoaded", function() {

	if(document.querySelector('.header')){			
		headerResizing();
		window.onresize = function() {
		    headerResizing();
		};
	}  

	});
	
}
  render() {
  	if(this.props.data){
     var headerTitle = this.props.data.title;
     console.log(headerTitle);
 }
    return (
	<header id="header" className="header backgrounded">
		<div className="container text-center">
		 <ul>
          <li>
            <Link to="/">Home</Link>
          </li>         
        </ul>
			<h1 className="intro-title color-white uppercase">{headerTitle}</h1>
		</div>
		<i className="pseudo pseudo-1 background-white">
			<span className="pseudo pseudo-in background-blue"></span>
		</i>
		<i className="pseudo pseudo-2 background-white">
			<span className="pseudo pseudo-in background-green"></span>
		</i>
		<i className="pseudo pseudo-3"></i>
	</header>
    );
  }
}