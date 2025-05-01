import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { url, alias } = await req.json();
    console.log("[INFO] Received (raw):", url, alias);

    if (!url || !alias) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const trimmedUrl = url.trim();
    const normalizedUrl = trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://")
      ? trimmedUrl
      : `https://${trimmedUrl}`;

    console.log("[INFO] Normalized:", normalizedUrl, alias);

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("shortened_urls");

    const existing = await collection.findOne({ alias });
    if (existing) {
      return new Response(JSON.stringify({ error: "Alias already exists" }), { status: 409 });
    }

    await collection.insertOne({ url: normalizedUrl, alias });
    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (err) {
    console.error("[ERROR] POST /api/shorten:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
