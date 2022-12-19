import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Scribble</h1>
      <Link href="/signUp">Sign Up</Link>
    </div>
  );
}
