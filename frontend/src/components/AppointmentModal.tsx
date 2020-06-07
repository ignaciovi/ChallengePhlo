import React from "react";
import SendEmailService from "../api/SendEmailService";

interface IParentProps {
	hideAppointmentModal:() => any
}

interface IStateProps {
  email:string
  name:string
  bookingTime:string
  emailResponse:string
}

export class AppointmentModal extends React.Component<IParentProps,IStateProps> {
  constructor(props:IParentProps) {
    super(props);
    this.state = {email:'', name:'', bookingTime:'', emailResponse:''};

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

  async bookAppointment(){
    SendEmailService.sendEmail(this.state.email, this.state.name, this.state.bookingTime)
      .then((res:any) => {
        this.setState({ emailResponse: res })
      })
      .catch((err:any) => {
        console.log(err) 
      })
  }

  render() {
    let initialScreen = this.state.emailResponse === '';
    let emailSent = this.state.emailResponse === 'Success';
    let emailError = !initialScreen && !emailSent;
    return (
      <div>
        { initialScreen &&
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
        </div>}
        { emailSent &&
        <div>An email has been sent to {this.state.email} with your appointment details</div>
        }
        { emailError &&
        <div>{this.state.emailResponse}</div>
        }
      </div>
    );
  }
}