import React from 'react';
import nookies from 'nookies';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login({ user }) {
  const router = useRouter();

  const [email, setEmail] = React.useState(user.email || '');
  const [password, setPassword] = React.useState('');
  const [viewPassword, setViewPassword] = React.useState('password');

  const [error, setError] = React.useState('');

  return (
    <div>
      <h1>
        Login
      </h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const data = await fetch('/api/login', {
              method: 'PUT',
              body: JSON.stringify({ user: { email, password } }),
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
      <p>{error}</p>
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
