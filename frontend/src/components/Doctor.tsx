import React from "react";
import { AppointmentModal } from "./AppointmentModal";

export class Doctor extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = { isModalShown: false };
    this.displayAppointmentModal = this.displayAppointmentModal.bind(this);
    this.hideAppointmentModal = this.hideAppointmentModal.bind(this);
  }

  displayAppointmentModal() {
    this.setState({isModalShown: true});
  }

  hideAppointmentModal() {
    this.setState({isModalShown: false});
  }

  render() {
    return (
      <div>
        {this.props.name}
        {this.props.postcode}
        {this.props.distance}
        <button onClick={this.displayAppointmentModal}>Book Appointment</button>

        {this.state.isModalShown && 
        <AppointmentModal 
        hideAppointmentModal = {this.hideAppointmentModal}/>}

        
      </div>
    );
  }
}