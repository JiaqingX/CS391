"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/artworks")
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
  }, []);

  return (
    <main className="p-6">
      <Link href="/about" className="button-link mb-4 inline-block">
        About
      </Link>

      <h1 className="text-3xl font-bold mb-4">Harvard Artworks</h1>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((art) => (
          <div key={art.id} className="border p-4 rounded shadow bg-white text-black">
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
    </main>
  );
}
