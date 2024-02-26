import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
      const duplicate = contacts.some((contact) => {
          return contact['name'] === name;
      })

      if(!duplicate){
          addContact(name, phone, email)
          setError(null)
          setName('')
          setPhone('')
          setEmail('')
      } else {
          setError('Duplicate Name')
      }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
          <h2>Add Contact</h2>
          <ContactForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} handleSubmit={handleSubmit} error={error}/>
      </section>
        <hr/>
        <section>
            <h2>Contacts</h2>
            <TileList  data={contacts}/>
        </section>
    </div>
  );
};
