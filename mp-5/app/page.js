'use client';

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!url || !alias) {
      setMessage('Please enter both URL and alias.');
      return;
    }

    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, alias }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`Short URL created: ${window.location.origin}/${alias}`);
      } else {
        setMessage(data.error || 'Failed to create short URL.');
      }
    } catch (error) {
      setMessage('Request failed. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-3 border rounded text-black bg-white"
      />
      <input
        type="text"
        placeholder="Enter custom alias"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        className="w-full p-3 border rounded text-black bg-white"
      />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Shorten
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-red-400">{message}</p>}
    </main>
  );
}
