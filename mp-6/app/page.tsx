'use client';

export default function Home() {
  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user%20user:email`;
    window.location.href = githubAuthUrl;
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>CS391 GitHub OAuth Login</h1>
      <button onClick={handleLogin} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Sign in with GitHub
      </button>
    </main>
  );
}
