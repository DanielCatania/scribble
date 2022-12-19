import React from 'react';
import Link from 'next/link';
import verifyPassword from '../src/utils/verifyPassword';

export default function SignUp() {
  const [user, setUser] = React.useState({
    name: {
      first: '',
      last: '',
    },
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [viewPassword, setViewPassword] = React.useState('password');
  const [error, setError] = React.useState('');

  return (
    <div>
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          try {
            verifyPassword(user.password, confirmPassword);
            setError('');
            setUser({
              name: {
                first: '',
                last: '',
              },
              email: '',
              password: '',
            });
            setConfirmPassword('');
          } catch (err) {
            setError(err.message);
          }
        }}
      >
        <input
          type="text"
          value={user.name.first}
          placeholder="First Name"
          required
          onChange={(e) => {
            setUser(
              {
                ...user,
                name: {
                  ...user.name,
                  first: e.target.value,
                },
              },
            );
          }}
        />
        <input
          type="text"
          value={user.name.last}
          placeholder="Last Name"
          required
          onChange={(e) => {
            setUser(
              {
                ...user,
                name: {
                  ...user.name,
                  last: e.target.value,
                },
              },
            );
          }}
        />
        <input
          type="email"
          value={user.email}
          placeholder="Email"
          required
          onChange={(e) => {
            setUser(
              {
                ...user,
                email: e.target.value,
              },
            );
          }}
        />
        <input
          type={viewPassword}
          value={user.password}
          placeholder="Password"
          minLength={8}
          maxLength={25}
          required
          onChange={(e) => {
            setUser(
              {
                ...user,
                password: e.target.value,
              },
            );
          }}
        />
        <input
          type={viewPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          minLength={8}
          maxLength={25}
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => setViewPassword(viewPassword === 'password' ? 'text' : 'password')}
        >
          <span>Change View Password</span>
        </button>
        <input type="submit" value="Sign Up" />
      </form>
      <p style={{ color: 'red' }}>{error}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href="/">Home</Link>
    </div>
  );
}
