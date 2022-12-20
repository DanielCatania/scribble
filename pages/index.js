import React from 'react';
import Link from 'next/link';
import nookies from 'nookies';

export default function Home() {
  return (
    <div>
      <h1>Scribble</h1>
      <Link href="/signUp">Sign Up</Link>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  let user = cookies['USER'];

  if (user) {
    user = JSON.parse(user);
    return {
      redirect: {
        permanent: false,
        destination: '/gallery',
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}
