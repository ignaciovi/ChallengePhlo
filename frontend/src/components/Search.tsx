import React from "react";
import GetDoctorsService from "../api/GetDoctorsService";
import { Doctor } from "./Doctor";

export class SearchForm extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {postcode: '', apiResponse: []};

    this.handleChange = this.handleChange.bind(this);
    this.searchDoctors = this.searchDoctors.bind(this);
  }

  handleChange(event:any) {
    this.setState({postcode: event.target.value});
  }

  async searchDoctors() {
    GetDoctorsService.getDoctors(this.state.postcode)
                .then((res:any) => {
                  this.setState({ apiResponse: res.data })

                }
                ).catch((err:any) => {
                  
                })
              }

  render() {
    return (
      <div>
          <label>
            Enter a postcode:
            <input type="text" value={this.state.postcode} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.searchDoctors} />
        {this.state.apiResponse.map((doctor:any) =>
          <Doctor 
            name = {doctor.name}
            postcode = {doctor.postcode}
            distance = {doctor.distance} />
          )}
          
      </div>
    );
  }
}