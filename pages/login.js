import React from 'react';
import nookies from 'nookies';
import Link from 'next/link';

export default function Login({ user }) {
  const [email, setEmail] = React.useState(user.email || '');
  const [password, setPassword] = React.useState('');
  const [viewPassword, setViewPassword] = React.useState('password');

  return (
    <div>
      <h1>
        Login
      </h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={viewPassword}
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setViewPassword(viewPassword === 'password' ? 'text' : 'password')}
        >
          Change View Password
        </button>
        <input type="submit" value="Login" />
      </form>
      <Link href="/">Home</Link>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  let user = cookies['USER'];

  if (user) user = JSON.parse(user);

  return {
    props: {
      user: user || {},
    },
  };
}
