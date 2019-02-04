import React from "react";
import {Item} from './Item';


export class Gallery extends React.Component { 
  render() {     
     if(this.props.data){
     var items = this.props.data.map(function(item) {
      return <Item itemElements={item} key={item.title} />
    });
}
    return (
      <div className="gallery container">
        <div className="images row">
          {items}          
        </div>
      </div>
    );
  }
}