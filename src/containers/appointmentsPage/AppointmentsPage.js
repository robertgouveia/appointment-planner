import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault();
      addAppointment(name, contact, date, time)
      setName('')
      setContact('')
      setDate('')
      setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
          <AppointmentForm contact={contact} contacts={contacts} handleSubmit={handleSubmit} title={name} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} setTitle={setName} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
          <TileList data={appointments}/>
      </section>
    </div>
  );
};