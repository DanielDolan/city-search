import React, { Component } from "react";
import axios from "axios";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = { city: null };
  }

  componentDidMount() {
    axios
      .get("http://ctp-zip-api.herokuapp.com/city/" + this.props.City)
      .then((response) => {
        const data = response.data;

        const newCityObj = {
          city: data.City,
        };

        this.setState({ city:newCityObj });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let display;
    if (!this.state.city) {
      display = <p>Loading...</p>;
    } else {
      display = (
        <>
          <ul>
            <li>{this.state.city.Zipcode} </li>
          </ul>
        </>
      );
    }

    return <div className="city">{display}</div>;
  }
}

export default City;