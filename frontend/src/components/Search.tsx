import React from "react";

export class SearchForm extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {value: '', apiResponse: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:any) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event:any) {
  }

  render() {
    return (
      <div>Find a GP
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a postcode:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.apiResponse}
      </div>
    );
  }
}