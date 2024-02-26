import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
    contact,
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={title}
            name='title'
            onChange={((e) => setTitle(e.target.value))}
            placeholder='Enter a title:'
            required
        />
          <select name='contact'
                  onChange={(e) => {
                      setContact(e.target.value);
                      console.log(e.target.value)
                  }}
                  value={contact}
          >
              <option value='' selected='selected' disabled>No Contact Selected</option>
              {contacts.map(contact => {
                  console.log(contact.name)
                  return <option value={contact.name}>{contact.name}</option>
              })}
          </select>
          <input
              type='date'
              value={date}
              name='date'
            onChange={((e) => setDate(e.target.value))}
            placeholder='Enter a date:'
            required
        />
        <input
            type='time'
            value={time}
            name='time'
            onChange={((e) => setTime(e.target.value))}
            placeholder='Enter a time:'
            required
        />
        <button type='submit'>Add Contact</button>
      </form>
  );
};
