import React from "react";
import { AppointmentModal } from "./AppointmentModal";

interface IStateProps {
  isModalShown:boolean
}

interface IParentProps {
  distance:number
  id:number
  postcode:string
  name:string
}

export class Doctor extends React.Component<IParentProps,IStateProps> {
  constructor(props:IParentProps) {
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
      <div key={this.props.id}>
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
