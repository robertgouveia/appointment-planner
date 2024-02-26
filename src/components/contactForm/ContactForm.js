import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
    error
}) => {
  return (
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={name}
            name='name'
            onChange={((e) => setName(e.target.value))}
            placeholder='Enter your name:'
            required
        />
        {error}
        <input
            type='text'
            value={phone}
            pattern='[0-9]{1,5}\s[0-9]{1,5}\s[0-9]{1,5}'
            name='phone'
            onChange={((e) => setPhone(e.target.value))}
            placeholder='Enter your mobile:'
            required
        />
        <input
            type='text'
            value={email}
            name='email'
            onChange={((e) => setEmail(e.target.value))}
            placeholder='Enter your email:'
            required
        />
        <button type='submit'>Add Contact</button>
      </form>
  );
};

