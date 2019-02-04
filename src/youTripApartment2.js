import React, { Component } from 'react';
import $ from 'jquery';
import {HeroPhoto} from './heroPhoto';
import {Footer} from './Components/Footer';


export class youTripApartment2 extends Component { 
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      myData: {}
    }
  }
  getMyData(){
    $.ajax({
      url: "http://localhost:3000/mydata.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({myData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount(){
    this.getMyData();
  }
  render() {
  
    return (
      <div> 
      <HeroPhoto />
      <Footer data={this.state.myData.footer} />
      </div>
    );
  }
}