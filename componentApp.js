
import React, { Component, useEffect } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }
  newarr = ["akshat", "goayl"];
  componentDidMount() {
    const reqObj = { id: "56609cdc79b2838b15c2950d5dbf654b" };

    let formBody = [];
    for (let property in reqObj) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(reqObj[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    };

    fetch("http://35.244.8.93:3000/get_course_detail", requestOptions)
      .then((response) => {
        // console.log("This is the response" + response.json());
        return response.json();
      })
      .then((data) => {
        this.setState({ apiResponse: data.response });
      });
  }

  render() {
    return (
      <div>
        {console.log(
          "this is the required thing",
          this.state.apiResponse,
          typeof this.state.apiResponse
        )}
        {
          this.state.apiResponse.map((item)=>{
            return <p>{item.course_slug}</p>
          })
        }
        

        <li></li>
      </div>
    );
  }
}
