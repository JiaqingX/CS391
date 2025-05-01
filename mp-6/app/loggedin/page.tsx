'use client';

import { useSearchParams } from 'next/navigation';


export const metadata = {
    title: 'Welcome',
  };
  

export default function LoggedIn() {
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
