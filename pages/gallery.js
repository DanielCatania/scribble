import React from 'react';
import jwt from 'jsonwebtoken';
import nookies from 'nookies';
import { useRouter } from 'next/router';

export default function Gallery(props) {
  const cookies = nookies.get(null);
  const refreshToken = cookies['REFRESH_TOKEN'];

  const router = useRouter();
  const [theme, setTheme] = React.useState(props.theme);
  const [displayBox, setDisplayBox] = React.useState('none');
  const [title, setTitle] = React.useState('');

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

  const styleBox = {
    position: 'fixed',
    right: '20px',
    bottom: '10vh',
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
      <form style={{ display: displayBox, ...styleBox }}>
        <button
          type="button"
          onClick={() => setDisplayBox('none')}
        >
          Close
        </button>
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();

            const { accessToken } = await fetch('/api/token', {
              method: 'POST',
              body: JSON.stringify({ refreshToken }),
            }).then((res) => res.json());

            nookies.set(null, 'ACCESS_TOKEN', accessToken, {
              maxAge: 60,
              path: '/',
            });

            const { note } = await fetch('/api/note/create', {
              method: 'POST',
              body: JSON.stringify({ accessToken, note: { title, content: '' } }),
            }).then((res) => res.json());

            router.push(`/gallery/notes/${note['_id']}`);
          }}
        >
          Create Note
        </button>
      </form>
      <button
        type="button"
        style={{ display: displayBox === 'block' ? 'none' : 'block', ...styleBox }}
        onClick={() => setDisplayBox('block')}
      >
        Create Note
      </button>
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
