'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ClientComponent() {
  const params = useSearchParams();
  const name = params.get('name');
  const login = params.get('login');
  const avatar = params.get('avatar');
  const email = params.get('email');

  return (
    <main style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Welcome, {login}</h1>
      <img src={avatar ?? ''} alt="avatar" width={80} style={{ borderRadius: '50%' }} />
      {name && <p>Name: {name}</p>}
      {email && <p>Email: {email}</p>}
    </main>
  );
}

export default function LoggedIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent />
    </Suspense>
  );
}
