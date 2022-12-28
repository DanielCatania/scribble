import React from 'react';
import jwt from 'jsonwebtoken';
import nookies from 'nookies';
import { useRouter } from 'next/router';

export default function Gallery(props) {
  const cookies = nookies.get(null);
  const refreshToken = cookies['REFRESH_TOKEN'];

  const router = useRouter();
  const [theme, setTheme] = React.useState(props.theme);

  const { name } = props.user;
  const { first } = name;
  const { last } = name;

  const lightTheme = {
    color: 'black',
    backgroundColor: 'white',
  };
  const darkTheme = {
    color: 'white',
    backgroundColor: 'black',
  };
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  const style = {
    ...selectedTheme,
    padding: '1em',
    margin: 0,
    height: '90vh',
  };

  return (
    <div style={style}>
      <button
        type="button"
        onClick={() => {
          nookies.destroy(null, 'USER');
          nookies.destroy(null, 'THEME');
          nookies.destroy(null, 'REFRESH_TOKEN');
          nookies.destroy(null, 'ACCESS_TOKEN');

          router.push('/');
        }}
      >
        Logout
      </button>
      <button
        type="button"
        onClick={async () => {
          const { accessToken } = await fetch('/api/token', {
            method: 'POST',
            body: JSON.stringify({ refreshToken }),
          }).then((res) => res.json());

          nookies.set(null, 'ACCESS_TOKEN', accessToken, {
            maxAge: 60,
            path: '/',
          });

          const data = await fetch('/api/change/theme', {
            method: 'PUT',
            body: JSON.stringify({ accessToken }),
          }).then((res) => res.json());
          const newTheme = data.theme;
          setTheme(newTheme);

          nookies.set(null, 'THEME', newTheme, {
            path: '/',
          });
        }}
      >
        Change Theme
      </button>
      <h1>Gallery</h1>
      <h2>
        Hello,
        {' '}
        <span style={{ textTransform: 'capitalize' }}>
          {first}
          {' '}
          {last}
          !
        </span>
      </h2>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const refreshToken = cookies['REFRESH_TOKEN'];
  let user = cookies['USER'];
  const theme = cookies['THEME'] || 'light';

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
  try {
    jwt.verify(refreshToken, process.env.KEY);

    const { accessToken } = await fetch(`${process.env.URL}/api/token`, {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    }).then((res) => res.json());

    const data = await fetch(`${process.env.URL}/api/login/token`, {
      method: 'PUT',
      body: JSON.stringify({ accessToken }),
    }).then((res) => res.json());

    nookies.set(ctx, 'USER', JSON.stringify({ name: data.user.name, email: data.user.email }), {
      path: '/',
    });

    nookies.set(ctx, 'THEME', data.user.theme, {
      maxAge: 1209600,
      path: '/',
    });

    nookies.set(
      ctx,
      'REFRESH_TOKEN',
      data.refreshToken,
      {
        maxAge: 1209600,
        path: '/',
      },
    );

    nookies.set(ctx, 'ACCESS_TOKEN', accessToken, {
      maxAge: 60,
      path: '/',
    });
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };
  }

  user = JSON.parse(user);

  return {
    props: {
      user,
      theme,
    },
  };
}
