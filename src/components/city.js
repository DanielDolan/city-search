import React, { Component } from "react";
import axios from "axios";
import "./city.css"
class City extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            zipcode: [],
            cityName: null
         };
        this.handleChange = this.handleChange.bind(this);
    }
    //do axios request here
    componentDidUpdate() {
        axios 
        .get("http://ctp-zip-api.herokuapp.com/city/" + this.state.cityName.toUpperCase())
        .then((response) => {
            const data = response.data;
            const newZipObj = {
                listZips: data
            };
            this.setState({zipcode: newZipObj});
        })
        .catch((err) => console.log(err));
    }
    //saves 
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
    //map function, checks if valid city
    render() {
        let display;
        if(!this.state.zipcode.listZips) {
            display = <p>Loading...</p>;
        } else {
            console.log(this.state.cityName);
            display = (
                <>
                <ul>
                    {this.state.zipcode.listZips.map((zipcode) => <li key= { zipcode }> {zipcode} </li>)}
                
                </ul>
                </>
            );
        }
        //display
        return(
        <div>
            <p> Enter city to retrieve zipcodes: </p>
            <input
                type= "text"
                name = "cityName"
                defaultValue = {this.state.cityName}
                onChange={(e) => this.handleChange(e)} >
            </input>
            <div className ="city">{display}</div>
        </div> 
        )     
    }
}
export default City;