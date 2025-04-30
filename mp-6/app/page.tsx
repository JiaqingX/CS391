'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const params = useSearchParams();

  const name = params.get('name');
  const login = params.get('login');
  const avatar = params.get('avatar');
  const email = params.get('email');

  const [authUrl, setAuthUrl] = useState('');

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

    if (clientId && redirectUri) {
      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user%20user:email`;
      setAuthUrl(githubAuthUrl);
    }
  }, []);

  const handleLogin = () => {
    if (authUrl) window.location.href = authUrl;
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>CS391 OAuth Github Login</h1>

      {login ? (
        <>
          <img src={avatar ?? ''} alt="avatar" width={80} style={{ borderRadius: '50%' }} />
          <p>Username: {login}</p>
          {name && <p>Name: {name}</p>}
          {email && <p>Email: {email}</p>}
        </>
      ) : (
        <button onClick={handleLogin} style={{ padding: '10px 20px', marginTop: '20px' }}>
          Sign in with GitHub
        </button>
      )}
    </main>
  );
}
