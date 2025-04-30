import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  if (!code) {
    return NextResponse.json({ error: 'Missing code parameter' }, { status: 400 });
  }

  const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
    }),
  });

  const tokenData = await tokenRes.json();
  const access_token = tokenData.access_token;

  if (!access_token) {
    return NextResponse.json({ error: 'Failed to get access token' }, { status: 500 });
  }

  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/vnd.github+json',
    },
  });

  const user = await userRes.json();

  const name = encodeURIComponent(user.name || '');
  const login = encodeURIComponent(user.login || '');
  const avatar = encodeURIComponent(user.avatar_url || '');
  const email = encodeURIComponent(user.email || '');

  const redirectUrl = `${req.nextUrl.origin}/?name=${name}&login=${login}&avatar=${avatar}&email=${email}`;
  return NextResponse.redirect(redirectUrl);
}
