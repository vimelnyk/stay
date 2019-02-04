import React, { Component } from 'react';
import $ from 'jquery';
import {Footer} from './Components/Footer';


export class Contacts extends Component { 
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
   //console.log(this.state.myData);   
    return (
      <div>
       <Header data={this.state.myData.header} />
       <Gallery titleData={this.state.myData.gallery} data={this.state.myData.items} />     
       <Footer data={this.state.myData.footer} />
      </div>
    );
  }
}