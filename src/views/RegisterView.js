import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        console.warn(`Err`);
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <h1 className="Title">Enter your data</h1>
      <form onSubmit={handleSubmit} className="Form" autoComplete="off">
        <label htmlFor="name" className="Label">
          Name
        </label>
        <input
          className="Input"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="email" className="Label">
          Email
        </label>
        <input
          className="Input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password" className="Label">
          Password
        </label>
        <input
          className="Input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button className="Button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
