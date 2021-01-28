import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
        <h1>Home page...</h1>
        <Link href="/todos">Todos List</Link>
    </>
  );
}
