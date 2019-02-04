import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from './Home';
import {youTripApartment2} from './youTripApartment2';

class App extends Component { 

	constructor(props){
    super(props);
    this.state = {
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
 // console.log(this.state.myData);  
    return (
     <Router>
      <div>       
        <Route exact path="/" component={Home} />        
        <Route  path="/you-trip-apartment-double" component={youTripApartment2} />        
        <Route  path="/you-trip-apartment-single" component={youTripApartment2} />        
      </div>
    </Router>
    );
  }
}



export default App;
