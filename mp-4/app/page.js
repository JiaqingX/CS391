"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [artworks, setArtworks] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchArtworks = (keyword) => {
    if (!keyword.trim()) {
      setArtworks([]);
      setError("Please enter a keyword.");
      return;
    }

    setLoading(true);
    setError(null);
    fetch(`/api/artworks?q=${encodeURIComponent(keyword)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.records && data.records.length > 0) {
          setArtworks(data.records);
        } else {
          setError("No artworks found.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data.");
        setLoading(false);
      });
  };

  return (
    <main className="p-6 min-h-screen">
      <Link href="/about" className="button-link mb-6 inline-block">
        About
      </Link>

      <h1 className="text-3xl font-bold mb-4">Harvard Artworks Search</h1>

      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a keyword"
          className="border rounded px-4 py-2 w-full max-w-md"
        />
        <button
          onClick={() => fetchArtworks(query)}
          className="button-link"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {artworks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="border p-4 rounded shadow bg-white text-black"
            >
              <h2 className="font-semibold text-lg mb-2">{art.title}</h2>
              {art.primaryimageurl ? (
                <img
                  src={art.primaryimageurl}
                  alt={art.title}
                  className="w-full h-auto max-h-64 object-contain"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
