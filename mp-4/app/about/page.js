import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="p-6">
      <Link href="/" className="button-link mb-4">
        Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p className="text-lg">
        This mini project was created for the CS391 class using the Harvard Art Museums API.
        It demonstrates how to fetch data server-side while keeping API keys secure.
      </p>
    </main>
  );
}
