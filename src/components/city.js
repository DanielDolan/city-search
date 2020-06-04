import React, { Component } from "react";
import "./city.css"
import axios from "axios";
class City extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city: "TEXAS",
            records: [] ,
         }
    }
    componentDidMount() {
        axios 
        .get("http://ctp-zip-api.herokuapp.com/city/"+this.state.city.toUpperCase())
        .then((response) => {
            
            this.setState({records:response.data});
        })
        .catch((err) => console.log(err));
    }
    render() {
        return (
            <>
                <div>
                    <h2> Please enter City Name:</h2>
                    <input 
                    className= "prompt-line"
                    type="text"
                    onChange= {(event) => this.setState({city: event.target.value})}
                    placeholder={this.state.city}
                    /> 
                </div>

                <button 
                ClassName= "button-container" 
                onClick={() => {
                    this.componentDidMount();
                }}
                >
                FIND 
                </button>
                </>
        );
            }
        }
        export default City;
