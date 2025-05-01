import { redirect } from 'next/navigation';
import clientPromise from '@/lib/mongodb';

export default async function AliasPage({ params }) {
  const { alias } = params;

  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('shortened_urls');

  const record = await collection.findOne({ alias });

  if (record) {
    redirect(record.url);
  }

  return (
    <main className="p-6 text-red-500">
      <h1>404 - Alias Not Found</h1>
    </main>
  );
}
