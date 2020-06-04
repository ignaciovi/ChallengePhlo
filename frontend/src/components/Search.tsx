import React from "react";
import GetDoctorsService from "../api/GetDoctorsService";

export class SearchForm extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {value: '', apiResponse: ''};

    this.handleChange = this.handleChange.bind(this);
    this.searchDoctors = this.searchDoctors.bind(this);
  }

  handleChange(event:any) {
    this.setState({value: event.target.value});
  }

  async searchDoctors() {
    GetDoctorsService.getDoctors()
                .then((res:any) => {
                  debugger;
                  this.setState({ apiResponse: `${res.data}` })

                }
                ).catch((err:any) => {
                  debugger;
                  
                })
              }

  render() {
    return (
      <div>
          <label>
            Enter a postcode:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.searchDoctors} />
        {this.state.apiResponse}
      </div>
    );
  }
}