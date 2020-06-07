import React from "react";
import SendEmailService from "../api/SendEmailService";

interface IParentProps {
	hideAppointmentModal:() => any
}

interface IStateProps {
  email:string
  name:string
  bookingTime:string
  isAppointmentSent:string
}

export class AppointmentModal extends React.Component<IParentProps,IStateProps> {
  constructor(props:IParentProps) {
    super(props);
    this.state = {email:'', name:'', bookingTime:'', isAppointmentSent:''};

    this.handleChange = this.handleChange.bind(this);
    this.bookAppointment = this.bookAppointment.bind(this);
  }

  handleChange(event:any) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  bookAppointment(){
    SendEmailService.sendEmail(this.state.email, this.state.name, this.state.bookingTime)
      .then((res:any) => {
        this.setState({ isAppointmentSent: res.data })
      }
      ).catch((err:any) => {
        
      })
  }

  render() {
    return (
      <div>
        Enter your details
        Email
        <input value={this.state.email} onChange={this.handleChange} name="email"/>
        Name
        <input value={this.state.name} onChange={this.handleChange} name="name"/>
        Booking Time
        <input value={this.state.bookingTime} onChange={this.handleChange} name="bookingTime"/>

        <button onClick={this.bookAppointment}>Confirm Appointment</button>
        <button onClick={this.props.hideAppointmentModal}>Cancel</button>
      </div>
    );
  }
}