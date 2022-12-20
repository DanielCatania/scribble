import React from 'react';
import nookies from 'nookies';
import Link from 'next/link';
import { useRouter } from 'next/router';
import verifyPassword from '../src/utils/verifyPassword';

export default function SignUp() {
  const router = useRouter();
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
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            verifyPassword(user.password, confirmPassword);

            const data = await fetch('/api/signUp', {
              method: 'POST',
              body: JSON.stringify({ user }),
            }).then((res) => res.json());

            nookies.set(null, 'USER', JSON.stringify({ name: data.user.name, email: data.user.email }), {
              maxAge: 1209600,
              path: '/',
            });

            nookies.set(null, 'THEME', data.user.theme, {
              maxAge: 1209600,
              path: '/',
            });

            nookies.set(
              null,
              'REFRESH_TOKEN',
              data.refreshToken,
              {
                maxAge: 1209600,
                path: '/',
              },
            );

            nookies.set(null, 'ACCESS_TOKEN', data.accessToken, {
              maxAge: 60,
              path: '/',
            });

            router.push('/gallery');
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
      <Link href="/">Home</Link>
    </div>
  );
}
