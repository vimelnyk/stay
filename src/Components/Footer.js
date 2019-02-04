import React from 'react';

export class Footer extends React.Component {
  render() {
  if(this.props.data){
     var footerCopyright = this.props.data.copyright;
     var footerYear = this.props.data.year;
     
 }
    return (
      <footer className="footer">        
      		<div className="container">
      			<div className="row">
      				<div className="col text-center">
      					<span className="color-blue">{footerCopyright}. </span><span className="color-green">	{footerYear}.</span>
      				</div>
      			</div>
      		</div>
      </footer>
    );
  }
}