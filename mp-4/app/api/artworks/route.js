export async function GET(request) {
    const apiKey = process.env.HARVARD_API_KEY;
    const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=15&hasimage=1&title=madonna`;
  
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Harvard API failed");
  
      const data = await res.json();
  
      const withImages = data.records.filter((item) => item.primaryimageurl);
  
      return new Response(JSON.stringify({ records: withImages.slice(0, 6) }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch from Harvard API" }),
        { status: 500 }
      );
    }
  }
  