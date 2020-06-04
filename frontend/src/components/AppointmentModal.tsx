import React from "react";

interface IParentProps {
	hideAppointmentModal:() => any
}

export class AppointmentModal extends React.Component<IParentProps,any> {
  constructor(props:any) {
    super(props);
    this.state = {email:'', name:'', bookingTime:''}
  }

  handleEmailChange(event:any) {
    this.setState({email: event.target.value});
  }

  handleNameChange(event:any) {
    this.setState({name: event.target.value});
  }

  handleBookingChange(event:any) {
    this.setState({bookingTime: event.target.value});
  }

  render() {
    return (
      <div>
        Enter your details
        Email
        <input value={this.state.email}/>
        Name
        <input value={this.state.name}/>
        Booking Time
        <input value={this.state.bookingTime}/>

        <button onClick={undefined}>Confirm Appointment</button>
        <button onClick={this.props.hideAppointmentModal}>Cancel</button>
      </div>
    );
  }
}