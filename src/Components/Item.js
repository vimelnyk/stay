import React from "react";



export class Item extends React.Component {
  
	render() { 
     
    return (      
      <a href={this.props.itemElements.link} className="col-md-4 image-item">
       	<div className="row">
      		<div className="col-12 image-wrap">
      			<div className="backgrounded image image-1" style ={ { backgroundImage: "url("+this.props.itemElements.img1+")" } }></div>
        		<div className="backgrounded image image-2" style ={ { backgroundImage: "url("+this.props.itemElements.img2+")" } }></div>
        		<div className="backgrounded image image-3"  style ={ { backgroundImage: "url("+this.props.itemElements.img3+")" } }></div>
        	</div>
        	<div className="text-wrap col-12 ">
        		<h3 className="txt-pretitle color-blue">{this.props.itemElements.preheader}</h3>
        		<h2 className="txt-title color-black">{this.props.itemElements.title}</h2>
        		<div className="price-title color-black">from <span> {this.props.itemElements.price}PLN</span>per/night</div>
        	</div>
        </div>
      </a>
    );
}
}